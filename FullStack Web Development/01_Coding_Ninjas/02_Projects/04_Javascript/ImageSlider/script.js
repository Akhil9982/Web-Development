/*
   This is a scaffold JavaScript file for the image carousel project.
   You'll need to implement the functionality of the carousel here.
   Consider the following steps:

   1. Define an array of image URLs for your carousel
   2. Keep track of the current image index
   3. Select and store references to your HTML elements (image container, prev/next buttons)
   4. Implement a function to update the displayed image
   5. Add event listeners to the prev/next buttons to change the current image
   6. Initialize the carousel with the first image

   Remember to use appropriate variable names and comments to make your code readable.
   Feel free to add any additional features or improvements to enhance the user experience!
*/

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Determine direction: 'next' -> 1, 'prev' -> -1
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    // Get the carousel container and all slides (images)
    const carousel = button.closest("[data-carousel]");
    const slides = carousel.querySelectorAll(".carousel-image");

    // Find the currently active slide
    const active = carousel.querySelector("[data-active]");
    const currentIndex = Array.from(slides).indexOf(active);

    // Compute new index with wrap-around
    let newIndex = currentIndex + offset;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    // Switch active attribute
    slides[currentIndex].removeAttribute("data-active");
    slides[newIndex].setAttribute("data-active", "");
  });
});