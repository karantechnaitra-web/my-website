menuBtn.onclick = function () {
  menu.classList.toggle("active");
};

// slider js
var slides = document.getElementsByClassName("slide");
var index = 0;
// var timer = setInterval(nextSlide, 10000);

function showSlide(n) {
  slides[index].classList.remove("active");
  index = n;
  slides[index].classList.add("active");
}

function nextSlide() {
  var next = index + 1;
  if (next >= slides.length) next = 0;
  showSlide(next);
  resetTimer();
}

function prevSlide() {
  var prev = index - 1;
  if (prev < 0) prev = slides.length - 1;
  showSlide(prev);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 6000);
}

// slider js close
// input errors
const inputs = document.querySelectorAll("#myForm input");
document.getElementById("myForm").addEventListener("submit", function(e){
  e.preventDefault();
  let valid = true;

  inputs.forEach(input => {
    const error = input.nextElementSibling;
    if(input.value.trim() === ""){
      error.textContent = "This field is required";
      valid = false;
    } else {
      error.textContent = "";
    }
  });

  if(valid){
    alert("Form submitted");
  }
});

// backtotop

const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



