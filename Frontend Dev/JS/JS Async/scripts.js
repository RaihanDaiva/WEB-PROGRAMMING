const container1 = document.getElementById("container-1");


// JS Callbacks
console.log(container1)
tambah = (a, b, callback) => {
    let sum = a + b;
    callback(sum);
}

display = (sum) => {
    container1.innerHTML += "<h3>Output = " + sum + "</h3>";
}

tambah(5, 5, display)

// 
cetak = () => {
    container1.innerHTML += "<h3>Selesai dalam 2 detik</h3>";

}
container1.innerHTML += "<h3>mulai</h3>";

setTimeout(cetak, 2000)
container1.innerHTML += "<h3>Berakhir</h3>";

