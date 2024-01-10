// login e Elements
const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginInput = login.querySelector(".login__input")

// Chat e Elements
const chat = document.querySelector(".chat")
const chatForm = chat.querySelector(".chat__form")
const chatnInput = chat.querySelector(".chat__input")


const colors = [
    "darkRed",
    "hotPink",
    "orangeRed",
    "gold",
    "mediumOrchid",
    "mediumPurple",
    "rebeccaPurple",
    "lawnGreen",
    "mediumAquamarine",
    "aqua",
    "steelBlue",
    "dodgerBlue"
]

const user = {id: "", name:"", color:""}


let websocket


const getRaandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const handleSubmit = (event) => {
    event.preventDefault()

    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRaandomColor()
    
    login.style.display = "none"
    document.body.classList.add('logged-in')
    chat.style.display = "flex"

    websocket = new WebSocket("ws://localhost:8080")

    console.log(user)
}

loginForm.addEventListener("submit", handleSubmit)