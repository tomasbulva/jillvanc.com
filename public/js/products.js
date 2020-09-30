const handleClick = (event) => {
  console.log('mouseenterleave', event);
  event.target.closest('.image-gallery-animation-wrapper').classList.toggle('is-active');
}

const galleries = document.querySelectorAll('.image-gallery');

for (const gallery of galleries) {
  gallery.addEventListener('click', handleClick);
  gallery.addEventListener('touchend', handleClick);
}
