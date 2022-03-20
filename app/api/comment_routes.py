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

# Creating a comment
@comment_routes.route('/addcomment', methods=["POST"])
# @login_required
def create_new_comment():
  data = request.json
  form = AddCommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']
    
  # print("!!!!!!!!!!", form.data)
  if form.validate_on_submit():
    add_comment = Comment(user_id=form.data['user_id'], post_id=form.data['post_id'], comment=form.data['comment'])

    db.session.add(add_comment)

    db.session.commit()

    return add_comment.to_dict()   
  else:
    return{'errors': validation_errors_to_error_messages(form.errors)}

# Edit a comment
@comment_routes.route('/editcomment/<int:id>', methods=["PUT"])
def edit_comment(id):

  form = EditCommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  edit_comment = Comment.query.get(id)

  if form.validate_on_submit():
  
    edit_comment.comment = form.data['comment']

    print("edit_comment:::::", edit_comment)
    db.session.commit()

    return edit_comment.to_dict()
  else:
    return{'errors': validation_errors_to_error_messages(form.errors)}

# Delete a comment
@comment_routes.route('/deletecomment/<int:id>', methods=["DELETE"])
def delete_comment(id):
  delete_comment = Comment.query.get(id)

  db.session.delete(delete_comment)
  db.session.commit()

  return {id: delete_comment.id}
    