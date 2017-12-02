#wiki text scrap
from bs4 import BeautifulSoup
#html request
import requests
from cherrypy.lib import static
import cherrypy
import os
from jinja2 import Environment, FileSystemLoader

localDir = os.path.dirname(__file__)
absDir = os.path.join(os.getcwd(), localDir)

env = Environment(loader=FileSystemLoader('html'))

class Landing_Page(object):
    @cherrypy.expose
    def index(self):
        tmpl = env.get_template('indexOriginal.html')
        return tmpl.render()

config = {
    'global': {
        'server.socket_host': '0.0.0.0',
        'server.socket_port': int(os.environ.get('PORT', 5000)),
    },
    '/assets': {
        'tools.staticdir.root': os.path.dirname(os.path.abspath(__file__)),
        'tools.staticdir.on': True,
        'tools.staticdir.dir': 'assets',
    }
}

cherrypy.quickstart(Landing_Page(), '/', config=config)
