let usia = document.getElementById('usia');
console.log(usia);
const NamaSaya = "Raihan Daiva";
const pass = 1234;
let inputUsia = 10;
// let inputUsia = prompt("Masukkan usia anda: ");
let golongan;

function latihan(){
    if(inputUsia >=0 && inputUsia < 17){
      golongan="Anak-anak";
    }else if(inputUsia > 16 && inputUsia < 25){
			golongan="Remaja";
    }else if(inputUsia > 24 && inputUsia < 35){
			golongan="Dewasa"
		}else{
      golongan="Tua"
    }
		return usia.innerHTML = golongan;
}
latihan();