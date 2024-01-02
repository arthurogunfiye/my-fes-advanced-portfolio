// EmailJS template ID: template_3eol2re
// EmailJS service ID: service_lb2bdtp
// EmailJS public key: JfKuO5_jJ95ACtRed

const darkModeIcon = document.querySelector(".fa-adjust");
const body = document.querySelector("body");
const form = document.querySelector("#contact__form");
const contactMeBtn = document.querySelector(".mail__btn");
const modalExitBtn = document.querySelector(".modal__exit");
const contactNavLink = document.querySelector(".nav__link--anchor-contact");
const aboutMeText = document.querySelector(".about-me-text");
const footerContactLink = document.querySelector(
  ".footer__social--link-contact"
);
const navAboutLink = document.querySelector(".footer__social--link-about");
const shapes = document.querySelectorAll(".shape");

form.addEventListener("submit", contact);

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_lb2bdtp",
      "template_3eol2re",
      event.target,
      "JfKuO5_jJ95ACtRed"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on email@email.com"
      );
    });
}

contactMeBtn.addEventListener("click", toggleModal);
modalExitBtn.addEventListener("click", toggleModal);
contactNavLink.addEventListener("click", toggleModal);
aboutMeText.addEventListener("click", toggleModal);
footerContactLink.addEventListener("click", toggleModal);
navAboutLink.addEventListener("click", toggleModal);

// Initialize a variable to track whether the modal is open or closed
let isModalOpen = false;

function toggleModal() {
  // Check if the modal is currently open
  if (isModalOpen) {
    // If open, set isModalOpen to false and remove the 'modal--open' class from the body
    isModalOpen = false;
    return body.classList.remove("modal--open");
  }
  // If closed, set isModalOpen to true and add the 'modal--open' class to the body
  isModalOpen = true;
  body.classList.add("modal--open");
}

darkModeIcon.addEventListener("click", toggleContrast);

let contrastToggle = false;

function toggleContrast() {
  // contrastToggle = !contrastToggle;
  // if (contrastToggle) {
  //   body.classList.add("dark-mode");
  // } else {
  //   body.classList.remove("dark-mode");
  // }
  body.classList.toggle("dark-mode");
}

body.addEventListener("mousemove", moveBackground);

function moveBackground(event) {
  const scaleFactor = 0.05; // (1/20)
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}

// N.B. querySelectorAll() returns a nodeList of elements in an array.
// This means we can use Array methods on the returned nodeList elements.
