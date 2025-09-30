const navElement = document.querySelector('.header__navbar')
const blurElement = document.querySelector(".bg-blur")
const btnOpen = document.getElementById("menu-open")
const btnClose = document.getElementById("menu-close")

btnOpen.onclick = () => {
    navElement.classList.add("hidden-nav")
    blurElement.classList.remove("hidden")
}
btnClose.onclick = () => {
    navElement.classList.remove("hidden-nav")
    blurElement.classList.add("hidden")
}
blurElement.onclick = (e) => {
    navElement.classList.remove("hidden-nav")
    e.target.classList.add("hidden")
}
