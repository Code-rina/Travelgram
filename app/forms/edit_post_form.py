from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Post


class EditPostForm(FlaskForm):
    caption = TextAreaField('caption',validators=[DataRequired(message="Please provide a caption for your post."), 
    Length(min=1,max=500, message='Caption has to have minimum of 1 character and less than 500 characters.')])
    submit = SubmitField('submit')
