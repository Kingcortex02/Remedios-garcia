document.addEventListener('DOMContentLoaded', function () {
  const icons = document.querySelectorAll('.icon');
  const images = document.querySelectorAll('#image img');
  const imageContainer = document.getElementById('image');

  icons.forEach(icon => {
    icon.addEventListener('click', function () {
      const imageNumber = parseInt(this.getAttribute('data-image'));

      // Remove the 'iconColor' class from all icons
      icons.forEach(icon => icon.classList.remove('iconColor'));

      // Add the 'iconColor' class to the clicked icon
      this.classList.add('iconColor');

      // Calculate the correct scroll position based on the selected image
      const scrollPosition = (imageNumber - 1) * window.innerWidth;

      // Smoothly scroll to the next image
      imageContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    });
  });
});