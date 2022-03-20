from sqlite3 import IntegrityError
from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Comment


class AddCommentForm(FlaskForm):
    user_id = IntegerField('user_id')
    post_id = IntegerField('post_id')
    comment = TextAreaField('comment', Length(max=500, message="Maximum amount of characters for comment is 500."), validators=[DataRequired('Please provide a comment.')])
    submit = SubmitField('submit')
