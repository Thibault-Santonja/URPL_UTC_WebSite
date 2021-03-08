Espace UTC Website
===


To launch the app, run the front:
```bash
npm start espace_utc_front/
```

And if needed (especially if you need to access to some data) run the back too:
```bash
python manage.py runserver
```

Project made with Django as back and React as Front (but we can  use another technology)



## Project creation 
### Base

Create main folder and move into it
```bash
mkdir espace_UTC_website && cd $_
```

Once done create and activate the new Python environment
```bash
python3 -m venv venv
source venv/bin/activate
```

Install Django
```bash
pip install django djangorestframework
```



### Project Structure

Create a new Django project
```bash
django-admin startproject espace_utc_app .
django-admin startapp espace_utc_api
```

In theory, we have this :
```bash
(venv) .../espace_UTC_website$ tree -d -L 1
	.
	├── espace_utc_api
	├── espace_utc_app
	└── venv
```

Tell Django how to use `espace_utc_api` in `espace_utc_app/settings.py` :
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'espace_utc_api.apps.EspaceUtcApiConfig'  # activate the new app
]
```



### Django model

**Take a look to Django fields documentation try to choose the most appropriate field please <3**

in `espace_utc_api/models.py` create a `user` model :
```python
from django.db import models
from django import forms


# Create your models here.
class User(models.Model):
    email = models.EmailField()
    hash = models.CharField(max_length=100, widget=forms.PasswordInput')  # Password
    name = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
```

When it's done, create a migration and migrate the model (this will create a folder migrations and the db `db.sqlite3`)
```bash
python manage.py makemigrations espace_utc_api
python manage.py migrate
```

With IntellJ, don't hesitate to create a Run Config : 
![](https://puu.sh/Hndtk/32c6c8cc84.png)



### Django REST serializers
Serialization is the act of transforming an object into another data format. After transforming an object we can save it to a file or send it through the network. How do you render a Python class to JSON in a browser? With a Django REST serializer! A serializer converts JSON to objects. 


Create a new file `espace_utc_api/serializers.py`
```python
from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'hash', 'name', 'created_at')
```



### Create the views & URLs
DANGER : Django is a Model – View – Template framework

In `espace_utc_api/views.py`, create the view :
```python
from .models import User
from .serializers import UserSerializer
from rest_framework import generics


# Create your views here (Get and Post).
class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
```

In `espace_utc_app/urls.py`, configure the URL mapping :
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('users.urls')),
]
```

Create `espace_utc_api/urls.py`, and add the URLs :
```python
from django.urls import path
from . import views

urlpatterns = [
    path('api/user/', views.UserListCreate.as_view()),
]
```

Finaly, in `espace_utc_app/settings.py`, enable rest_framework :
```python
INSTALLED_APPS = [
    # omitted for brevity
    'espace_utc_api.apps.EspaceUtcApiConfig',
    'rest_framework'
]
```

And now, run the server !



### Front with React

For easier beginning : [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)
```bash
npm init react-app espace_utc_front
```

Wait for the installation and next, add the start configuration to launch the front app :
[](https://puu.sh/Hneoc/0a22a8d27e.png)

Next, visit [localhost:3000](http://localhost:3000/)



### Test

Please use coverage to test your Django code :
Install with pip:
```bash
pip install coverage
```

And run this everytime your code changes, run coverage. Next, generate the report in html `coverage html` or call the report `coverage report`:
```bash
coverage run --source='.' manage.py test
coverage html
coverage report
```


### Run server
Don't hesitate to create a configuration or run :
```bash
python manage.py runserver
```
And check [http://127.0.0.1:8000/api/user/](http://127.0.0.1:8000/api/user/) (note: 127.0.0.1 or localhost is the same thing : http://localhost:8000/api/user/)


To access to the admin page (127.0.0.1:8000/admin/), mind to create a django superuser :
```bash
python manage.py createsuperuser
```


**NOTE**: it is a good idea to disable the browseable API in production with this configuration in `espace_utc_app/settings.py`:
```python
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    )
}
```
While there create some contact in the builtin form. In the next section we'll get into React.
