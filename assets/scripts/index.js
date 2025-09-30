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

const linkFeatures= document.getElementById("link-features")
const linkCompany= document.getElementById("link-company")
const menuFeatures = document.getElementById("menu-features")
const menuCompany = document.getElementById("menu-company")

linkFeatures.onclick = (e) => {
    menuFeatures.classList.toggle("hidden")
    e.target.classList.toggle("arrow-down")
    e.target.classList.toggle("arrow-up")
}
linkCompany.onclick = (e) => {
    menuCompany.classList.toggle("hidden")
    e.target.classList.toggle("arrow-down")
    e.target.classList.toggle("arrow-up")
}

