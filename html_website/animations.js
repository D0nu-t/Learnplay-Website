window.addEventListener("scroll", animateElements);

function animateElements() {
  var windowHeight = window.innerHeight;
  var elements = document.querySelectorAll(".animation");

  elements.forEach(function(element) {
    var elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      element.classList.add("animate");
    }
  });
}
