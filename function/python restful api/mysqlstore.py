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
    "db": "taibonii",
    "charset": "utf8"
}


class MysqlStore():
    def __init__(self, mysql_name):
        print("MysqlStore__init__")
        print("MysqlStore__init___mysql_name:", mysql_name)
        #if mysql_name == 'taibonii':
            # 建立Connection物件
            #self.conn = pymysql.connect(**db_homeTaibonniiSettings157)
            #print("MysqlStore__init__self.conn", self.conn)
            

    # Test ==================================================
    def mysqlKsisauthNamePasswordTest(self):
        print("mysqlKsisauthNamePasswordTest")
        return "mysqlKsisauthNamePasswordTest"

    def mysqltaiboniitest(self):
        print("mysqltestinit")
        return "sdsd"

    # iDiving ==================================================
    # PersonnelInformation ==================================================
    def PersonnelInformationRead(self):
        print("PersonnelInformationRead")
        # 建立Connection物件
        conn = pymysql.connect(**db_homeSettings157)
        
        strsearch = 'SELECT * FROM PersonnelInformation Limit 100;'
        
        stock = pd.read_sql(strsearch, con = conn)
        
        #print(stock)
        
        return stock
        
    # PersonnelInformation Single transaction 單筆==================================================
    def PersonnelInformationSingleRead(self, mid):
        print("PersonnelInformationRead")
        # 建立Connection物件
        conn = pymysql.connect(**db_homeSettings157)
        
        strsearch = 'SELECT * FROM PersonnelInformation WHERE (mid LIKE "%{my_pData01}%" );'.format(my_pData01=urllib.unquote(mid).encode('utf-8').strip())
        print(strsearch)
        stock = pd.read_sql(strsearch, con = conn)
        
        #print(stock)
        
        return stock
    
    # PersonnelInformation 01 ==================================================
    def PersonnelInformationRead01(self, name):
        print("PersonnelInformationRead01")
        # 建立Connection物件
        conn = pymysql.connect(**db_homeSettings157)
        
        strsearch = 'SELECT * FROM PersonnelInformation WHERE ( chineseName LIKE "%{my_pData01}%") OR ( remark LIKE "%{my_pData01}%");'.format(my_pData01=urllib.unquote(name).encode('utf-8').strip())
        
        print(strsearch)
        
        stock = pd.read_sql(strsearch, con = conn)
        
        #print(stock)
        
        return stock
        
    # Course ==================================================
    def CourseRead(self):
        print("CourseRead")
        # 建立Connection物件
        conn = pymysql.connect(**db_homeSettings157)
        
        strsearch = 'SELECT * FROM Course;'
        
        stock = pd.read_sql(strsearch, con = conn)
        
        #print(stock)
        
        return stock
        
    # Course ==================================================
    def CourseRead01(self):
        print("CourseRead01")
        # 建立Connection物件
        conn = pymysql.connect(**db_homeSettings157)
        
        strsearch = 'SELECT * FROM Course;'
        
        stock = pd.read_sql(strsearch, con = conn)
        
        #print(stock)
        
        return stock






    # old ==================================================
    def IndicatorContentRead(self):
        print("IndicatorContentRead")
        # 建立Connection物件
        conn = pymysql.connect(**db_homeTaibonniiSettings157)
        # 建立Cursor物件
        #with conn.cursor() as cursor:
            # 新增資料指令
        #    command = "SELECT * FROM IndicatorContent;"
            # 執行指令
        #    cursor.execute(command)
            # 取得所有資料
        #    result = cursor.fetchall()
            # 取得第一筆資料
            #result = cursor.fetchone()
        #    print(" ")
        #    print("Read", cursor.rowcount, "row(s) of data.")
        #    print(" ")
        #    print(result)
        #    print(" ")
        
        stock = pd.read_sql('SELECT * FROM IndicatorContent;', con = conn)
        
        #print(stock)
        
        #cursor.close()
        #conn.close()
        
        return stock


