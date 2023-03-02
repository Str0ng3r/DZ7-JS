import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector('.gallery')
console.log(divGallery)

galleryItems.forEach(({preview,original,description}) => {
    const divImg = document.createElement('div')
    divImg.classList.add('gallery__item')
    const linkImg = document.createElement('a')
   const imgOne = document.createElement('img');
   linkImg.classList.add('gallery__link')
   imgOne.src = preview;
   imgOne.dataset.source = original;
   imgOne.alt = description
//    linkImg.href = ''
   imgOne.classList.add('gallery__image')
   linkImg.appendChild(imgOne)
   divImg.appendChild(linkImg)
   divGallery.appendChild(divImg)
})

divGallery.addEventListener('click',({target}) => {
    if(target.nodeName === 'IMG' ){
        console.log(target.source)
        const instance = basicLightbox.create(`
    <img src='${target.dataset.source}'  width="800" height="600">
`)

instance.show()
    }
})