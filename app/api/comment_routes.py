from flask import Blueprint, abort, request
from flask_login import login_required
from app.models import Post, Comment, db
from app.forms.add_comment_form import AddCommentForm
from app.forms.edit_comment_form import EditCommentForm


comment_routes = Blueprint('comments', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages


# Getting all comments
@comment_routes.route('/')
def get_all_comments():
  comments = Comment.query.all()

  return {"comments": [comment.to_dict() for comment in comments]}


# # Getting one post
# @post_routes.route('/<int:id>')
# def get_one_post(id):
#   post = Post.query.get(id)
  
#   return post.to_dict()


# # Creating a post
# @post_routes.route('/addpost', methods=["POST"])
# def create_post():
#   data = request.json
#   form = AddPostForm()
#   form['csrf_token'].data = request.cookies['csrf_token']

#   if form.validate_on_submit():

#     post = Post(user_id=data['user_id'], caption=form.data['caption'], image_url=form.data['image_url'])

#     db.session.add(post)

#     db.session.commit()

#     return post.to_dict()   
#   else:
#     return{'errors': validation_errors_to_error_messages(form.errors)}

# # Edit a post
# @post_routes.route('/editpost/<int:id>', methods=["PUT"])
# def edit_post(id):

#   form = EditPostForm()
#   form['csrf_token'].data = request.cookies['csrf_token']

#   edit_post = Post.query.get(id)

#   if form.validate_on_submit():
#     # print('post::::', edit_post)
#     edit_post.caption = form.data['caption']


#     db.session.commit()

#     return edit_post.to_dict()
#   else:
#     return{'errors': validation_errors_to_error_messages(form.errors)}

# # Delete a post
# @post_routes.route('/deletepost/<int:id>', methods=["DELETE"])
# def delete_post(id):
#   delete_post = Post.query.get(id)

#   db.session.delete(delete_post)
#   db.session.commit()

#   return {id: delete_post.id}
    