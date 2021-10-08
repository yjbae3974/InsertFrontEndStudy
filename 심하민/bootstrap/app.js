const right = document.querySelector(".right")
const link = right.querySelectorAll("a")
console.log(right)
console.log(link)

for (i=0;i<link.length;i++){
    link[i].addEventListener("click", (e)=>{
        e.style = "color: white"
    });
}