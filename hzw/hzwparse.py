#!/usr/bin/python
# coding:utf8
import os
import time
import sys

# 读取文件
def record_matchinfos(file):
    url_list = []
    file_object = open(file)
    try:
        for line in file_object:
            startindex = line.find("http")
            endindex = line.find("html")
            if startindex != -1 and endindex != -1:
                resurl = line[startindex:endindex + 4]
                print(resurl)
                url_list.append(resurl)
    finally:
        file_object.close( )
    return url_list

def flush_records(res_file, url_list):
    fp = open(res_file, "w+")
    count = 0
    try:
        fp.write("var urls = [\n")
        for url in url_list:
            count = count + 1;
            if(count < len(url_list)):
                fp.write("'" + str(url)+ "',\n")
            else:
                fp.write("'" + str(url)+ "'\n")
        fp.write("];")
    finally:
        fp.close()

def parseFun():
   url_list = record_matchinfos("source.txt")
   flush_records("res.txt", url_list)

parseFun()