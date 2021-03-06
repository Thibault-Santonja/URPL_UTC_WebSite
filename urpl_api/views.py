from django.shortcuts import render
from .models import User, Contact
from .serializers import UserSerializer, ContactSerializer
from rest_framework import generics


# Create your views here (Get and Post).
class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Create your views here (Get and Post).
class ContactListCreate(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer