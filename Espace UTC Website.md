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

in `espace_utc_api/models.py` create a `user` model