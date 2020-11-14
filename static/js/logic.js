function init() {

    var yearNumber = [];
    var birthDay = [];

    var d = new Date();
    var currentYear = d.getFullYear()

    var residenceState = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois',
                        'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana',
                        'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
                        'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

    var birthMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    for (var i = 0; i < 90; i++) {
        yearInc = currentYear-18-i;
        yearNumber.push(yearInc);
    }

    for (var i = 0; i < 31; i++) {
        monthInc = i+1;
        birthDay.push(monthInc);
    }

    yearNumber.forEach(year => {
        var sel = document.getElementById('birthYear');
        var opt = document.createElement('option');
        opt.appendChild(document.createTextNode(year));
        opt.value = year;
        sel.appendChild(opt);
    });

    birthMonth.forEach(month => {
        var sel = document.getElementById('birthMonth');
        var opt = document.createElement('option');
        opt.appendChild(document.createTextNode(month));
        opt.value = month;
        sel.appendChild(opt);
    });

    birthDay.forEach(day => {
        var sel = document.getElementById('birthDay');
        var opt = document.createElement('option');
        opt.appendChild(document.createTextNode(day));
        opt.value = day;
        sel.appendChild(opt);
    });

    residenceState.forEach(state => {
        var sel = document.getElementById('residenceState');
        var opt = document.createElement('option');
        opt.appendChild(document.createTextNode(state));
        opt.value = state;
        sel.appendChild(opt);
    });

}

// Select the button
var submitButton = d3.select("#submit-btn");
var clearButton = d3.select("#clear-btn")

// Select the form
var form = d3.select("#form");

submitButton.on("click", submitselect);
clearButton.on("click", clearselect);
form.on("submit", submitselect);

