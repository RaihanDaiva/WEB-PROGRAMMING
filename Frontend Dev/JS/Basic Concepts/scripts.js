

// Contoh arrow function untuk mengubah ke light mode/dark mode
let theme = () => {
    const bodyColor = document.body;  
    const themeBtn = document.getElementById("theme-btn");
    let bgColor = window.getComputedStyle(document.body).backgroundColor; 
    
    if (bgColor == "rgb(80, 80, 80)") {
        bodyColor.style.backgroundColor = "white";
        themeBtn.innerHTML = "Dark Mode";
        bodyColor.style.color = "black";
    } else {
        bodyColor.style.backgroundColor = "rgb(80, 80, 80)";
        themeBtn.innerHTML = "Light Mode";
        bodyColor.style.color = "white";
    }   
}

// Contoh function biasa untuk penjumlahan
function tambah(){
    const output = document.getElementById("output");
    const inputA = parseFloat(document.getElementById("input-a").value);
    const inputB = parseFloat(document.getElementById("input-b").value);
    let hasil = inputA + inputB;
    if (isNaN(hasil)) {
        output.innerHTML = `<h1>Isi Form tersebut!!</h1>`;
    } else {
        output.innerHTML = `<h1>${hasil}</h1>`;
        if (hasil == 7){
            output.innerHTML += `<h2>Jawabannya benar</h2>`
        } else {
            output.innerHTML += `<h2>Jawabannya salah</h2>`
        } 
    }
}

const output2 = document.getElementById("output-2");

// For loop
output2.innerHTML += "<h1>For loop</h1>";
for (let i = 0; i < 3; i++){
    output2.innerHTML += `<h2>${i+1}. Saya Raihan</h2>`;
}

output2.innerHTML += "<br><h1>While loop</h1>";
let i = 0;
while (i < 3){
    output2.innerHTML += `<h2>${i+1}. Saya Raihan</h2>`;
    i++;
}

const mobil = ["Toyota", "Honda", "Suzuki"];
for (let i = 0; mobil.length; i++){
    output2.innerHTML += `<h2>${i+1}. Saya Raihan</h2>`;
}



