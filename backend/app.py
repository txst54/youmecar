import json

from flask import Flask, abort
from flask import request
from flask import Response

from flask_cors import CORS, cross_origin

import firebase_admin
from firebase_admin import credentials, auth, db

cred = credentials.Certificate("secrets/hacktx23sdk.json")

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

default_app = firebase_admin.initialize_app(cred, {'databaseURL': 'https://hacktx23-1a7df-default-rtdb.firebaseio.com'})
print(default_app.name)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route('/create-user', methods=['POST'])
def handle_user_creation():
    data = json.loads(request.data.decode('UTF-8'))
    id_token = request.headers["Idtoken"]
    decoded_token = auth.verify_id_token(id_token)
    uid = decoded_token['uid']
    print(data)
    ref = db.reference(data['role'])
    ref.child(uid).set(data)
    auth.set_custom_user_claims(uid, {'role': data['role']})
    user = auth.get_user(uid)
    print(user.custom_claims.get('role'))
    return Response("Success")

@app.route('/join-org', methods=['POST'])
def join_org():
    data = json.loads(request.data.decode('UTF-8'))
    id_token = request.headers["Idtoken"]
    decoded_token = auth.verify_id_token(id_token)
    uid = decoded_token['uid']
    print(data)
    ref = db.reference(data['role'])
    orgRef = db.reference('Org')
    print(orgRef.get(data['orgUID']))
    if orgRef.get(data['orgUID'])[0] is None:
        abort(400, 'Organization code does not exist')
    ref.child(uid).child('orgs').child(data['orgUID']).set(orgRef.get(data['orgUID'])[0][data['orgUID']]['organizationName'])
    return Response("Success")

if __name__ == '__main__':
    app.run()
