from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Length, URL
from app.models import Post


# def image_valid(form, field):
#     image_url = field.data
#     if "http" not in "image_url" or "https" not in "image_url" or"jpg" not in "image_url" or"jpeg" not in "image_url" or"png" not in "image_url":
#         raise ValidationError("Please provide a valid url.")
# Figure out why is the function above not working

class AddPostForm(FlaskForm):
    caption = TextAreaField('caption', validators=[DataRequired(message='Please provide a caption.'),
    Length(min=1,max=500, message='Caption has to have a maximum of 500 characters.')])
    
    image_url = StringField('image_url', validators=[
                           DataRequired(message='Please provide an image url.'), URL(require_tld=True, message="The url provided is not valid. Please provide a valid url.")])
#   , image_valid
    submit = SubmitField('submit')
