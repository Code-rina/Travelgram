from flask import Blueprint, abort, request
from flask_login import login_required
from app.models import Post, User, db
from app.s3_config import (
    upload_file_to_s3, allowed_file, get_unique_filename)
from app.forms.add_post_form import AddPostForm
from app.forms.edit_post_form import EditPostForm


post_routes = Blueprint('posts', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages


# Getting all posts
@post_routes.route('/')
@login_required
def get_all_posts():
  posts = Post.query.all()

  return {"posts": [post.to_dict() for post in posts]}


# Getting one post
@post_routes.route('/<int:id>')
@login_required
def get_one_post(id):
  post = Post.query.get(id)

  # if post is None:
  #   abort(404)
  
  return post.to_dict()


# Creating a post
@post_routes.route('/addpost', methods=["POST"])
@login_required
def create_post():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    
    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        print("upload!!!!!!!", upload)
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    data = request.json
    form = AddPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

      post = Post(user_id=data['user_id'], caption=form.data['caption'], image_url=url)

      db.session.add(post)

      db.session.commit()

      return post.to_dict()   
    else:
      return{'errors': validation_errors_to_error_messages(form.errors)}, 400

# Edit a post
@post_routes.route('/editpost/<int:id>', methods=["PUT"])
@login_required
def edit_post(id):

  form = EditPostForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  edit_post = Post.query.get(id)

  if form.validate_on_submit():
    # print('post::::', edit_post)
    edit_post.caption = form.data['caption']


    db.session.commit()

    return edit_post.to_dict()
  else:
    return{'errors': validation_errors_to_error_messages(form.errors)}, 400

# Delete a post
@post_routes.route('/deletepost/<int:id>', methods=["DELETE"])
@login_required
def delete_post(id):
  delete_post = Post.query.get(id)

  db.session.delete(delete_post)
  db.session.commit()

  return {id: delete_post.id}
    