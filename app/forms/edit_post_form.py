from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Post


class EditPostForm(FlaskForm):
    caption = TextAreaField('caption',validators=[Length(max=500, message='Caption has to have maximum of 500 characters.')])
    submit = SubmitField('submit')
