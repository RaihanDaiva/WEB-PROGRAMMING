
// Challenge 1
function hitung (a, b, callback) {
    let hasil = a + b
    callback(hasil)
}

hitung(4, 6, hasil => {
    console.log("Jumlah = " + hasil)
})

// // Challenge 2
function prosesData(arr, callback){
    for (let i = 0; i < arr.length; i++){
        arr[i] *= 2
    }
    callback(arr)
}

prosesData([1,2,3,4], hasil => {
    console.log("Array Baru: ", hasil)
})


// // Challenge 3
function downloadFile(file, callback){
    console.log("Mencari File...")
    setTimeout(() => {
        callback(file)
    }, 2000)
}

downloadFile("JAV.zip", file => {
    console.log(file)
})

// Challenge 4
step1 = (callback) => {
    setTimeout(() => {
        console.log("Langkah 1 selesai")
        callback()
    }, 1000);
}

step2 = (callback) => {
    setTimeout(() => {
        console.log("Langkah 2 selesai")
        callback()
    }, 1000);
}

step3 = (callback) => {
    setTimeout(() => {
        console.log("Langkah 3 selesai")
        callback()
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("proses selesai")
        })
    })
})

