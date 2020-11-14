import joblib
from flask import Flask, render_template, redirect, Response, jsonify
# from bson import json_util
# import json
import sys, getopt, pprint
from flask_cors import CORS, cross_origin
import pandas as pd

knn_from_joblib = joblib.load('credit.pkl')

# Create an instance of Flask
app = Flask(__name__)

CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_ORIGINS'] = '*'

@app.route("/", methods=['GET',"post"])
def mainroute():
    return app.send_static_file("index.html")

@app.route("/predict/<int:gender_arg>/<int:car_arg>/<int:home_arg>/<int:education_arg>/<int:familystatus_arg>/<int:housingtype_arg>/<int:email_arg>/<int:incometype_arg>/<int:children_arg>/<int:income_arg>/<int:family_arg>/<int:employment_arg>/<int:age_arg>", methods=["GET"])
def predict(gender_arg,car_arg,home_arg,education_arg,familystatus_arg,housingtype_arg,email_arg,incometype_arg,children_arg,income_arg,family_arg,employment_arg,age_arg):

    data_df = pd.DataFrame(
        {
        'Gender':gender_arg,
        'OwnsCar':car_arg,
        'OwnsRealty':home_arg,
        'EducationType':education_arg,
        'FamilyStatus':familystatus_arg,
        'HousingType':housingtype_arg,
        'Email':email_arg,
        'IncomeType':incometype_arg,
        'ChildreCountCategory':children_arg,
        'IncomeCategory':income_arg,
        'FamilyMemberCountCategory':family_arg,
        'EmployeeYearsCategory':employment_arg,
        'Age Category':age_arg
        }, index=[0]
        )

    applicant_status = knn_from_joblib.predict(data_df)

    applicant_status_json = applicant_status.tolist()

    return jsonify(applicant_status_json)

if __name__ == "__main__":
    app.run(debug=True)