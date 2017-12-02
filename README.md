# cherrypy-heroku-pptx

An example of converting wikipedia article to pptx

## About

Part of the University Leipzig project for Software Praktikum.

## Setting up locally

Make sure you have [Python 3](https://www.python.org/) and [pip3](https://pip.pypa.io/en/stable/installing/) installed.

```bash
git clone https://github.com/hunterxxx/cherrpy.git
cd cherrypy-heroku-example
pip3 install -r requirements.txt
python3 app.py
```

The webserver should now be running on http://localhost:5000. Editing app.py will cause cherrypy to reload itself.

## Deploying to Heroku (Deployed)

Install the [Heroku toolbelt](https://toolbelt.heroku.com/), and make sure you commit your changes to git.
<br/>Heroku link : https://fierce-lowlands-48929.herokuapp.com/


If all goes well, you can open your app in the browser:

```bash
heroku open
```
