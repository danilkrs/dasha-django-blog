# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='local_post_image',
            field=models.ImageField(blank=True, null=True, upload_to='post_iamges/%Y/%m/%d/'),
        ),
        migrations.AddField(
            model_name='post',
            name='post_image',
            field=models.CharField(blank=True, null=True, max_length=300),
        ),
        migrations.AddField(
            model_name='post',
            name='short_text',
            field=models.TextField(default=''),
        ),
    ]
