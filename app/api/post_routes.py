from flask import Blueprint, abort
from flask_login import login_required
from app.models import Post, User


post_routes = Blueprint('posts', __name__)

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
  form = NewPostForm()