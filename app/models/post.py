from .db import db
from datetime import datetime

class Post(db.Model):
  __tablename__ = "posts"

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  image_url = db.Column(db.String(255), nullable=False)
  caption = db.Column(db.Text)
  created_at = db.Column(db.DateTime, default=datetime.now())
  updated_at = db.Column(db.DateTime, default=datetime.now(), onupdate=datetime.now())

  user = db.relationship("User", back_populates="post")
  comment = db.relationship("Comment", back_populates="post", cascade="all,delete-orphan")


  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'username': self.user.username if self.user else None,
      'image_url': self.image_url,
      'caption': self.caption,
      'created_at': self.created_at,
      'updated_at': self.updated_at
    }