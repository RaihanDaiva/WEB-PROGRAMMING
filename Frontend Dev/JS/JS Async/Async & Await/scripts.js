// Challenge 1
// async function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({id: 1, name: "Raihan"})
//         }, 1000)
//     })
    
// }

// async function getPosts(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Post 1", "Post 2"])
//         }, 1500)
//     })   
// }

// async function getComments(post) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Nice!", "Great!"])
//         }, 2000);
//     })
// }

// async function loadData() {
//     try{
//         console.log("Mengambil User...")
//         const user = await getUser()
//         console.log("User Ditemukan: ", user)
        
//         console.log("Mengambil Post...")
//         const post = await getPosts(user.id)
//         console.log("Post: ", post)
        
        
//         console.log("Mengambil komentar untuk " + post[0])
//         const comment = await getComments(post[0])
//         console.log("Komentar: ", comment)
        
//     } catch(e){
//         console.error("error", e)
//     }
        
// }

// loadData()


// Challenge 2
async function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        if (username == "admin" && password == "1234"){
            resolve({id: 1, username: "admin"})
        } else {
            reject("Login Gagal")
        }
    })
}

async function getProduct() {
    return new Promise((resolve) => {
       setTimeout(() => {
        resolve(["Laptop", "HP", "Tablet"])
    }, 1500); 
    }) 
}

async function buyProduct(product) {
    return new Promise((resolve) => {
       setTimeout(() => {
        resolve("Berhasil membeli " + product)
    }, 1500); 
    }) 
}

async function shop() {
    try{
        console.log("Login...")
        const user = await loginUser("admin", "1234")
        console.log("User Ditemukan: ", user)

        console.log("Mengambil Produk...")
        const product = await getProduct()
        console.log("Produk Tersedia: ", product)
        
        console.log("Membeli Laptop...")
        const beli = await buyProduct(product[0])
        console.log(beli)
    }
    catch(e){
        console.error(e)
    }
}

shop()