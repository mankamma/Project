// const person = {

//    firstName: "John",
//    height: 175,
//    age: function(){
//       return 2023 - this.yearOfBirth;
//    }
// }

function validateForm(){

    let fname = document.forms["frm1"]["fname"].value
     if (fname ==""){
        alert("The first name should not be empty.")
        return false;
     }
}

document.getElementById("test").onclick = function (){
   document.getElementsByName("p")[0].innerHTML = "Hello JaveScript!";
}

const elem = document.getElementsByClassName("intro");

document.getElementById("test1").innerHTML = elem[0].innerHTML;

const elem1 = document.getElementsByName("p");
elem1[1].style.color = "red";

let person = {

   firstName: "John",
   lastName: "Doe",
   DateOfBirth: 2000,
   feature: [135,110],
   age: function(){

         return 2023 - this.DateOfBirth;
   }
}

let car = new Object();
car.Model = "2023";
car.Name = "Fiat";
car.price = function(){

   return 2090 - this.Model;
}

function Person(firstName, lastName, age){
   this.Name = firstName + lastName;
   this.age = age;
   this.full = function(){
      return "Name is " + Name + age;
   };
};

let person1 = person("John", "Doe", 23);
let person2 = person("Lisa", "Kay", 34);
let person3 = person("Jackson", "Wong", 65);
document.write(person.Name);

