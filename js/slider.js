const slide = document.querySelector(".slide");
const firstSlide = document.querySelector(".slide_item");

const SHOWING_CN = 'slider_showing';
const IMG_NUM = 5;

function changeSlide() {
    const currentSlide = slide.querySelector(`.${SHOWING_CN}`);

    if (currentSlide !== null) {
        currentSlide.classList.remove(SHOWING_CN);
        const nextSlide = currentSlide.nextElementSibling;

        if (nextSlide.className !== "blank") {
            nextSlide.classList.add(SHOWING_CN);
        } else {
            firstSlide.classList.add(SHOWING_CN);
        }

    } else {
        firstSlide.classList.add(SHOWING_CN);
    }
}

function handleSlideClick(){
    changeSlide();
}

function init() {
    changeSlide();
    setInterval(changeSlide, 2700);

    slide.addEventListener("click", handleSlideClick);
}

init();