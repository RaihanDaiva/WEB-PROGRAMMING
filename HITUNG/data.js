console.log(hasil)

function tambah(){
let inputA = parseFloat(document.getElementById("inputA").value);
let inputB = parseFloat(document.getElementById("inputB").value);

    let hasil = inputA + inputB;
    document.getElementById("hasilT").textContent = hasil;    
}
function kurang(){
let inputA = parseFloat(document.getElementById("inputA").value);
let inputB = parseFloat(document.getElementById("inputB").value);

    let hasil = inputA - inputB;
    document.getElementById("hasilK").textContent = hasil;    
}
function kali(){
let inputA = parseFloat(document.getElementById("inputA").value);
let inputB = parseFloat(document.getElementById("inputB").value);

    let hasil = inputA * inputB;
    document.getElementById("hasil*").textContent = hasil;    
}
function bagi(){
let inputA = parseFloat(document.getElementById("inputA").value);
let inputB = parseFloat(document.getElementById("inputB").value);

    let hasil = inputA / inputB;
    document.getElementById("hasil/").textContent = hasil;    
}
