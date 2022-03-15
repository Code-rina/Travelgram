from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Comment


class EditCommentForm(FlaskForm):
    comment = TextAreaField('comment')
    submit = SubmitField('submit')
