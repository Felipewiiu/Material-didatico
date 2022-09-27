const login = document.querySelector("[data-login]")
const start = document.querySelector("[data-open]")
const inputLogin = document.querySelector('.form-login')
const img = document.querySelector("[data-img]")



start.addEventListener("click", () =>{
    start.classList.add("hide")
    inputLogin.classList.remove('hide')
    img.classList.add("hide")
})