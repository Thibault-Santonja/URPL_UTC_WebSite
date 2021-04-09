from django.db import models


# Create your models here.
class User(models.Model):
    email = models.EmailField()
    hash = models.CharField(max_length=100)  # Password
    name = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


class Contact(models.Model):
    sender = models.CharField(max_length=127)
    mail = models.EmailField()
    subject = models.CharField(max_length=127)
    body = models.CharField()
    created_at = models.DateTimeField(auto_now_add=True)
