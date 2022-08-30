const btn = document.getElementById("btn")
const nav = document.getElementById("nav")


// function tapBtn(){
//     nav.classList.toggle("active");
// }
// const btn = document.getElementById("btn");
// const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    console.log("hhhh");
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});