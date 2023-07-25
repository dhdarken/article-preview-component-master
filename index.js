const d = document;

const date = d.getElementById("avatar");
const btn = d.getElementById("btn");
const social = d.getElementById("social");
const footer = d.getElementById("footer");

btn.addEventListener("click", fucn);
function fucn() {
  date.style.display = "none";
  social.style.display = "flex";
  footer.style.backgroundColor = "var(--Very-Dark-Grayish-Blue)";
}
