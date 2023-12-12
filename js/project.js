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

    if (date !=="" && time !=="" && name !=="" && date !=="" && phone !=="" && guest !=="" && /^[0-9]{10}$/.test(phone)){
    alert("Your request has been received. We will be in touch with you shortly.");
        window.location.href = "confirmation_page.html";
    }    
}


function validateEmail(){

    let femail = document.forms["footer-form"]["femail"].value;

    if(femail != ""){
        alert("Thank you for subscribing! We have added you to our mailing list.");
        window.location.reload();
    }
}