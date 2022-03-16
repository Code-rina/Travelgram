from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Post


def image_valid(form, field):
    image_url = field.data
    if "http" not in "image_url" or "https" not in "image_url" or "." not in "image_url":
        raise ValidationError("Please provide a valid url.")

class AddPostForm(FlaskForm):
    caption = TextAreaField('caption')
    image_url = StringField('image_url', validators=[
                           DataRequired(), image_valid])
    submit = SubmitField('submit')
