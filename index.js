
const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

function collapsibleFunction1() {
  var element = document.getElementById("projectText1");
  element.classList.toggle("displayNone");
}

function collapsibleFunction2() {
  var element = document.getElementById("projectText2");
  element.classList.toggle("displayNone");
}

function collapsibleFunction3() {
  var element = document.getElementById("projectText3");
  element.classList.toggle("displayNone");
}

function collapsibleFunction4() {
  var element = document.getElementById("projectText4");
  element.classList.toggle("displayNone");
}

function collapsibleFunction5() {
  var element = document.getElementById("projectText5");
  element.classList.toggle("displayNone");
}

function collapsibleFunction6() {
  var element = document.getElementById("projectText6");
  element.classList.toggle("displayNone");
}

function collapsibleFunction7() {
  var element = document.getElementById("projectText7");
  element.classList.toggle("displayNone");
}



