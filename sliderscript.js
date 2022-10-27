
const images = [{
    url: "'images/image 2.1 projects.jpg'",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don LCD Admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request"
}, {
    url: "'images/image 2 Sochi Thieves.jpg'",
    title: "Sochi Thieves",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
}, {
    url: "'images/image 3 Rostov Patriotic .jpg'",
    title: "Rostov-on-Don, Patriotic",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request"
}];

function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector(".slider__images");
    let sliderNav = document.querySelector(".slider__nav");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderTitles = document.querySelector(".slider__titles");
    
    let infoCity = document.querySelector("#city-name");
    let infoArea = document.querySelector("#square-value");
    let infoTime = document.querySelector("#timing-value");
    let infoCost = document.querySelector("#cost-value");

    infoCity.innerText = images[0].city;
    infoArea.innerText = images[0].area;
    infoTime.innerText = images[0].time;
    infoCost.innerText = images[0].cost;

    initImage();
    initArrows();
    initDots();
    initTitles();

    function initImage() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;        
        })
    }

    function initArrows() {
        sliderNav.querySelectorAll(".btn_arrow").forEach(arrow => {
          arrow.addEventListener("click", function() {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
              nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
            } else {
              nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
          });
        });
    }
      
    function initDots() {
        images.forEach((image, index) => {
          let dot = `<button class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></button>`;
          sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
          dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          })
        })
    }

    function initTitles () {
        images.forEach((image, index) => {
            let titleButton = `<button class="title_project n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].title}</button>`;
            sliderTitles.innerHTML += titleButton;
        })
        sliderTitles.querySelectorAll(".title_project").forEach(title => {
            title.addEventListener("click", function() {
              moveSlider(this.dataset.index);
            })
          })
    }

    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        sliderTitles.querySelector(".active").classList.remove("active");
        sliderTitles.querySelector(".n" + num).classList.add("active");
        setParametres(num);
    }

    function setParametres(num) {
        let infoCity = document.querySelector("#city-name");
        let infoArea = document.querySelector("#square-value");
        let infoTime = document.querySelector("#timing-value");
        let infoCost = document.querySelector("#cost-value");

        infoCity.innerText = images[num].city;
        infoArea.innerText = images[num].area;
        infoTime.innerText = images[num].time;
        infoCost.innerText = images[num].cost;    
    }
}

document.addEventListener("DOMContentLoaded", initSlider());