from flask import Flask, request, render_template, jsonify, json
from flask_cors import CORS
import pymongo
from bson import ObjectId
from bson.objectid import ObjectId
from pymongo import MongoClient
from bson.json_util import dumps

import requests
app = Flask(__name__)
CORS(app)
client = MongoClient("mongodb://127.0.0.1:27018") #host uri  
db = client.mymongodb1    #Select the database  
todos = db.todo

@app.route('/', methods=['GET', 'POST'])
def index():
    return "Hello World"

@app.route("/about")
def about():
    return "About page"

@app.route("/eventslist", methods= ['GET','POST'])  
def lists ():  
    #Display the all Events 
    print("eventslist is called")
    events_l = todos.find() 
    print("test",type(events_l))
    return dumps(events_l)
 

@app.route("/createevent", methods=['GET','POST'])
def create_task():
    print ("event created successfully")
    print("title",request.json['title'])

    todos.insert({ "id":request.json['id'],"title":request.json['title'],
                      "date":request.json['date'], "description":request.json['description']})  
    return  "event created successfully"

if __name__ == '__main__':
    app.run (debug = True)