function submitselect() {
    d3.event.preventDefault();

    var inputElementFirstName = d3.select("#firstName");
    var inputValueFirstName = inputElementFirstName.property("value");

    var inputElementLastName = d3.select("#lastName");
    var inputValueLastName = inputElementLastName.property("value");

    var inputElementBirthYear = d3.select("#birthYear");
    var inputValueBirthYear = parseInt(inputElementBirthYear.property("value"));   

    var inputElementBirthMonth = d3.select("#birthMonth");
    var inputValueBirthMonth = inputElementBirthMonth.property("value");   

    var inputElementBirthDay = d3.select("#birthDay");
    var inputValueBirthDay = parseInt(inputElementBirthDay.property("value"));  

    var inputElementEmail = d3.select('#email');
    var inputValueEmail = inputElementEmail.property("value");

    var inputElementGender = d3.select('#gender');
    var inputValueGender = inputElementGender.property("value");

    var inputElementCar = d3.select('#car');
    var inputValueCar = inputElementCar.property("value");

    var inputElementHome = d3.select('#home');
    var inputValueHome = inputElementHome.property("value");

    var inputElementHousing = d3.select('#housing');
    var inputValueHousing = inputElementHousing.property("value");

    var inputElementIncomeType = d3.select('#typeOfIncome');
    var inputValueIncomeType = inputElementIncomeType.property("value");

    var inputElementIncome = d3.select('#income');
    var inputValueIncome = inputElementIncome.property("value");

    var inputElementEmploymentYears = d3.select('#employmentYears');
    var inputValueEmploymentYears = inputElementEmploymentYears.property("value");   

    var inputElementEducation = d3.select('#education');
    var inputValueEducation = inputElementEducation.property("value");   

    var inputElementFamilyStatus = d3.select('#familyStatus');
    var inputValueFamilyStatus = inputElementFamilyStatus.property("value");  

    var inputElementChildren = d3.select('#childrenCount');
    var inputValueChildren= inputElementChildren.property("value");  

    var inputElementHousehold = d3.select('#familyCount');
    var inputValueHousehold= inputElementHousehold.property("value");  

    if (inputValueBirthMonth == 'January') {
        birthMonthNumber = 1;
    }
    else if (inputValueBirthMonth == 'February') {
        birthMonthNumber = 2;
    }
    else if (inputValueBirthMonth == 'March') {
        birthMonthNumber = 3;
    }
    else if (inputValueBirthMonth == 'April') {
        birthMonthNumber = 4;
    }
    else if (inputValueBirthMonth == 'May') {
        birthMonthNumber = 5;
    }
    else if (inputValueBirthMonth == 'June') {
        birthMonthNumber = 6;
    }
    else if (inputValueBirthMonth == 'July') {
        birthMonthNumber = 7;
    }
    else if (inputValueBirthMonth == 'August') {
        birthMonthNumber = 8;
    }
    else if (inputValueBirthMonth == 'September') {
        birthMonthNumber = 9;
    }
    else if (inputValueBirthMonth == 'October') {
        birthMonthNumber = 10;
    }
    else if (inputValueBirthMonth == 'November') {
        birthMonthNumber = 11;
    }
    else {
        birthMonthNumber = 12;
    }

    var age = calculateAge(birthMonthNumber,inputValueBirthDay, inputValueBirthYear)

    if (age >= 18 && age < 28) {
        ageBucket = 27;
    }
    else if (age >= 28 && age < 31) {
        ageBucket = 30;
    }
    else if (age >= 31 & age < 36) {
        ageBucket = 35;
    }
    else if (age >= 36 && age < 41) {
        ageBucket = 40;
    }
    else if (age >= 41 && age < 46) {
        ageBucket = 45;
    }
    else if (age >= 46 && age < 51) {
        ageBucket = 50;
    }
    else if (age >= 51 && age < 56) {
        ageBucket = 55;
    }
    else if (age >= 56 && age < 63) {
        ageBucket = 62;
    }
    else {
        ageBucket = 70;
    }

    if (inputValueEmail.length == 0) {
        email = 0;
    }
    else {
        email = 1;
    }

    if (inputValueGender == 'Male') {
        gender = 0;
    }
    else if (inputValueGender == 'Female') {
        gender = 1;
    }
    else {
        gender = -1;
    }

    if (inputValueCar == 'Yes') {
        car = 1;
    }
    else {
        car = 0;
    }

    if (inputValueHome == 'Yes') {
        home = 1;
    }
    else {
        home = 0;
    }

    if (inputValueHousing == 'Rented apartment') {
        housing = 0;
    }
    else if (inputValueHousing == 'House / apartment') {
        housing = 1;
    }
    else if (inputValueHousing == 'Municipal apartment') {
        housing = 2;
    }
    else if (inputValueHousing == 'With parents') {
        housing = 3;
    }
    else if (inputValueHousing == 'Co-op apartment') {
        housing = 4;
    }
    else {
        housing = 5;
    }

    if (inputValueIncomeType == 'Working') {
        incomeType = 0;
    }
    else if (inputValueIncomeType == 'Commercial associate') {
        incomeType = 1;
    }
    else if (inputValueIncomeType == 'Retired') {
        incomeType = 2;
    }
    else if (inputValueIncomeType == 'State Employee') {
        incomeType = 3;
    }
    else {
        incomeType = 4;
    }

    if (inputValueIncome == '$0-$50K') {
        income = 50000;
    }
    else if (inputValueIncome == "$51K-$100K") {
        income = 100000;
    }  
    else if (inputValueIncome == "$101K-$150K") {
        income = 150000;
    }  
    else if (inputValueIncome == "$151K-$200K") {
        income = 200000;
    }  
    else if (inputValueIncome == "$201K-$250K") {
        income = 250000;
    }  
    else if (inputValueIncome == "$251K-$300K") {
        income = 300000;
    }  
    else if (inputValueIncome == "$301K-$400K") {
        income = 400000;
    }  
    else {
        income = 1600000;
    } 

    if (inputValueEmploymentYears == '0-5') {
        employment = 5;
    }
    else if (inputValueEmploymentYears == '6-10') {
        employment = 10;
    }
    else if (inputValueEmploymentYears == '11-15') {
        employment = 15;
    }
    else if (inputValueEmploymentYears == '16-20') {
        employment = 20;
    }
    else if (inputValueEmploymentYears == '21 or more') {
        employment = 21;
    }
    else if (inputValueEmploymentYears == 'Retired') {
        employment = -1;
    }

    if (inputValueEducation == 'Higher education') {
        education = 0;
    }
    else if (inputValueEducation == 'Secondary / secondary special') {
        education = 1;
    }
    else if (inputValueEducation == 'Incomplete higher') {
        education = 2;
    }
    else if (inputValueEducation == 'Lower secondary') {
        education = 3;
    }
    else {
        education = 4;
    }

    if (inputValueFamilyStatus == 'Civil Marriage') {
        familyStatus = 0;
    }
    else if (inputValueFamilyStatus == 'Married') {
        familyStatus = 1;
    }
    else if (inputValueFamilyStatus == 'Single / Not Married') {
        familyStatus = 2;
    }
    else if (inputValueFamilyStatus == 'Separated') {
        familyStatus = 3;
    }
    else {
        familyStatus = 4;
    }

    if (inputValueChildren == '0'){
        children = 0;
    }
    else if (inputValueChildren == '1') {
        children = 1;
    }
    else {
        children = 2;
    }

    if (inputValueHousehold == '1') {
        household = 1;
    }

    else if (inputValueHousehold == '2') {
        household = 2;
    }

    else {
        household = 3;
    }

    var data = [];

    d3.request("/predict/" + gender + "/" + car + "/" + home + "/" + education + "/" + familyStatus + "/" + housing + "/" + email + "/" + incomeType + "/" + children + "/" + income + "/" + household + "/" + employment + "/" + ageBucket)
        .get(response => {

        data = JSON.parse(response.response);

        var answer = data[0]

        applicantName = inputValueFirstName + " " + inputValueLastName;

        if (answer == 'Good') {
            responseToApplicant = "Congratulations " + applicantName + "! You are approved for the MMTS Credit Card."
        }
        else {
            responseToApplicant = applicantName + ", you are not approved at this time."
        }

        var list1 = d3.select("#applicantName");
        list1.text(`${responseToApplicant}`);
    })
}

