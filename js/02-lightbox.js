import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery")

const addImages = galleryItems
.map((item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`)
    .join('')
gallery.insertAdjacentHTML("beforeend", addImages)
const lightbox = new SimpleLightbox('.gallery a', { /* options */ });





const openModal = (e) => {
    e.preventDefault()
    if(e.target.nodeName ==="IMG"){
      const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay:250 });
    }
  
}


gallery.addEventListener("click", openModal)