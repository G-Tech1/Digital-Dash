# Generated by Django 4.0.3 on 2022-07-27 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("data_miner", "0004_sessiondata_user_alter_sessiondata_session_time"),
    ]

    operations = [
        migrations.AlterField(
            model_name="sessiondata",
            name="day",
            field=models.DateField(),
        ),
    ]
