let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let logo = document.getElementById("logo");

btn.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    btnIcon.src = "images/sun.png";
    btnText.innerHTML = "Light";
    logo.src = "images/logo-white.png";
  } else {
    btnIcon.src = "images/moon.png";
    btnText.innerHTML = "Dark";
    logo.src = "images/logo.png";
  }
};
