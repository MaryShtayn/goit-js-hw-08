// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
console.log(SimpleLightbox);
console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const galleryItem = document.querySelector('.gallery__item');
const markup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      onclick="return false"
    />
  </a>`
    )
    .join('');
}
gallery.insertAdjacentHTML('beforeend', markup);

function onOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
}
const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
lightbox.on('show.simplelightbox', function () {
  gallery.addEventListener('click', onOpenModal);
});
