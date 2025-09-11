// let promise = new Promise((resolve, rejected) => {
//     let x = 0;

//     if (x == 0){
//         console.log("OK")
//     }else{
//         console.log("Error")
//     }
//     console.log(Promise.this.state)
// })

// promise.then(
//     function(value) {console.log(value)},
//     function(error) {console.log(error)}
// )



// function cekData(x){
//     return new Promise((resolve, reject) => {
//         console.log("Proses cek data...")

//         setTimeout(() => {
//             if (x > 5){
//                 resolve("Data valid: " + x)
//             }else{
//                 reject("Data tidak valid: "+ x)
//             }
//         }, 2000)
//     })
// }

// cekData(10)
//     .then(result => console.log("Succes: ", result))
//     .catch(err => console.error("Failed: ", err))



// function tambah(a, b) {

//     sum = a + b
//     return new Promise((resolve, reject) => {
//         if (sum == 10) {
//             resolve("Jawaban Benar!!")
//         } else {
//             reject("Jawaban Salah!!")
//         }
//     })
// }

// tambah(5, 5)
//     .then(result => console.log("Succes: ", result))
//     .catch(err => console.log("Failed: ", err))


// Challenge 1
// function proses(){
//     console.log("Menungguu...")
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Selesai")
//         }, 2000)
//     })
// }

// proses()
//     .then((result) => console.log(result))


//Challenge 2
// function hitung(a, b){
//     return new Promise((resolve, reject) => {
//         if (isNaN(a) || isNaN(b)) {
//             reject("Inputan bukan angka!!")
//         } else {
//             resolve(sum = a + b)
//         }
//     })
// }

// hitung(1,"a")
//     .then((result) => console.log("Hasil: ", result))
//     .catch((err) => console.log(err))

// hitung(1,2)
//     .then((result) => console.log("Hasil: ", result))
//     .catch((err) => console.log(err))


// Challenge 3
// function downloadFile(file){
//     console.log("Proses Download...")
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Download Selesai: " + file)
//         }, 2000)
//     })
// }

// downloadFile("JAV")
//     .then(console.log)


// Challenge 4
function step1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 1 selesai")
        }, 1000)
    })
}
function step2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 2 selesai")
        }, 1000)
    })
}
function step3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Step 3 selesai")
        }, 1000)
    })
}

step1() 
    .then((res1) => {
        console.log(res1)
        return step2()
    }) 
    .then((res2) => {
        console.log(res2)
        return step3()
    })
    .then((res3) => {
        console.log(res3)
        console.log("Proses selesai")
    })

Promise.al([step1(), step2(), step3(), ])
    .then((result) => {
        console.log("Proses selesai")
        console.log(result)
    })

