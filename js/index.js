const targetDate = new Date("2024-12-23T12:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    clearInterval(countdown);
    console.log("1");
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
}, 1000);

function toggleMenu() {
  var menu = document.querySelector(".menu");
  var overlay = document.querySelector(".menu-overlay");
  menu.classList.toggle("menu-open");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
}

const musicControl = document.getElementById("navbar__btn");
const audio = document.getElementById("background-music");
const musicIcon = document.getElementById("music-icon");

let isPlaying = true;
var modal = document.getElementById("myModal");

function closeModal() {
  modal.style.display = "none";
}

musicControl.addEventListener("click", function () {
  if (isPlaying) {
    audio.muted = false;
    audio.play();
    musicIcon.src = "./img/unmute.svg";
  } else {
    audio.pause();
    musicIcon.src = "./img/mute.svg";
  }

  isPlaying = !isPlaying;
});

window.onload = function () {
  modal.style.display = "block";
}

function changeLanguage(language) {
  const elementsToTranslate = {
    hero__subheader: "hero_subheader",
    invit__header: "invit_header",
    invit__body: "invit_body",
    invitation: "invitation",
    map: "map",
    plan: "plan",
    time__left: "time__left",
    calendar__weekday: "calendar__weekday",
    calendar__weekmonth: "calendar__weekmonth",
    calendar__month: "calendar__month",
    program__header: "program__header",
    program__photo: "program__photo",
    program__event: "program__event",
    program__cake: "program__cake",
    location__header: "location__header",
    location__subheader: "location__subheader",
    location__location: "location__location",
    location__yandex: "location__yandex",
    dress__header: "dress__header",
    dress__subheader: "dress__subheader",
    dress__quest: "dress__quest",
    dress__body: "dress__body",
    form__header: "form__header",
    "form__form-header": "form__form-header",
    bride: "bride",
    groom: "groom",
    "form__form-header": "form__form-header",
    yes: "yes",
    no: "no",
    form__subheader: "form__subheader",
    form__submit: "form__submit",
    time__header: "time__header",
    time__days: "time__days",
    time__hours: "time__hours",
    time__minutes: "time__minutes",
    time__seconds: "time__seconds"
  };

  for (const elementId in elementsToTranslate) {
    const translationKey = elementsToTranslate[elementId];
    const element = document.getElementById(elementId);

    if (element && translations[language][translationKey]) {
      element.innerHTML = translations[language][translationKey];
    }
  }

  

  document.getElementById(`${language}-btn`).style.display = "none";

  const otherLanguages = ["en", "ru", "uz"].filter((lang) => lang !== language);
  otherLanguages.forEach((lang) => {
    document.getElementById(`${lang}-btn`).style.display = "inline-block";
  });

  console.log(`Language changed to: ${language}`);
  closeModal()
}
