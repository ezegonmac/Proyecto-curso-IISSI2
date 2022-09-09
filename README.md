# Proyeto Curso IISSI2
Responsive and interactive web using HTML, CSS and JS.
Built with Silence, a python framework for building APIResful webs.
MariaDB database.

# Dependencies

* Python 3.10 or newer
* MariaDB
* HeidiSQL
* Silence Framework 1.2.4 (pip install Silence==1.2.4)

# Getting Started

1- Install the dependencies

2- Create the database with the following query:

```
CREATE DATABASE iissi2_project;
```
3- HeidiSQL must have a conexion with 'iissi2_project' as user and 'iissi2' as password. 
Must have permission to perform all actions (EXECUTE, SELECT, ...) on the database.

4- Populate the database and run the app with the following commands:
```
silence createdb
silence run
```

Now open http://localhost:8080 in your browser to see the result.
