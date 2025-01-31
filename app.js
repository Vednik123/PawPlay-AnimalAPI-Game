// Dog image and fact
let b1 = document.querySelector(".dog");

b1.addEventListener("click",async ()=>{
    let link = await getPics();
    let img = document.querySelector(".imageout img");
    img.src = link;
    let p = document.querySelector(".fact p");
    let fact = await getFacts();
    p.innerText = fact;
})

let urld1 = "https://dog.ceo/api/breeds/image/random";
let urld2 = "https://dog-api.kinduff.com/api/facts";
async function getPics() {
    try{
        let res = await axios.get(urld1);
        console.log(res);
        return res.data.message;
    }
    catch{
       return "No pics found";
    }
}

async function getFacts() {
    try {
        let res = await axios.get(urld2);
        console.log(res);
        return res.data.facts;
    } catch {
        return "No pics found";
    }
}




// Cat image and fact
let b2 = document.querySelector(".cat");

b2.addEventListener("click",async ()=>{
    let link = await getPics2();
    let img = document.querySelector(".imageout img");
    img.src = link;
    let fact = await getFacts2();
    let p2 = document.querySelector(".fact p");
    p2.innerText = fact;
})

let urlc1 = "https://api.thecatapi.com/v1/images/search";
let urlc2 = "https://catfact.ninja/fact";
async function getPics2() {
    try{
        let res = await axios.get(urlc1);
        console.log(res);
        console.log(res.data[0].url);
        return res.data[0].url;
    }
    catch{
       return "No pics found";
    }
}

async function getFacts2() {
    try {
        let res = await axios.get(urlc2);
        console.log(res);
        return res.data.fact;
    } catch {
        return "No pics found";
    }
}




// Fox image and fact
// let p = document.querySelector(".fact p");
let b3 = document.querySelector(".fox");

b3.addEventListener("click",async ()=>{
    let link = await getPics3();
    let img = document.querySelector(".imageout img");
    img.src = link;
})

let urlf1 = "https://randomfox.ca/floof/";
async function getPics3() {
    try{
        let res = await axios.get(urlf1);
        console.log(res);
        return res.data.image;
    }
    catch{
       return "No pics found";
    }
}




// Extinct animals images
let b4 = document.querySelector(".extinct");

b4.addEventListener("click",async ()=>{
    let link = await getPics4();
    let img = document.querySelector(".imageout img");
    img.src = link;
})

let urle1 = "https://extinct-api.herokuapp.com/api/v1/animal/";
async function getPics4() {
    try{
        let res = await axios.get(urle1);
        console.log(res.data.data[0].imageSrc);
        return res.data.data[0].imageSrc;
    }
    catch{
       return "No pics found";
    }
}




// Duck images
let b5 = document.querySelector(".duck");

b5.addEventListener("click",async ()=>{
    let link = await getPics5();
    let img = document.querySelector(".imageout img");
    img.src = link;
})

let urldk1 = "https://random-d.uk/api/random?format=json";
async function getPics5() {
    try{
        let res = await axios.get(urldk1);
        console.log(res);
        return res;
    }
    catch{
       return "No pics found";
    }
}




// Bear image

// let b6 = document.querySelector(".bear");

// b6.addEventListener("click",async ()=>{
//     let link = await getPics6();
//     // let rand = Math.floor(Math.random() * 400)+300;
//     let img = document.querySelector(".imageout img");
//     console.log(rand);
//     img.src = "https://placebear.com/400/300.jpg";
//     console.log(img.src);
// })

// let urlb1 = "https://placebear.com/400/300.jpg";

// async function getPics6() {
//     try{
//         let res = await axios.get(urlb1);
//         console.log(res);
//         return res;
//     }
//     catch{
//        return "No pics found";
//     }
// }