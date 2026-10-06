const overlay = document.getElementById("overlay")
const email = document.getElementById("email")
const errorMessage = document.getElementById("errorMessage")

const closeModal = ()=>
{
    overlay.style.display = "none"
}

const stopClose = (event)=>
{
    event.stopPropagation()
}

const subscribe = (event)=>
{
    event.preventDefault()

    const emailValue = email.value.trim()

    if(emailValue==="")
    {
        errorMessage.innerText = "Please enter your email"
        errorMessage.style.color = "red"
        return
    }

    if(!emailValue.includes("@") || !emailValue.includes("."))
    {
        errorMessage.innerText = "Please enter a valid email"
        errorMessage.style.color = "red"
        return
    }

    errorMessage.innerText = "Successfully subscribed..."
    errorMessage.style.color = "green"

    setTimeout(()=>{
        closeModal()
    },1000)
}

setTimeout(() => {
     overlay.style.display = "flex"
}, 3000);