import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector('.gallery')
console.log(ulGallery)

galleryItems.forEach(({preview,original,description}) => {
    const liImg = document.createElement('li')
    liImg.classList.add('gallery__item')
    const linkImg = document.createElement('a')
   const imgOne = document.createElement('img');
   linkImg.classList.add('gallery__link')
   imgOne.src = preview;
   imgOne.dataset.source = original;
   imgOne.alt = description
   linkImg.href = original
   imgOne.dataset.caption = description
   imgOne.classList.add('gallery__image')
   linkImg.appendChild(imgOne)
   liImg.appendChild(linkImg)
   ulGallery.appendChild(liImg)
})

ulGallery.addEventListener('click', (event) => {
event.preventDefault()

    if (event.target.nodeName === 'IMG'){
        let lightbox = new SimpleLightbox('.gallery a', {captions: true,
            captionSelector: 'img',captionsType:'text',captionsData:'alt',captionDelay:250});
    }
})

