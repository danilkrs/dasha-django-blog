from django import forms
from .models import Comment

GENDER = (('0', 'Select gender'),('1', 'Man'), ('2', 'Woman'))

class CommentForm(forms.ModelForm):
	class Meta:
		model = Comment
		fields = ('author', 'gender', 'text')
		widgets = {
			'author': forms.TextInput(attrs={'class' : 'form-control'}),
			'gender': forms.Select(attrs={'class' : 'form-control'}, choices=GENDER),
			'text': forms.Textarea(attrs={'class' : 'form-control'}),
		}