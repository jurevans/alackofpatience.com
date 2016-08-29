A Lack Of Patience - alackofpatience.com
===========================================

To install frontend:
--------------------

```
npm install
```

To build SASS:
---------

```
gulp
```

To build JS and watch:
-----------------

```
webpack-dev-server
```

To install REST API (using virtualenv):
---------------------------------------

```
source api/bin/activate 
pip install django
pip install django-rest-framework
pip install httpie
python api/app/manage.py makemigrations
python api/app/manage.py makemigrations blog
python api/app/manage.py migrate
python api/app/manage.py runserver
```

Django WSGI Configuration:
--------------------------

TBD
