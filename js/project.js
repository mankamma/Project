function validateText(){

    // Clear the existing error message
    document.getElementById("error").innerHTML = "";    
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

    if (phone === "" || !/^[0-9]{10}$/.test(phone)){
        errorMessage += "Please fill in a phone number with correct format.<br>";

    }

    if (guest === "guests-select"){
        errorMessage += "Please select the numbers of guest.<br>";

    }
    
    // Check if there are any error messages
    if (errorMessage !== "") {
        document.getElementById("error").style.fontSize = "13px";
        document.getElementById("error").style.fontWeight = "bold";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = errorMessage;
        return false; 
    }

    if (date !=="" && time !=="" && name !=="" && date !=="" && phone !=="" && guest !=="" && /^[0-9]{10}$/.test(phone)){
    alert("Your request has been received. We will be in touch with you shortly.");
    }    
}


function validateEmail(){

    let femail = document.forms["footer-form"]["femail"].value;

    if(femail == "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(femail)){
        document.getElementById("email-error").style.fontWeight = "bold";
        document.getElementById("email-error").style.color = "red";
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
    }
    else{
        alert("Thank you for subscribing! We have added you to our mailing list.");
        window.location.reload();
    }
}