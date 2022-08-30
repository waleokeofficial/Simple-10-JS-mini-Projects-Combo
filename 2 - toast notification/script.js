const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", ()=> {
    createNotification()
    // alert("hello World!")
})

function createNotification(){
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = "Welcome to Papi's page"

    container.appendChild(notif);

    setTimeout(()=> {
        notif.remove();
    }, 3000)
}