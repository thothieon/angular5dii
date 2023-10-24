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

    
########## Test Black ##################################################
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
    
# Test ==================================================
@app.route("/idiving/Test", methods=['GET'])
def iDivingTest():
    print(" ")
    print(" ")
    print("iDivingPersonnelInformation_init")
    print(" ")
    
    mysqlName = "iDiving"
    print("iDivingPersonnelInformation_mysqlName " + mysqlName)
    classMysqlStore = MysqlStore(mysqlName)
    readings = classMysqlStore.PersonnelInformationRead()
    print(" ")
    print('readings')
    print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    #result = json.dumps(data)
    
    #response = json.dumps(data)
    #response = make_response(jsonify(data))      
    #response.headers["Content-Type"] = "application/json;charset=UTF-8"
    #print(" ")
    #print('response')
    #print(response)
    
    return data
    
#  Test Single transaction 單筆==================================================
@app.route("/idiving/GetTestSingle", methods=['GET'])
def iDivingGetTestSingle():
    print(" ")
    print(" ")
    print("iDivingGetTestSingle_init")
    print(" ")
    
    #request_data = request.get_json()
    #print(request_data)
    #for idiving in idivings:
    #    if request_data['id'] == id:
    #        print("getparamscustomer_request id " + id)
    
    #if request_data['id'] == id:
    #    print("getparamscustomer_request id " + id)
    
    #id = ""
    id = request.args.get("id")
    id = id[3:]
    print("getparamscustomer_request id " + id)
    
    mysqlName = "iDiving"
    print("iDivingPersonnelInformation_mysqlName " + mysqlName)
    classMysqlStore = MysqlStore(mysqlName)
    readings = classMysqlStore.PersonnelInformationSingleRead(id)
    #print(" ")
    #print('readings')
    #print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    #result = json.dumps(data)
    
    #response = json.dumps(data)
    #response = make_response(jsonify(data))      
    #response.headers["Content-Type"] = "application/json;charset=UTF-8"
    #print(" ")
    #print('response')
    #print(response)
    
    return data
    #return 
    
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



# iDiving ==================================================
# Member ==================================================
@app.route("/idiving/Member", methods=['GET'])
def iDivingMember():
    print(" ")
    print(" ")
    print("iDivingPersonnelInformation_init")
    print(" ")
    
    mysqlName = "iDiving"
    print("iDivingPersonnelInformation_mysqlName " + mysqlName)
    classMysqlStore = MysqlStore(mysqlName)
    readings = classMysqlStore.PersonnelInformationRead()
    print(" ")
    print('readings')
    print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    #result = json.dumps(data)
    
    #response = json.dumps(data)
    #response = make_response(jsonify(data))      
    #response.headers["Content-Type"] = "application/json;charset=UTF-8"
    #print(" ")
    #print('response')
    #print(response)
    
    return data
    
# Member Single transaction 單筆==================================================
@app.route("/idiving/GetMemberSingle", methods=['GET'])
def iDivingGetMemberSingle():
    print(" ")
    print(" ")
    print("iDivingPersonnelInformation_init")
    print(" ")
    
    name = request.args.get('name')
    print("getparamscustomer_request Name " + name)
    
    mysqlName = "iDiving"
    print("iDivingPersonnelInformation_mysqlName " + mysqlName)
    classMysqlStore = MysqlStore(mysqlName)
    readings = classMysqlStore.PersonnelInformationRead()
    print(" ")
    print('readings')
    print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    #result = json.dumps(data)
    
    #response = json.dumps(data)
    #response = make_response(jsonify(data))      
    #response.headers["Content-Type"] = "application/json;charset=UTF-8"
    #print(" ")
    #print('response')
    #print(response)
    
    return data
    
# Member01 ==================================================
@app.route("/idiving/Member01", methods=['GET'])
def iDivingMember01():
    print(" ")
    print(" ")
    print("iDivingPersonnelInformation01_init")
    print(" ")
    
    name = request.args.get('name')
    print("getparamscustomer_request Name " + name)
    
    mysqlName = "iDiving"
    print("iDivingPersonnelInformation_mysqlName " + mysqlName)
    classMysqlStore = MysqlStore(mysqlName)
    readings = classMysqlStore.PersonnelInformationRead01(name)
    print(" ")
    print('readings')
    print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    #result = json.dumps(data)
    
    #response = json.dumps(data)
    #response = make_response(jsonify(data))      
    #response.headers["Content-Type"] = "application/json;charset=UTF-8"
    #print(" ")
    #print('response')
    #print(response)
    
    return data
    
# Course ==================================================
@app.route("/idiving/Course", methods=['GET'])
def iDivingCourse():
    print(" ")
    print(" ")
    print("iDivingCourse_init")
    print(" ")
    
    mysqlName = "iDiving"
    print("iDivingCourse_mysqlName " + mysqlName)
    classMysqlStore = MysqlStore(mysqlName)
    readings = classMysqlStore.CourseRead()
    print(" ")
    print('readings')
    print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    #result = json.dumps(data)
    
    #response = json.dumps(data)
    #response = make_response(jsonify(data))      
    #response.headers["Content-Type"] = "application/json;charset=UTF-8"
    #print(" ")
    #print('response')
    #print(response)
    
    return data


# Ksis ==================================================

