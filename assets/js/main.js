const burger = document.getElementById("burger");
const mobile = document.getElementById("mobileNav");
if (burger && mobile) {
  burger.addEventListener("click", () => {
    mobile.style.display = (mobile.style.display === "block") ? "none" : "block";
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
