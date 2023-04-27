#!/usr/bin/python
# -*- coding: UTF-8 -*-
# coding=utf-8

import os
import sys
import datetime
import pprint

import pymysql
import pandas as pd
import urllib

import pandas as pd
from pandas.io.json import json_normalize

#from signal import signal, SIGPIPE, SIG_DFL
#signal(SIGPIPE,SIG_DFL) 

# home資料庫參數設定
db_homeSettings157 = {
    "host": "192.168.5.157",
    "port": 3306,
    "user": "admin",
    "password": "admin220",
    "db": "iDiving",
    "charset": "utf8"
}

db_homeTaibonniiSettings157 = {
    "host": "192.168.5.157",
    "port": 3306,
    "user": "admin",
    "password": "admin220",
    "db": "ksis",
    "charset": "utf8"
}


class MysqlKsisStore():
    def __init__(self, mysql_name):
        print("MysqlKsisStore__init__")
        print("MysqlKsisStore__init___mysql_name: " + mysql_name)
        if mysql_name == 'ksis':
            # 建立Connection物件
            #self.conn = pymysql.connect(**db_homeTaibonniiSettings157)
            self.sqlname = mysql_name
            print("MysqlKsisStore__init__self.sqlname: " + self.sqlname)

    def mysqlKsisauthNamePasswordTest(self):
        print("mysqlKsisauthNamePasswordTest")
        return "mysqlKsisauthNamePasswordTest"

    def mysqlksistest(self):
        print("mysqlksistest")
        return "sdsd"

    def adminRead(self):
        print("adminRead")
        # 建立Connection物件
        conn = pymysql.connect(**db_homeTaibonniiSettings157)
        
        strsearch = 'SELECT * FROM authNamePassword;'
        
        stock = pd.read_sql(strsearch, con = conn)
        
        #print(stock)
        
        return stock

    def CustomerRead(self):
        print("CustomerRead")
        # 建立Connection物件
        conn = pymysql.connect(**db_homeTaibonniiSettings157)
        
        strsearch = 'SELECT * FROM customer;'
        
        stock = pd.read_sql(strsearch, con = conn)
        
        #print(stock)
        
        return stock


