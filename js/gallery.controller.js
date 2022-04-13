'use strict'

function initPage() {
    renderGallery()
}

function renderGallery() {
    const gallery = getImeges()
    const elGallery = document.querySelector('.gallery')
    const strHTML = gallery.map(img => `<img  src="${img.url}" class="img" alt="" onclick="onSetImage(this, ${img.id})">`)
    elGallery.innerHTML += strHTML.join('')
}

function onSetImage(value, imgId) {
    console.log(value)
    console.log(imgId)
    setMeme(imgId)
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'block'
    renderMeme()
}