# authNamePassword ==================================================
@app.route("/ksis/authNamePassword", methods=['GET'])
def ksisauthNamePassword():
    print(" ")
    print(" ")
    print("ksisauthNamePassword_init")
    print(" ")
    
    #print("request method:", request.method)
    #print("communication protocol :", request.scheme)   
    #print("name :", request.host)
    #print("path :", request.path)
    #print("url :", request.url)
    #print("headers :", request.headers)
    
    mysqlName = "ksis"
    print("ksisCustomer_mysqlName " + mysqlName)
    classMysqlKsisStore = MysqlKsisStore(mysqlName)
    readings = classMysqlKsisStore.AuthNamePasswordRead()
    print(" ")
    print('readings')
    print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    #result = json.dumps(data)
    
    #response = json.dumps(data)
    #response = make_response(jsonify(data))      
    #response.headers["Content-Type"] = "application/json;charset=UTF-8"
    #print(" ")
    #print('response')
    #print(response)
    
    return data

# caseitemlist ==================================================
@app.route("/ksis/caseitemlist", methods=['GET'])
def ksiscaseitemlist():
    print(" ")
    print(" ")
    print("ksiscaseitemlist_init")
    print(" ")
    
    mysqlName = "ksis"
    print("ksisCustomer_mysqlName " + mysqlName)
    classMysqlKsisStore = MysqlKsisStore(mysqlName)
    readings = classMysqlKsisStore.CaseitemlistRead()
    print(" ")
    print('readings')
    print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    return data

# customer ==================================================
@app.route("/ksis/customer", methods=['GET'])
def ksiscustomer():
    print(" ")
    print(" ")
    print("ksisCustomer_init")
    print(" ")
    
    #print("request method:", request.method)
    #print("communication protocol :", request.scheme)   
    #print("name :", request.host)
    #print("path :", request.path)
    #print("url :", request.url)
    #print("headers :", request.headers)
    
    mysqlName = "ksis"
    print("ksisCustomer_mysqlName " + mysqlName)
    classMysqlKsisStore = MysqlKsisStore(mysqlName)
    readings = classMysqlKsisStore.CustomerRead()
    print(" ")
    print('readings')
    print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    #result = json.dumps(data)
    
    #response = json.dumps(data)
    #response = make_response(jsonify(data))      
    #response.headers["Content-Type"] = "application/json;charset=UTF-8"
    #print(" ")
    #print('response')
    #print(response)
    
    return data

@app.route("/ksis/getparamscustomer", methods=['GET'])
def getparamscustomer():
    print(" ")
    print(" ")
    print("getparamscustomer_init")
    print(" ")
    
    #print("request method:", request.method)
    #print("communication protocol :", request.scheme)   
    #print("name :", request.host)
    #print("path :", request.path)
    #print("url :", request.url)
    #print("headers :", request.headers)
    
    name = request.args.get('name')
    print("getparamscustomer_request Name " + name)
    
    mysqlName = "ksis"
    print("getparamscustomer_mysqlName " + mysqlName)
    classMysqlKsisStore = MysqlKsisStore(mysqlName)
    readings = classMysqlKsisStore.CustomerReadName(name)
    print(" ")
    print('readings')
    print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    #result = json.dumps(data)
    
    #response = json.dumps(data)
    #response = make_response(jsonify(data))      
    #response.headers["Content-Type"] = "application/json;charset=UTF-8"
    #print(" ")
    #print('response')
    #print(response)
    
    return data

@app.route("/ksis/getcasecustomeriscasenumber", methods=['GET'])
def getcasecustomeriscasenumber():
    print(" ")
    print(" ")
    print("getcasecustomeriscasenumber_init")
    print(" ")
    
    #print("request method:", request.method)
    #print("communication protocol :", request.scheme)   
    #print("name :", request.host)
    #print("path :", request.path)
    #print("url :", request.url)
    #print("headers :", request.headers)
    
    #name = request.args.get('name')
    #print("getcasecustomeriscasenumber_request Name " + name)
    
    mysqlName = "ksis"
    print("getcasecustomeriscasenumber_mysqlName " + mysqlName)
    classMysqlKsisStore = MysqlKsisStore(mysqlName)
    readings = classMysqlKsisStore.caseCustomerIsCaseNumber()
    print(" ")
    print('readings')
    print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    #result = json.dumps(data)
    
    #response = json.dumps(data)
    #response = make_response(jsonify(data))      
    #response.headers["Content-Type"] = "application/json;charset=UTF-8"
    #print(" ")
    #print('response')
    #print(response)
    
    return data

@app.route("/ksis/customerp", methods=['POST'])
def ksiscustomerp():
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

# translator ==================================================
@app.route("/ksis/translator", methods=['GET'])
def ksistranslator():
    print(" ")
    print(" ")
    print("ksistranslator_init")
    print(" ")
    
    #print("request method:", request.method)
    #print("communication protocol :", request.scheme)   
    #print("name :", request.host)
    #print("path :", request.path)
    #print("url :", request.url)
    #print("headers :", request.headers)
    
    mysqlName = "ksis"
    print("ksisCustomer_mysqlName " + mysqlName)
    classMysqlKsisStore = MysqlKsisStore(mysqlName)
    readings = classMysqlKsisStore.TranslatorRead()
    print(" ")
    print('readings')
    print(readings)
    
    data = readings.to_json(orient = 'records') #{'split'，'records'，'index'，'table'}
    print(" ")
    print('data')
    print(data)
    
    #result = json.dumps(data)
    
    #response = json.dumps(data)
    #response = make_response(jsonify(data))      
    #response.headers["Content-Type"] = "application/json;charset=UTF-8"
    #print(" ")
    #print('response')
    #print(response)
    
    return data
    
	
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8336, debug=True)


