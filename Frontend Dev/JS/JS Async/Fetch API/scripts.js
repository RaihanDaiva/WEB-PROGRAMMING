// async function getData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         let data = await response.json() 
//         console.table(data)
//     } catch (error) {
//         console.error("Error:", error)
//     }
// }

// getData()


// Challenge 1
async function getUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json()
        console.table(data)
    } catch(e) {
        console.error(e)
    }
}

// getUser()

// Challenge 2
async function getPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        let filtered = data.filter(post => post.userId == 1)
        console.log(filtered)
    } catch(e) {
        console.error(e)
    }
}

// getPost()

async function setPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: 99,
                title: "test ah",
                body: "teswsssssttttt"
            })
        })

        let data = await response.json()
        console.table(data) 
    } catch(e) {

    }
}

// setPost()

async function getUser1() {
    let responseUser = await fetch("https://jsonplaceholder.typicode.com/users/1")
    let dataUser = await responseUser.json()
    let responsePost = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    let dataPost = await responsePost.json()

    console.log("User: ", dataUser.name)
    console.log("Post: ")
    dataPost.forEach(post => {
        console.log("-", post.title)
    });
    
}

getUser1()