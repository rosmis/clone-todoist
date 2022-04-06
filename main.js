//HAMBURGER ANIMATION

const menuBtn = document.querySelector(".hamburger");
const menuItems = document.querySelector(".nav-links");

// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}

//TOOGLE TABS

const tabs = Array.from(document.querySelectorAll(".tab"));
const content = Array.from(document.querySelectorAll(".customer-wrapper"));

tabs.forEach((tab) => {
  tab.addEventListener("click", tabsAnimation);
});

let index = 0;

function tabsAnimation(e) {
  const el = e.target;

  tabs[index].classList.remove("tab-active");
  content[index].classList.remove("active-content");

  index = tabs.indexOf(el);

  tabs[index].classList.add("tab-active");
  content[index].classList.add("active-content");
}
