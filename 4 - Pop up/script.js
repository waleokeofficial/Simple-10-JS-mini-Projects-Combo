// Code 2

// const btnOpen = document.getElementById("btn-open");
// const popupContainer = document.getElementById("popup-container");
// const btnClose = document.getElementById("btn-close");
// const popUp = document.getElementById("popup");


// btnOpen.addEventListener("click", ()=> {
//     popupContainer.classList.toggle("active");
// })

// btnClose.addEventListener("click", ()=> {
//     popupContainer.classList.toggle("active");
//     // popUp.classList.toggle("remove");
// })



// Code 1

const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const popupContainer = document.getElementById("popup-container");


btnOpen.addEventListener("click", ()=> {
    popupContainer.classList.add("active");
})

btnClose.addEventListener("click", ()=> {
    popupContainer.classList.remove("active");
    // popUp.classList.toggle("remove");
})
