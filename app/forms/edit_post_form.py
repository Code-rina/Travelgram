from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from app.models import Post


class EditPostForm(FlaskForm):
    caption = TextAreaField('caption')
    submit = SubmitField('submit')
