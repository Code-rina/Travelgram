from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, InputRequired, Length, Email, ValidationError, EqualTo
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


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(message='Please enter a username.'), 
        Length(min=1,max=35, 
        message="Username has to be at least 1 character and no more than 35 characters."), 
        username_exists])

    fullname = StringField(
        'fullname', validators=[DataRequired(message='Please enter a full name.'), 
        Length(min=1,max=255, 
        message="Full name has to be at least 1 character and no more than 255 characters.")])

    email = StringField(
        'email', validators=[DataRequired(message='Please enter an email address.'), Length(min=4,max=60), 
        user_exists, 
        Email('Please enter a valid email address')])

    password = StringField(
        'password', validators=[InputRequired(message='Password is required.'),
         EqualTo('confirm_password', message='Both passwords have to match.')])

    confirm_password = StringField(
        'confirm_password', validators=[DataRequired(message='Please confirm your password.')])

