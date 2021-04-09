from rest_framework import serializers
from .models import User, Contact


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'hash', 'name', 'created_at')


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('sender', 'mail', 'subject', 'body', 'created_at')
