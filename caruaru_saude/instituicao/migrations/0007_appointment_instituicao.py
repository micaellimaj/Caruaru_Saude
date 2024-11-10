# Generated by Django 5.1.1 on 2024-11-10 15:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("instituicao", "0006_instituicao"),
    ]

    operations = [
        migrations.AddField(
            model_name="appointment",
            name="instituicao",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="instituicao.instituicao",
            ),
        ),
    ]
