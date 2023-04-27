#!/usr/bin/python
# -*- coding: UTF-8 -*-

import os
import sys

import MySQLdb
import pymysql
import pandas as pd
from pandas.io.json import json_normalize
import json
import urllib

from mysqlstore import MysqlStore
from mysqlksisstore import MysqlKsisStore

from flask_cors import CORS
from flask import Flask, Response, jsonify, make_response, request

app = Flask(__name__)
CORS(app)

mysqlName = "ksis"

@app.route("/")
def routeMain():
    print("routeMain" + mysqlName)
    appMysqlStore = MysqlStore(mysqlName)
    wed = appMysqlStore.mysqlKsisauthNamePasswordTest()
    return "<h1>Hello , This a Restful Api Server by Flask...</h1>"
    
@app.route("/hello")
def hello01():
    print("hello")
    mysqlName = "taibonii"
    print("hello_mysqlnamesetting" + mysqlName)
    appMysqlStore = MysqlStore(mysqlName)
    wed = appMysqlStore.mysqltaiboniitest()
    return "<h1>Hello01 , This a Restful Api Server by Flask...</h1>>"
    
########## Ksis black ##################################################
@app.route("/ksis/hello")
def ksishello():
    print("ksishello")
    mysqlName = "ksis"
    print("ksishello_mysqlName " + mysqlName)
    classMysqlKsisStore = MysqlKsisStore(mysqlName)
    wed = classMysqlKsisStore.mysqlksistest()
    return "<h1>Ksis Hello , This a Restful API Server by Flask...</h1>"
    
@app.route("/ksis/admin", methods=['GET'])
def ksisadmin():
    print("ksisadmin")
    mysqlName = "ksis"
    print("ksisadmin_mysqlName " + mysqlName)
    classMysqlKsisStore = MysqlKsisStore(mysqlName)
    readings = classMysqlKsisStore.adminRead()
    print(readings)
    
    data = readings.to_json(force_ascii=False, orient = 'records')
    
    #return "<h1>Ksis Hello , This a Restful API Server by Flask...</h1>"
    return data

@app.route("/ksis/test", methods=['GET'])
def login():
    product_List=['apple','orange']
    response = make_response(jsonify({"product_List": product_List, "severity": "danger"} ),         200, )   
    response.headers["Content-Type"] = "application/json"
    return response

@app.route("/ksis/customer", methods=['GET'])
def ksiscustomer():
    print("ksisCustomer_init")
    print("request method:", request.method)
    print("communication protocol :", request.scheme)   
    print("name :", request.host)
    print("path :", request.path)
    print("url :", request.url)
    print("headers :", request.headers)
    mysqlName = "ksis"
    print("ksisCustomer_mysqlName " + mysqlName)
    classMysqlKsisStore = MysqlKsisStore(mysqlName)
    readings = classMysqlKsisStore.CustomerRead()
    print('readings')
    print(readings)
    
    data = readings.to_json(force_ascii=False, orient = 'values') #{'split'，'records'，'index'，'table'}
    
    response = make_response(jsonify(data))    
    response.headers["Content-Type"] = "application/json;charset=UTF-8"
    print(response)
    
    return response

@app.route("/ksis/customerpost", methods=['POST'])
def ksiscustomerpost():
    print("ksiscustomerpost")
    print("request method:", request.method)
    print("communication protocol :", request.scheme)   
    print("name :", request.host)
    print("path :",request.path)
    print("url :",request.url)
    print("headers :",request.headers)
    mysqlName = "ksis"
    print("ksiscustomerpost_mysqlName " + mysqlName)
    classMysqlKsisStore = MysqlKsisStore(mysqlName)
    readings = classMysqlKsisStore.CustomerRead()
    print(readings)
    
    data = readings.to_json(force_ascii=False, orient = 'records')
    
    #return "<h1>Ksis Hello , This a Restful API Server by Flask...</h1>"
    return data

    
	
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8336, debug=True)


