const stayGallery = document.querySelector('[data-stay-gallery]');
const stayPhoto = stayGallery.querySelector('.stay-gallery__photo');
const stayCounter = stayGallery.querySelector('.stay-gallery__counter');
const stayThumbnails = [...stayGallery.querySelectorAll('.stay-gallery__thumb')];
let stayIndex = 0;

function showStayPhoto(index) {
  stayIndex = (index + stayThumbnails.length) % stayThumbnails.length;
  const selected = stayThumbnails[stayIndex];
  stayPhoto.src = selected.querySelector('img').src;
  stayPhoto.alt = `Интерьер ДоброХостела, фото ${stayIndex + 1}`;
  stayCounter.textContent = `${stayIndex + 1} / ${stayThumbnails.length}`;
  for (const thumbnail of stayThumbnails) {
    thumbnail.setAttribute('aria-pressed', String(thumbnail === selected));
  }
  const rail = selected.parentElement;
  const thumbBounds = selected.getBoundingClientRect();
  const railBounds = rail.getBoundingClientRect();
  if (thumbBounds.left < railBounds.left) rail.scrollLeft -= railBounds.left - thumbBounds.left;
  if (thumbBounds.right > railBounds.right) rail.scrollLeft += thumbBounds.right - railBounds.right;
}

stayThumbnails.forEach((button, index) => button.addEventListener('click', () => showStayPhoto(index)));
stayGallery.querySelector('[data-stay-prev]').addEventListener('click', () => showStayPhoto(stayIndex - 1));
stayGallery.querySelector('[data-stay-next]').addEventListener('click', () => showStayPhoto(stayIndex + 1));
stayGallery.addEventListener('keydown', event => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  showStayPhoto(stayIndex + (event.key === 'ArrowLeft' ? -1 : 1));
});
