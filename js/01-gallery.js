import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector('.gallery')
console.log(divGallery)

galleryItems.forEach(({preview,original,description}) => {
  divGallery.insertAdjacentHTML('beforeend',`<div class="gallery__item"><a href=${original} class="gallery__link"><img class="gallery__image" src=${preview} data-source=${original} alt=${description}></a></div>`)
  //   const divImg = document.createElement('div')
  //   divImg.classList.add('gallery__item')
  //   const linkImg = document.createElement('a')
  //  const imgOne = document.createElement('img');
  //  linkImg.classList.add('gallery__link')
  //  imgOne.src = preview;
  //  imgOne.dataset.source = original;
  //  imgOne.alt = description
  //  linkImg.href = original
  //  imgOne.classList.add('gallery__image')
  //  linkImg.appendChild(imgOne)
  //  divImg.appendChild(linkImg)
  //  divGallery.appendChild(divImg)
})
divGallery.addEventListener('click',(event) => {
    console.log(event.type)
    event.preventDefault();
    if(event.target.nodeName === 'IMG' ){
        const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}'  width="800" height="600">
`)

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });


instance.show()
    }
})
