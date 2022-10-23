const toggle = document.querySelector('.toggle')
const nav = document.querySelector('nav')
const navigation = document.querySelector('.nav-menu')

toggle.addEventListener('click', () => {
    navigation.classList.toggle('active')
    nav.classList.toggle('active')
})