# Generated by Django 2.1.2 on 2019-07-07 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0003_auto_20190620_0150'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rut', models.CharField(max_length=10)),
                ('nombreComp', models.CharField(max_length=100)),
                ('edad', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Examen',
            fields=[
                ('cod_examen', models.AutoField(primary_key=True, serialize=False)),
                ('rut_entidad', models.CharField(max_length=20)),
                ('rut_paciente', models.CharField(max_length=20)),
                ('fecha_solicitud', models.DateField(auto_now_add=True, null=True)),
                ('fecha_entrega', models.DateField(null=True)),
                ('estado', models.CharField(max_length=200)),
                ('rut_especialista', models.CharField(max_length=20)),
            ],
        ),
        migrations.DeleteModel(
            name='Paciente',
        ),
    ]
