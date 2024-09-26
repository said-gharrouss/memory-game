// Add Name Of User To Conatiner-Info 
let spanOfName = document.querySelector(".name span");
let buttonStart = document.querySelector(".start");

buttonStart.addEventListener("click",()=>{

    buttonStart.parentElement.style.display = "none";

    let userName = prompt("write your name here : ");

    if(userName == null || userName == ""){

        spanOfName.textContent = "Unknown";

    } else spanOfName.textContent = userName;
        
})



let parentBox = document.querySelector(".parent-box");
let boxImages = Array.from(parentBox.children);

let orderRange = Array.from(Array(boxImages.length).keys());
shuffle(orderRange);

function shuffleingElements(){
    for(let i = 0; i < boxImages.length; i++){
        boxImages[i].style.order = orderRange[i];
    }
}
shuffleingElements()

// function shuffle 
function shuffle(array){
    let lastElement = array.length - 1;
    let temp;
    let randomNumber;
    while(lastElement > 0){
        randomNumber = Math.floor(Math.random()* array.length);
        temp = array[lastElement];
        array[lastElement] = array[randomNumber];
        array[randomNumber] = temp;
        lastElement --; 
    }
    return array;
}

function flipImage(){
    boxImages.forEach((img)=>{
        img.onclick = ()=>{
            
            img.children[0].classList.add("is-fliped");
            
            let imageFliped = boxImages.filter((img)=>{
                return img.children[0].classList.contains("is-fliped");
            })
            
            if(imageFliped.length === 2){
                stopClicking();
                checkImages(imageFliped[0],imageFliped[1]);
            }
            
        }
    });
}
flipImage();

function stopClicking(){
    parentBox.classList.add("stop-clicking");

    setTimeout(()=>{
        parentBox.classList.remove("stop-clicking");
    },1000)
    
}

let tries = document.querySelector(".container-info .tries span");

function checkImages(preventImage,nextImage){

    if(preventImage.getAttribute("data-technologie") == nextImage.getAttribute("data-technologie")){
        preventImage.children[0].classList.remove("is-fliped");
        nextImage.children[0].classList.remove("is-fliped");
        
        preventImage.children[0].classList.add("has-match");
        nextImage.children[0].classList.add("has-match");

        document.getElementById("success").play();
    } else{

        setTimeout(()=>{
            preventImage.children[0].classList.remove("is-fliped");
            nextImage.children[0].classList.remove("is-fliped");
        },1000);

        tries.textContent = parseInt(tries.textContent) + 1;

        document.getElementById("fail").play();
    }
}