function clearselect() {
    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value = ""
    document.getElementById("middleInitial").value = ""
    document.getElementById("streetAddress").value = ""
    document.getElementById("city").value = ""
    document.getElementById("residenceState").value = "Select"
    document.getElementById("zip").value = ""
    document.getElementById("birthYear").value = "Year"
    document.getElementById("birthMonth").value = "Month"
    document.getElementById("birthDay").value = "Day"
    document.getElementById("gender").value = "Select"
    document.getElementById("car").value = "Select"
    document.getElementById("phone").value = ""
    document.getElementById("email").value = ""
    document.getElementById("home").value = "Select"
    document.getElementById("housing").value = "Select"
    document.getElementById("typeOfIncome").value = "Select"
    document.getElementById("income").value = "Select"
    document.getElementById("employmentYears").value = "Select"
    document.getElementById("education").value = "Select"
    document.getElementById("familyStatus").value = "Select"
    document.getElementById("childrenCount").value = "Select"
    document.getElementById("familyCount").value = "Select"
}

function calculateAge(birthMonth,birthDay,birthYear)
{
    todayDate = new Date();
    todayYear = todayDate.getFullYear();
    todayMonth = todayDate.getMonth();
    todayDay = todayDate.getDate();
    age = todayYear - birthYear;

    if ( todayMonth < (birthMonth - 1))
    {
        age--;
    }
    if (((birthMonth - 1) == todayMonth) && (todayDay < birthDay))
    {
        age--;
    }

    return age;
}

init();