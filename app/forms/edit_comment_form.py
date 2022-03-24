from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Comment


class EditCommentForm(FlaskForm):
    comment = TextAreaField('comment', validators=[DataRequired('Please provide a comment.'), 
    Length(min=1, max=500, message="Please provide a comment that has at least 1 character and less than 500 characters.")])
    submit = SubmitField('submit')
