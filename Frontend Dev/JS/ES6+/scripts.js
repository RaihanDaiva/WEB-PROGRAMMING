const input = document.getElementById("input");
const submitBtn = document.getElementById("submit-btn");
const output = document.getElementById("output");
const container2 = document.getElementById("container-2");
const container3 = document.getElementById("container-3");
const container4 = document.getElementById("container-4");
import RedBackgroundColor, {nama, umur} from "./scripts2.js";
// import {nama, umur} from "./scripts2.js";

let tambah = () => {
    (parseInt(input.value) == 2) ? output.innerHTML += "Benar" : output.innerHTML += "salah"
}

const person1 = {
    firstName: "Raihan",
    lastName: "Daiva",
    age: 20,
    fullName: function(){
        return "Nama lengkapnya: " + this.firstName + " " + this.lastName;
    }
}

container2.innerHTML += `<h3>${person1.fullName()}</h3>`;


// Constructor Object
function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // Object Methode
    this.fullName = function(){
        return "Nama lengkapnya: " + this.firstName + " " + this.lastName + "<br>" + "Umurnya: " + this.age + "<br>" + "Asal Negara: " + this.country;
    };
}

// New Object
const Raihan = new Person("Raihan", "Daiva", 20);
Raihan.country = "Indonesia";
console.log(Raihan)

container2.innerHTML += `<h3>${Raihan.fullName()}</h3>`;

// Destructuring Object
let {firstName, lastName, age, country = "Indonesia"} = person1;
container3.innerHTML += `<h3>${"Name: " + firstName + " " + lastName + "<br> Age: " + age + "<br> Country: " + country}</h3>`;

let text = "Anjay"
let [a1, a2, a3, a4, a5] = text;
container3.innerHTML += `<h3>${a1 + a2 + a3 + a4 + a5}</h3>`;

// Rest operator
let fruits = ["Banana", "Orange", "Melon", "Watermelon"];
let [fruit1, fruit2, ...rest] = fruits;
container3.innerHTML += `<h3>${fruit1 + " and " + fruit2}</h3>`;
container3.innerHTML += `<h3>${"Sisanya adalah: " + rest}</h3>`;

// Spread operator
const a = [1, 2];
const b = [3, 4];
const ab = [...a, ...b];
console.log(ab)


const phone = new Map([
    ["Iphone", "mahal"],
    ["Android", "murah"]
])

let iphone = phone.get("Iphone");
let android = phone.get("Android");
container3.innerHTML += `<h3>${"Iphone = " + iphone + "<br> Android = " + android}</h3>`;

// Menggunakan fungsi RedBackgroundColor() dari file terpisah menggunakan import
document.body.addEventListener("click", () => RedBackgroundColor(document.body));

container4.innerHTML += "Nama: " + nama + "<br> Umur: " + umur;