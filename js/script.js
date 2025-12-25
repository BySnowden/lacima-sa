const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const href = this.getAttribute("href");

    if (href.startsWith("#")) {
      navLinks.forEach((nav) => nav.classList.remove("current-page"));
      this.classList.add("current-page");
    }
  });
});

window.addEventListener("load", function () {
  const hash = window.location.hash;

  if (hash) {
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === hash) {
        navLinks.forEach((nav) => nav.classList.remove("current-page"));

        link.classList.add("current-page");
      }
    });
  }
});
