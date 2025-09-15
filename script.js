// 🔹 Smooth Scroll Navigation
// When a nav link is clicked, scroll smoothly to the target section
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default jump

    const targetId = this.getAttribute('href').substring(1); // Get section ID
    const targetSection = document.getElementById(targetId); // Find section

    targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll

    // Optional: Close mobile menu after clicking a link
    document.querySelector('.links').classList.remove('active');
  });
});

// 🔹 Hamburger Menu Toggle
// Show/hide nav links when hamburger icon is clicked
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  links.classList.toggle('active'); // Toggle visibility
});

// 🔹 Accessibility: Allow keyboard toggle with Enter key
hamburger.setAttribute("tabindex", "0"); // Make hamburger focusable

hamburger.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    links.classList.toggle("active"); // Toggle on Enter key
  }
});
