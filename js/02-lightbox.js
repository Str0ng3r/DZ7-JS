import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector('.gallery')
console.log(ulGallery)

galleryItems.forEach(({preview,original,description}) => {
    ulGallery.insertAdjacentHTML('beforeend',`<div class="gallery__item"><a href=${original} class="gallery__link"><img class="gallery__image" src=${preview} data-caption=${description} data-source=${original} alt=${description}></a></div>`)



//     const liImg = document.createElement('li')
//     liImg.classList.add('gallery__item')
//     const linkImg = document.createElement('a')
//    const imgOne = document.createElement('img');
//    linkImg.classList.add('gallery__link')
//    imgOne.src = preview;
//    imgOne.dataset.source = original;
//    imgOne.alt = description
//    linkImg.href = original
//    imgOne.dataset.caption = description
//    imgOne.classList.add('gallery__image')
//    linkImg.appendChild(imgOne)
//    liImg.appendChild(linkImg)
//    ulGallery.appendChild(liImg)
})
        let lightbox = new SimpleLightbox('.gallery a', {captions: true,
            captionSelector: 'img',captionsType:'text',captionsData:'alt',captionDelay:250});
