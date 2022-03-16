from flask import Blueprint, abort
from flask_login import login_required
from app.models import Post, User


post_routes = Blueprint('posts', __name__)

# Getting all posts
@post_routes.route('/')
def get_all_posts():
  posts = Post.query.all()
  # if post is None:
  #   abort(404)

  # posts = Post.query.order_by(Post.id.desc()).all()
  return {"posts": [post.to_dict() for post in posts]}