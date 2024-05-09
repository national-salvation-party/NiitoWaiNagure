from flask import Flask, render_template,redirect
import requests

app = Flask(__name__)

@app.route('/',methods=["GET","POST"])
def hello_world():
    res=requests.get("https://satanist.pythonanywhere.com/niitowainagure")
    return render_template('index.html',hit_num=res.text)

@app.route("/hit",methods=["GET","POST"])
def hit():
    requests.post("https://satanist.pythonanywhere.com/niitowainagure")
    return redirect("/")
#if __name__ == "__main__":
#    app.run()