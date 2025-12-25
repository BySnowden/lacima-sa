// 1. Select all the links in the navigation
const navLinks = document.querySelectorAll("nav a");

// --- PART 1: CLICK LOGIC (For when you are already on the page) ---
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const href = this.getAttribute("href");

    // Only move the orange line if we are staying on this page (jump link)
    if (href.startsWith("#")) {
      navLinks.forEach((nav) => nav.classList.remove("current-page"));
      this.classList.add("current-page");
    }
  });
});

// --- PART 2: LOAD LOGIC (For when you arrive from another page) ---
// This runs automatically as soon as the window finishes loading
window.addEventListener("load", function () {
  // 1. Get the "hash" from the URL (e.g., "#hours" or "#menu")
  const hash = window.location.hash;

  // 2. If there IS a hash (meaning we didn't just land on Home)
  if (hash) {
    navLinks.forEach((link) => {
      // Check if this link matches the hash (e.g. href="#hours")
      if (link.getAttribute("href") === hash) {
        // Reset everyone (turn off the default Home underline)
        navLinks.forEach((nav) => nav.classList.remove("current-page"));

        // Turn on the correct one
        link.classList.add("current-page");
      }
    });
  }
});
