const reveals = document.querySelectorAll("section");

function reveal(){

const windowHeight = window.innerHeight;

reveals.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < windowHeight - 100){
section.classList.add("reveal");
section.classList.add("active");
}

});

}

window.addEventListener("scroll",reveal);

reveal();

const buttons = document.querySelectorAll("a");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});