import numpy as np
from flask import Flask, render_template,request,jsonify,url_for,json
import pickle


model = pickle.load(open('model.pkl','rb'))
sc = pickle.load(open('sc.pkl','rb'))
app = Flask(__name__, static_folder="static")
@app.route('/',methods=['POST','GET'])


if __name__=='__main__':
    app.run(port=3000,host='0.0.0.0')

