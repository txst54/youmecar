from flask import Flask
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("secrets/hacktx23sdk.json")

app = Flask(__name__)

default_app = firebase_admin.initialize_app(cred)
print(default_app.name)

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
