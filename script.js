// ============================
// Mobile Navigation
// ============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const expanded =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      (!expanded).toString()
    );
  });
}

navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ============================
// Reveal Animation
// ============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => observer.observe(el));

// ============================
// Scroll Progress
// ============================

const progressBar = document.querySelector("#progressBar");

function updateProgress() {

  if (!progressBar) return;

  const scrollTop = window.scrollY;

  const scrollHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    (scrollTop / scrollHeight) * 100;

  progressBar.style.width = progress + "%";
}

window.addEventListener("scroll", updateProgress);

updateProgress();

// ============================
// Footer Year
// ============================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// ============================
// Active Navigation
// ============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const top = section.offsetTop - 120;
    const height = section.clientHeight;

    if (scrollY >= top) {
      current = section.getAttribute("id");
    }

  });

  navAnchors.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === "#" + current
    ) {
      link.classList.add("active");
    }

  });

});

// ============================
// Animated Counters
// ============================

const counters = document.querySelectorAll(".stat-item h3");

const animateCounter = (counter) => {

  const target = parseInt(counter.innerText);

  if (isNaN(target)) return;

  let count = 0;

  const increment = Math.ceil(target / 40);

  const timer = setInterval(() => {

    count += increment;

    if (count >= target) {

      counter.innerText =
        target + "+";

      clearInterval(timer);

    } else {

      counter.innerText =
        count + "+";

    }

  }, 30);

};

const counterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

animateCounter(
entry.target
);

counterObserver.unobserve(entry.target);

}

});

},

{
threshold:.6
}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ============================
// Contact Form
// ============================

const contactForm =
document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=
contactForm.querySelectorAll("input, textarea");

let valid=true;

inputs.forEach(input=>{

if(input.hasAttribute("required") &&
input.value.trim()===""){

valid=false;

input.style.borderColor="#ff5d5d";

}else{

input.style.borderColor="";

}

});

if(!valid){

alert("Please fill all required fields.");

return;

}

alert(
"Thank you for your message! I'll get back to you soon."
);

contactForm.reset();

});

}

// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ============================
// Button Hover Animation
// ============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-3px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});

// ============================
// Page Load Animation
// ============================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// ============================
// Console Signature
// ============================

console.log(
"%cPortfolio by Nishika Jailwal",
"color:#85b7ff;font-size:18px;font-weight:bold;"
);
