from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Comment


class EditCommentForm(FlaskForm):
    comment = TextAreaField('comment', Length(max=500, message="Maximum amount of characters for caption is 500."))
    submit = SubmitField('submit')
