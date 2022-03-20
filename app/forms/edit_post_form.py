from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Post


class EditPostForm(FlaskForm):
    caption = TextAreaField('caption', Length(max=500, message="Maximum amount of characters for caption is 500."))
    submit = SubmitField('submit')
