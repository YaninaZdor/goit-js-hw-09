import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import data from '../img/data.js';

const gallery = document.querySelector('.gallery');

const markup = data
  .map(({ preview, original, description }) => {
    return `<li class="gallery-item hvr-grow">
            <a class="gallery-link" href="${original}">
              <img
                class="gallery-image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>`;
  })
  .join('');

gallery.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
