# Generated by Django 3.2.13 on 2022-11-22 04:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='image',
            field=models.ImageField(blank=True, default='./defaultprofilepic.jpg', null=True, upload_to='upload_to'),
        ),
    ]
