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
    setImg(imgId)
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.meme-editor').style.display = 'block'
    renderMeme()
}

function onGallery() {
    document.querySelector('.meme-editor').style.display = 'none'
    document.querySelector('.gallery').style.display = 'grid'
    document.querySelector('input[name="txt-line"]').value = ''
    resetMeme()
}



