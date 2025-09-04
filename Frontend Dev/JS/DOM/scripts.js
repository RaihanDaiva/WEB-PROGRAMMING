const containerIklan = document.getElementById("iklan-container");
const imgIklan = document.getElementById("img-iklan")
const iklan = document.getElementById("iklan");
const xButton = document.getElementById("x-button");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const valoSkin = document.getElementById("valo-skin");
// querySelector hanya akan membaca yang pertama kali di temukan dari atas ke bawah
button1.onclick = function() {
    let x = document.querySelector("#container-1 > .paragraph");
    x.style.backgroundColor = "red";
}

// querySelectorAll membaca semua elemen yang di tentukan dan akan mengembalikan nilai berupa array
button2.onclick = function() {
    let x = document.querySelectorAll("#container-2 > .paragraph")
    console.log(x)
    for (let i = 0; i < x.length; i++){
        x[i].style.backgroundColor = "red";
    }
    x[0].style.backgroundColor = "blue";
}

// Menambahkan atribut pada tag p menggunakan setAttribute
button3.onclick = function() {
    const container3 = document.getElementById("container-3");
    let x = container3.querySelector("p");
    
    x.setAttribute("class", "redColor");
}

valoSkin.addEventListener("click", function(){
    imgIklan.style.display = "inline";
    xButton.style.display = "inline";
    iklan.style.height = "100vh";
})

xButton.onclick = function(){
    imgIklan.style.display = "none";
    xButton.style.display = "none";
    iklan.style.height = "0vh";
    
}
