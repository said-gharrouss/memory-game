
let sources = [
    "images/c++.png",
    "images/c.png",
    "images/go.png",
    "images/html.png",
    "images/java.png",
    "images/javascript.png",
    "images/python.png",
    "images/ruby.png",
    "images/sql.png",
    "images/swift.png",
    "images/c++.png",
    "images/c.png",
    "images/go.png",
    "images/html.png",
    "images/java.png",
    "images/javascript.png",
    "images/python.png",
    "images/ruby.png",
    "images/sql.png",
    "images/swift.png",
];
let parent = document.querySelector(".images");
for(let i = 0; i < sources.length; i++){
    var imgBox = document.createElement("div");
    imgBox.className = "img-box";
    var img = document.createElement("img");
    var span = document.createElement("span");
    imgBox.append(img,span);
    parent.append(imgBox);
}
let imagexBox = document.querySelectorAll(".images .img-box");
let behindImages = document.querySelectorAll(".images .img-box span");
let images = document.querySelectorAll(".images .img-box img");
console.log(images.length);
let 
for(let i = 0; i < 20; i++){
    let randomNumber = Math.trunc(Math.random() * sources.length);
    images[i].src = sources[randomNumber];
    sources.splice(randomNumber,1);  
}

for(let i = 0; i < imagexBox.length; i++ ){
    var arr = [];
    imagexBox[i].addEventListener("click",()=>{
        addAndRemoveClassActive(i);
        addAndRemoveClassImageActive(i);
        if(arr.length < 2){
            arr.push(images[i]);
        }
        if(arr.length === 2 && arr[0].src === arr[1].src){
            console.log("yes");
            for(let j = 0; j < arr.length; j++){
                arr[j].parentElement.classList.add("active");
                arr[j].nextElementSibling.classList.add("image-active");
            }
        }
        if(arr.length == 2){
            arr = [];
        }
    })

}

function addAndRemoveClassActive(img){
    imagexBox.forEach((img) =>{
        img.classList.remove("active");
    })
    imagexBox[img].classList.add("active");
    setTimeout(()=>{
        imagexBox[img].classList.remove("active");
    },500)
}

function addAndRemoveClassImageActive(span){
    behindImages.forEach((behind)=>{
        behind.classList.remove("image-active");
    })
    behindImages[span].classList.add("image-active");
    setTimeout(()=>{
        behindImages[span].classList.remove("image-active");
    },500)
}

let uName = document.querySelector(".name");
let startGame = document.querySelector(".start");
startGame.onclick = ()=>{
    let userName = prompt("whats your name");
    uName.textContent = `Hello : ${userName}`;
    if(userName !== ""){
        startGame.parentElement.style.display = "none";
    }
}