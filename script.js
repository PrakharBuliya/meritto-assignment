// Get references to the button and sidebar elements
const toggleButton = document.getElementById("nav-toggle");
const sidebar = document.querySelector(".sidebar");

// Add a click event listener to the button
toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

// Optionally, close the sidebar when clicking outside of it
document.addEventListener("click", function (e) {
  if (!sidebar.contains(e.target) && e.target !== toggleButton) {
    sidebar.classList.remove("active");
  }
});
