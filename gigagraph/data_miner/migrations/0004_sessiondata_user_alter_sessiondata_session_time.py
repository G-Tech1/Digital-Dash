# Generated by Django 4.0.3 on 2022-07-27 23:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('data_miner', '0003_sessiondata_session_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='sessiondata',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='session_data', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='sessiondata',
            name='session_time',
            field=models.PositiveIntegerField(null=True),
        ),
    ]