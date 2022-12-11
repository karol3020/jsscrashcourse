// //fetch ("https://jsonplaceholder.typicode.com/user/1")//
// const emailRef = document.querySelector(".email");
const videoRef = document.querySelector(".video")
// // 1.Then
// // fetch ("https://jsonplaceholder.typicode.com/user/1")
// // .then(response => {
// // return response.json();   
// // })
// // .then (data =>{
// //     console.log(data)
// //     emailRef.innerHTML = data.email
// // })


// // 2.Async/Await
// async function main() {
//     console.log(1)
//     const response = await fetch ("https://jsonplaceholder.typicode.com/user/1");
//     console.log(2)
//     const data = await response.json()
//     console.log(3)
//     emailRef.innerHTML = data.email 
// }

// // main()

// const statusRef = document.querySelector('.status')

// function getSubscriptionStatus() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve("VIP")
//         }, 2000);
//     })
// }

// // //1.Then
// // getSubscriptionStatus().then(response => console.log(response))

// //2.Async/Await
// async function main(){
//     const status = (await getSubscriptionStatus()) 
//     statusRef.innerHTML = status
// }

// main();

function getVideo(getSubscriptionStatus) {
    return new Promise((resolve, reject) => {
        
        if (getSubscriptionStatus === "VIP"){
            resolve("show video")
        }
        
        else if (getSubscriptionStatus === "FREE"){
            resolve("show thriler")
        }

        else{
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    try{
        console.log(getVideo(status)) 
    }
    catch (e) {
       console.log(e)
       videoRef.innerHTML = e;
    }
}

main();