from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Comment


class AddCommentForm(FlaskForm):
    comment = TextAreaField('comment', validators=[DataRequired('Please provide a comment.')])
    submit = SubmitField('submit')
