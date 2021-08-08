let hamburgerTransEffect = document.querySelector(".hamburger-menu");

hamburgerTransEffect.addEventListener('click', () => {
    document.querySelector(".container").classList.toggle("change");
    console.log(".change added")
});
