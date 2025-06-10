document.addEventListener("DOMContentLoaded", function () {
  // Load saved theme from local storage
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    document.getElementById("themeStylesheet").setAttribute("href", savedTheme);

    // Set active class on the selected theme button
    const themeButtons = document.querySelectorAll("[data-theme]");
    themeButtons.forEach((btn) => {
      if (btn.getAttribute("data-theme") === savedTheme) {
        btn.classList.add("active-theme");
      }
    });
  }
});

document.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-theme")) {
    const themeFile = event.target.getAttribute("data-theme");

    // Remove active class from all buttons and set it for the selected one
    const themeButtons = document.querySelectorAll("[data-theme]");
    themeButtons.forEach((btn) => btn.classList.remove("active-theme"));
    event.target.classList.add("active-theme");

    // Change theme
    document.getElementById("themeStylesheet").setAttribute("href", themeFile);

    // Save the selected theme to local storage
    localStorage.setItem("selectedTheme", themeFile);

    

    
  }
});
