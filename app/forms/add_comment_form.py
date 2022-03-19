from sqlite3 import IntegrityError
from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Comment


class AddCommentForm(FlaskForm):
    user_id = IntegerField('user_id')
    post_id = IntegerField('post_id')
    comment = TextAreaField('comment', validators=[DataRequired('Please provide a comment.')])
    submit = SubmitField('submit')
