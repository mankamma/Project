function validateText(){

    let date = document.forms["resForm1"]["setTodaysDate"].value;
    let time = document.forms["resForm1"]["time"].value;
    let name = document.forms["resForm1"]["name"].value;
    let phone = document.forms["resForm1"]["phone"].value;

    if ( date === ""){
        document.getElementById("error").innerHTML = "Please select a date.";
    }

    else if (time === "time-select"){
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontSize = "larger";
        document.getElementById("error").innerHTML = "Please select a time";
    }

    else if (name === ""){
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontSize = "larger";
        document.getElementById("error").innerHTML = "Please fill in your full name.";
    }

    else if (phone === ""){
        document.getElementById("error").style.color = "red";
        document.getElementById("error").style.fontSize = "larger";
        document.getElementById("error").innerHTML = "Please fill in your phone number.";
    }
    alert("Your request has been received. We will contact you for confirmation.");
        window.location.href = "confirmation_page.html";
}
