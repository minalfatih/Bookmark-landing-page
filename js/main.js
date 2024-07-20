let menuBtn = document.querySelector(".navbar-toggler");
menuBtn.onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    document.querySelector("header .navbar").classList.add("active");
  } else {
    setTimeout(() => {
      document.querySelector("header .navbar").classList.remove("active");
      document.querySelector(".overlay").remove();
    }, 500);
  }
};

let btns = document.querySelectorAll(".feature ul li span");
let img = document.querySelector(".feature .image img");
let arr = [
  "illustration-features-tab-1",
  "illustration-features-tab-2",
  "illustration-features-tab-3",
];
let text = document.querySelectorAll(".feature .info");

btns.forEach((btn) => {
  btn.onclick = function () {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    text.forEach((text) => {
      text.classList.remove("active");
    });
    this.classList.add("active");
    if (this.textContent === "Simple Bookmarking") {
      change(0);
    }
    if (this.textContent === "Speedy Searching") {
      change(1);
    }
    if (this.textContent === "Easy Sharing") {
      change(2);
    }
  };
});

function change(num) {
  img.src = `./images/${arr[num]}.svg`;
  text[num].classList.add("active");
}

let que = document.querySelectorAll(".question li");

que.forEach((que) => {
  que.onclick = function () {
    this.classList.toggle("open");
  };
});

let box = document.querySelector(".contact .box");
let errorMesg = document.createElement("span");
errorMesg.className = "error-mesg";
errorMesg.textContent = "Whoops, make sure it's an email";
box.appendChild(errorMesg);

document.forms[0].onsubmit = function () {
  let input = document.querySelector("input[type='text']");
  let regex = /\w+@[a-z]+\.[a-z]{2,}/gi;
  if (regex.test(input.value)) {
    document.querySelector(".contact .box .image").classList.remove("active");
    box.classList.remove("error");
    errorMesg.classList.remove("active");
  } else {
    box.classList.add("error");
    document.querySelector(".contact .box .image").classList.add("active");
    errorMesg.classList.add("active");
  }
  return false;
};
