from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


# def user_exists(form, field):
#     # Checking if user exists
#     email = field.data
#     user = User.query.filter(User.email == email).first()
#     if user:
#         raise ValidationError('Email address is already in use.')


# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


# def profile_url_valid(form, field):
#     profile_img = field.data
#     if "https" not in profile_img:
#         raise ValidationError("Please provide a valid url.")


# def profile_url_len(form, field):
#     updated_profile_img = field.data
#     if (len(updated_profile_img) > 255):
#         raise ValidationError("Image url must be less than 255 characters.")

# def email_len(form, field): 
#     updated_email = field.data
#     if len(updated_email) > 255:
#         raise ValidationError("Email must be less than 255 characters.")
    
# def username_len(form, field):
#     updated_username = field.data
#     if len(updated_username) > 40: 
#         raise ValidationError("Username must be less than 40 characters.")

class SignUpForm(FlaskForm):
    username = StringField(
        'username')

    fullname = StringField('fullname')

    email = StringField('email')

    password = StringField('password')
    confirm_password = StringField('confirm_password')
    # profile_img = StringField('profile_img')
    # , profile_url_valid, profile_url_len
