const login = document.querySelector(".login");
const loginForm = login.querySelector(".login__form");
const loginInput = login.querySelector(".login__input");

const chat = document.querySelector(".chat");
const chatForm = chat.querySelector(".chat__form");
const chatInput = chat.querySelector(".chat__input");

const colors = [
    "coral",
    "darkcyan",
    "chocolate", 
    "darkgoldenrod", 
    "hotpink",
    "cornflowerblue"
]

const user = {id:"", name:"", color:""}

let websocket 

const geteRandomColor = ()=>{
    const randomIndex =Math.floor(Math.random()* colors.length)
    return colors[randomIndex]
}



const handleSubmit = (event)=>{
    event.preventDefault();
    user.id= crypto.randomUUID()
    user.name = loginInput.value;
    user.color = geteRandomColor()

    login.style.display = "none"
    chat.style.display = "flex"

    websocket = new WebSocket("ws://localhost:8080")

    console.log(user);

};

loginForm.addEventListener("submit", handleSubmit);