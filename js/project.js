function validateText(){

    let date=document.forms["resForm1"]["setTodaysDate"].value;
    let time=document.forms["resForm1"]["time"].value;
    let name=document.forms["resForm1"]["name"].value;
    let phone=document.forms["resForm1"]["phone"].value;
    let guest=document.forms["resForm1"]["guests"].value;

    let errorMessage="";

    if (date ===""){
        errorMessage += "Please select a date.<br>";
    }

    if (time === "time-select"){
        errorMessage += "Please select a time.<br>";

    }

    if (name === ""){
        errorMessage += "Please fill in your full name.<br>";

    }

    if (phone === ""){
        errorMessage += "Please fill in a phone number.<br>";

    }

    if (guest === "guests-select"){
        errorMessage += "Please select the numbers of guest.<br>";

    }
    
    // Check if there are any error messages
    if (errorMessage !== "") {
        document.getElementById("error").style.fontSize = "10px";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = errorMessage;
        return false;
    }

    // If all fields are filled, allow the form to submit
    alert("Your request has been received. We will contact you for the confirmation.");
    return false; 
}
