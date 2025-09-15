// Select all nav links inside the .links list
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // stop the default jump

    const targetId = this.getAttribute('href').substring(1); // remove the #
    const targetSection = document.getElementById(targetId);

    // Smooth scroll into view
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* =========================================================
   Smooth scrolling navigation for portfolio site
   ---------------------------------------------------------
   This script makes the page smoothly scroll to the correct
   section when a navigation link (About / Projects / Contact)
   is clicked.
   ========================================================= */

// Select every <a> element inside the element with class "links"
// i.e. all the nav links in the top menu.
document.querySelectorAll('.links a').forEach(link => {

  // For each nav link, attach a "click" event listener.
  // Whenever the link is clicked, this function will run.
  link.addEventListener('click', function (e) {

    // Prevent the browser's default behaviour.
    // Normally, clicking a link with href="#about"
    // instantly jumps to the section with that id.
    // We stop that so we can control the scrolling animation.
    e.preventDefault();

    // Get the value of the link's "href" attribute.
    // Example: "#about"
    // substring(1) removes the leading "#",
    // leaving just "about", which matches the id
    // of the target section.
    const targetId = this.getAttribute('href').substring(1);

    // Find the section element whose id equals the text
    // we just extracted. For example: <section id="about">
    const targetSection = document.getElementById(targetId);

    // Scroll the page so that the target section comes into view.
    // The object { behavior: 'smooth' } tells the browser to animate
    // the scroll instead of jumping instantly.
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ---------------------------------------------------------
// Tips for use:
// 1. Each nav link's href must match the target section's id.
//    Example: <a href="#projects"> must match <section id="projects">.
// 2. Place <script src="script.js"></script> at the bottom of the
//    HTML body or use the "defer" attribute so the script runs
//    after the HTML is loaded.
// 3. If you want a pure-CSS fallback, you can add this to styles.css:
//       html { scroll-behavior: smooth; }
//    This makes anchor link scrolling smooth even if JS is off.
// =========================================================
