const right = document.querySelector(".right")
const home = right.querySelector(".home")
const feature = right.querySelector(".feature")
const contact = right.querySelector(".contact")
console.log(home)
home.addEventListener("click",(e)=>{
    feature.style.color ="rgb(148,148,148)"
    contact.style.color ="rgb(148,148,148)"
    // feature.style.borderBottom="2px solid black"
    // contact.style.borderBottom="2px solid black"
    e.path[0].style.color = "white";
    e.path[0].style.borderBottom ="2px solid rgb(148,148,148)";
});
feature.addEventListener("click",(e)=>{
    home.style.color="rgb(148,148,148)"
    contact.style.color="rgb(148,148,148)"
    // home.style.borderBottom="2px solid black"
    // contact.style.borderBottom="2px solid black"
    e.path[0].style.color = "white";
    e.path[0].style.borderBottom="2px solid rgb(148,148,148)";
});
contact.addEventListener("click",(e)=>{
    feature.style.color="rgb(148,148,148)"
    home.style.color="rgb(148,148,148)"
    // feature.style.borderBottom="2px solid black;"
    // home.style.borderBottom="2px solid black"
    e.path[0].style.color = "white";
    e.path[0].style.borderBottom="2px solid rgb(148,148,148)";
});