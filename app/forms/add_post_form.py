from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Length, URL
from app.models import Post
import re

# def image_valid_http(form, field):
#     image_url = field.data
#     valid = re.search(r'(http).*/', image_url.lower())
#     if not valid:
#         raise ValidationError("Valid image URL must start with http or https.")

def image_valid_jpg(form, field):
    image_url = field.data
    valid = re.search(r'\.(png|jpeg|jpg|gif)$', image_url.lower())
    if not valid:
        raise ValidationError("Valid image URL must end with .png, .jpeg, .jpg or .gif.")

class AddPostForm(FlaskForm):
    caption = TextAreaField('caption', validators=[DataRequired(message='Please provide a caption.'),
    Length(min=1,max=500, message='Caption has to have at least 1 and less than 500 characters.')])
    
    image_url = StringField('image_url', validators=[
                           DataRequired(message='Please provide an image url.'), 
                           Length(min=1, max=255, message='Please provide image URL that is less than 255 characters.'),
                           URL(require_tld=True, message="The image URL provided is not valid. Please provide a valid URL."),
                           image_valid_jpg])
# image_valid_http
    submit = SubmitField('submit')
