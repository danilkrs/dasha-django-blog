from django import forms
from .models import Comment

GENDER = (('', 'Select gender'),('1', 'Man'), ('2', 'Woman'))

class CommentForm(forms.ModelForm):
	class Meta:
		model = Comment
		fields = ('author', 'gender', 'text')
		widgets = {
			'author': forms.TextInput(attrs={'placeholder' : 'Name*'}),
			'gender': forms.Select(choices=GENDER),
			'text': forms.Textarea(attrs={'placeholder' : 'Comment*'}),
		}