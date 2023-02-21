// navbar toggle
const menu = document.getElementById("menu");
const toogle = document.querySelector(".navbar_toogle");
menu.addEventListener("click", function () {
    toogle.classList.toggle("active");
});

const closeToggle = document.getElementById("closeToggle");

closeToggle.addEventListener("click", function () {
    toogle.classList.remove("active");
});

// btnVideo
const btnVideo = document.getElementById("btn");
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("close");
const videoSrc = document.getElementById("video");

function modalActive() {
    modal.classList.add("activeModal");
    videoSrc.setAttribute("src", "https://www.youtube.com/embed/mqqft2x_Aa4");
}

function clearModal() {
    modal.classList.remove("activeModal");
    videoSrc.setAttribute("src", "");
}

btnVideo.addEventListener("click", modalActive);

closeModal.addEventListener("click", clearModal);
