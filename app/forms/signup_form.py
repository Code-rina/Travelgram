from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


def profile_img_valid(form, field):
    profile_img = field.data
    if "http" not in "profile_img" or "https" not in "profile_img" or "." not in "profile_img":
        raise ValidationError("Please provide a valid url.")


def profile_img_length(form, field):
    profile_image = field.data
    if (len(profile_image) > 255):
        raise ValidationError("Image irl must be less than 255 characters.")


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired('Username is required.'),
        Length(max=35, message="Username must be less than 35 characters."),
        username_exists])

    fullname = StringField('fullname', validators=[DataRequired('Full name is required.')])

    email = StringField('email', validators=[DataRequired('Email is required.'),
        Email(message='Must be a valid email.'), user_exists])

    password = StringField('password', validators=[DataRequired('Password is required.')])

    profile_img = StringField('profile_img', validators=[DataRequired(), profile_img_valid])