let nilai = [];
let operator = [];
let nilaiSementara = "";
let isOpPressed = false;
const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const buttonClear = document.getElementById("buttonC");
const buttonSend = document.getElementById("button=");
const buttonTambah = document.getElementById("button+");
const buttonKurang = document.getElementById("button-");
let output = document.getElementById("output");
let output2 = document.getElementById("output2");

button0.onclick = function() {
    isOpPressed = false;
    output.innerText += "0"
    nilaiSementara += "0"
    
}

button1.onclick = function() {
    isOpPressed = false;
    output.innerText += "1"
    nilaiSementara += "1"
    console.log(nilaiSementara)
}

button2.onclick = function() {
    isOpPressed = false;
    output.innerText += "2"
    nilaiSementara += "2"
    
}

button3.onclick = function() {
    isOpPressed = false;
    output.innerText += "3"
    nilaiSementara += "3"
    
}
button4.onclick = function() {
    isOpPressed = false;
    output.innerText += "4"
    nilaiSementara += "4"
    
}
button5.onclick = function() {
    isOpPressed = false;
    output.innerText += "5"
    nilaiSementara += "5"
    
}
button6.onclick = function() {
    isOpPressed = false;
    output.innerText += "6"
    nilaiSementara += "6"
    
}
button7.onclick = function() {
    isOpPressed = false;
    output.innerText += "7"
    nilaiSementara += "7"
    
}
button8.onclick = function() {
    isOpPressed = false;
    output.innerText += "8"
    nilaiSementara += "8"
    
}
button9.onclick = function() {
    isOpPressed = false;
    output.innerText += "9"
    nilaiSementara += "9"
    
}

buttonClear.onclick = function() {
    isOpPressed = false;
    nilai = [];
    operator = []
    nilaiSementara = "";
    output.innerText = "";
    output2.innerText = "";
}

buttonTambah.onclick = function() {
    if (nilaiSementara != "") {
        output.innerText += "+"
        operator.push("+")
        nilai.push(parseInt(nilaiSementara));
        nilaiSementara = "";
    }
    
    console.log(nilaiSementara)
    // console.log("Nilai: " + nilai);
    console.log(operator);
    
}

buttonKurang.onclick = function() {
    if (nilaiSementara != ""){
        output.innerText += "-"
        operator.push("-")
        isOpPressed = true;
        nilai.push(parseInt(nilaiSementara));
        nilaiSementara = "";
    }


    console.log(nilai);
    console.log(operator);

}

buttonSend.onclick = function() {
    console.log(nilaiSementara);

    if (nilaiSementara != ""){

        nilai.push(parseInt(nilaiSementara));
        
        let hasil = nilai[0];
        for(let i=0; i < nilai.length; i++){
            if(operator[i] == "+"){
                hasil += nilai[i+1];
            } else if(operator[i] == "-"){
                hasil -= nilai[i+1];
            }
        }
        
        
        console.log("hasil: "+hasil)
        console.log("nilai sementara: "+nilaiSementara)
        
        if (parseInt(nilaiSementara) != hasil){
            console.log(nilaiSementara)
            output2.innerHTML = output.innerHTML;
            output.innerText = hasil;
        }
        
        nilaiSementara = hasil.toString();
        console.log("hasil: "+hasil)
        console.log("nilai sementara: "+nilaiSementara)
        operator = [];
        nilai = [];
        
    } 


}