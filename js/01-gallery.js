import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems.map ((galleryItem) => `<li class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt="${galleryItem.description}"
  />
</a>
</li>`)
.join("");
list.innerHTML = markup;
list.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== "IMG") {
    return;
  }

  const largeImageUrl = target.dataset.source;

  const instance = new SimpleLightbox({
  items: [
    {
      src: largeImageUrl,
      title: target.alt
    }
  ]
});


  instance.show();
}
