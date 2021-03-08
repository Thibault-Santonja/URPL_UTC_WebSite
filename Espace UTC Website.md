Espace UTC Website
===

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



### Test

Please use coverage to test your Django code :
Install with pip:
```bash
pip install coverage
```

And run this everytime your code changes:
```bash
coverage run --source='.' manage.py test
```