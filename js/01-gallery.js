import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery")

const addImages = galleryItems
.map((item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
)
    .join('')
gallery.insertAdjacentHTML("beforeend", addImages)


const openModal = (e) => {

    e.preventDefault()
    if(e.target.dataset.source){
 
        basicLightbox.create(`
		<img width="100%"  src="${e.target.dataset.source}">
	`).show()
    }
  
}
gallery.addEventListener("click", openModal);




function closeModal() {
    const modalWindow = document.querySelector('.basicLightbox');
    modalWindow.remove();    
}

function closeModalOnEscKeyClick(evt) {
  if (evt.keyCode === 27) {
      closeModal();  
  }
}
window.addEventListener('keydown', closeModalOnEscKeyClick);