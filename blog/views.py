from django.shortcuts import render
from django.shortcuts import redirect
from django.utils import timezone
from .models import Post
from django.shortcuts import render, get_object_or_404


def post_list(request):
	posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')
	context = {'posts': posts}
	return render(request, 'blog/post_list.html', context)

def post_detail(request, pk):
	post = get_object_or_404(Post, pk=pk)
	context = {'post': post}
	return render(request, 'blog/post_detail.html', context)