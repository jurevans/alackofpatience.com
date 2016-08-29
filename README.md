A Lack Of Patience - alackofpatience.com
===========================================

To install frontend:
--------------------

```
npm install
```

To build:
---------

```
gulp
```

To build & watch:
-----------------

```
gulp watch
```

To install REST API (using virtualenv):
---------------------------------------

```
source api/bin/activate 
pip install django
pip install django-rest-framework
pip install httpie
python api/app/manage.py makemigrations
python api/app/manage.py migrate
python api/app/manage.py runserver
```

Django WSGI Configuration:
--------------------------

TBD
