from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Comment


class EditCommentForm(FlaskForm):
    comment = TextAreaField('comment', validators=[Length(max=500, message='Please provide a comment.')])
    submit = SubmitField('submit')
