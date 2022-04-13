'use strict'

function initPage() {
    renderGallery()
}

function renderGallery() {
    const gallery = getImeges()
    const elGallery = document.querySelector('.gallery')
    const strHTML = gallery.map(img => `<img src="${img.url}" class="img" alt="" onclick="onSetImg(${img.id})">`)
    elGallery.innerHTML += strHTML.join('')
}

function onSetImg(imgId) {
    // console.log(imgId)
    setImg(imgId)
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'block'
    renderMeme()
}

function onGallery() {
    document.querySelector('.gallery').style.display = 'block'
    document.querySelector('.meme-editor').style.display = 'none'
}