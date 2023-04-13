"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# Signup endpoint
@api.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    date_of_birth = data.get('date_of_birth')
    address = data.get('address')
    city = data.get('city')
    country = data.get('country')
    phone_number = data.get('phone_number')
    avatar = data.get('avatar')

    if not email or not password:
        raise APIException('Email and password are required', status_code=400)

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        raise APIException('User already exists', status_code=409)

    new_user = User(email=email, password=password, is_active=True, first_name=first_name, last_name=last_name, date_of_birth=date_of_birth, address=address, city=city, country=country, phone_number=phone_number, avatar=avatar)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201




@api.route('/login', methods=['POST'])
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        raise APIException('Could not verify', status_code=401)

    user = User.query.filter_by(email=auth.username).first()

    if not user:
        raise APIException('Could not verify', status_code=401, headers={'WWW-Authenticate': 'Basic realm="Login required!"'})

    if not user.is_active:
        raise APIException('User is inactive', status_code=401)

    if not bcrypt.check_password_hash(user.password, auth.password):
        raise APIException('Could not verify', status_code=401, headers={'WWW-Authenticate': 'Basic realm="Login required!"'})

    access_token = jwt.encode({'id': user.id, 'email': user.email}, app.config['JWT_SECRET_KEY'])
    return jsonify({'access_token': access_token.decode('UTF-8')}), 200


@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    serialized_users = [user.serialize() for user in users]
    return jsonify(serialized_users), 200


