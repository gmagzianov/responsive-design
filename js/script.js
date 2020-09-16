window.addEventListener("load", function () {
  const navBar = document.getElementById("navBar");
  const navBarBtn = document.querySelector("#navBar .navBar-btn");
  navBarBtn.addEventListener("click", function () {
    navBar.classList.toggle("active");
  });
  const gotoLinks = document.querySelectorAll(".goto-link");
  gotoLinks.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const hash = "#" + e.target.href.split("#")[1];
      document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
    });
  });
});
