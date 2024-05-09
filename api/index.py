from flask import Flask, render_template,request,url_for,redirect,jsonify
import requests

app = Flask(__name__)

@app.route('/')
def hello_world():
    res=requests.get("https://satanist.pythonanywhere.com/niitowainagure")
    return render_template('index.html',hit_num=res.text)

@app.route("/hit")
def hit():
    requests.post("https://satanist.pythonanywhere.com/niitowainagure")
    return redirect("/")

if __name__ == "__main__":
    app.run()