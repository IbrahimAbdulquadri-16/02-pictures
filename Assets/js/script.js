
const toggleButton = document.getElementsByClassName('nav-toggler')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    toggleButton.classList.toggle('active')
});

document.querySelectorAll('.nav-links li a').forEach(n => n.
addEventListener("click" , () => {
    toggleButton.classList.remove("active")
    navLinks.classList.remove("active")
}));

document.querySelectorAll('.pics img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
}


