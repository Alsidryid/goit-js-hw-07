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

let modal;
const openModal = (e) => {

    e.preventDefault()
    if(e.target.dataset.source){
 
     modal =   basicLightbox.create(`
		<img width="100%"  src="${e.target.dataset.source}">
	`, { onShow, })
       modal.show()
    }
  
}
gallery.addEventListener("click", openModal);

function onShow() {
  window.addEventListener("keydown", onEscPress);
}
function onClose() {
  window.removeEventListener("keydown", onEscPress);
}
function onEscPress(event) {
    if (event.code === "Escape") {
        modal.close();
        onClose();
    }
}