from flask import Flask

def create_app():
    app = Flask(__name__)

    from .initialize_db import initialize_db
    initialize_db()
    
    return app
