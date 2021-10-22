// Weather

const url = "http://api.openweathermap.org/data/2.5/weather?id=625144&appid=4ae244728ef9905b2bd2725593a721bf&units=metric"

fetch(url)
  .then(function (resp) {
    return resp.json();
  })
  .then(function weatherIcon(data) {
    document.querySelector(" .weather").innerHTML = `${Math.round(
      data.main.temp
    )}&deg;C`;
    const image = document.createElement("img");
    image.src = `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`;
    document.querySelector(" .weather__icon").appendChild(image);
  });

// Date

function getDate() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  document.querySelector(".header__time").innerHTML = hours + ":" + minutes;
  const monthNames = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  let day = (date.getDate() < 10 ? "0" : "") + date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();
  document.querySelector(".header__date").textContent =
    day + " " + month + " " + year;
}

getDate();

setInterval(getDate, 5000);

// Slider

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider__item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
