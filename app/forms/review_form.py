from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, NumberRange

class ReviewForm(FlaskForm):
    rating = IntegerField('rating', 
        validators=[DataRequired(), NumberRange(min=1, max=5, message="Rating must be 1-5.") ])
    review = StringField('review', validators=[DataRequired()])