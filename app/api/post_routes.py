from flask import Blueprint, abort, request
from flask_login import login_required
from app.models import Post, User, db
from app.forms.add_post_form import AddPostForm


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
def get_all_posts():
  posts = Post.query.all()

  return {"posts": [post.to_dict() for post in posts]}


# Getting one post
@post_routes.route('/<int:id>')
def get_one_post(id):
  post = Post.query.get(id)
  
  return post.to_dict()


# Creating a post
@post_routes.route('/', methods=["POST"])
def create_post():
  form = AddPostForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    post = Post(user_id=form.data['user_id'], caption=form.data['caption'], image_url=form.data['image_url'])

    db.session.add(post)

    db.session.commit()

    return post.to_dict()
  else:
    return{'errors': validation_errors_to_error_messages(form.errors)}