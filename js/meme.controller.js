'use ctrict'
let gElCanvas, gCtx;

renderMeme()

function renderMeme() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    const width = gElCanvas.width
    const height = gElCanvas.height
    let meme = getMeme()
    drawImg(meme, width, height)
}

function drawImg(meme, width, height) {
    let img = new Image();
    img.src = `img/${meme.selectedImgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, width, height)
        drawText(meme, width / 2.1, height / 7)
    };
}

function drawText(meme, x, y) {
    gCtx.font = `${meme.lines[0].size}px Impact`
    gCtx.fillStyle = 'white'
    gCtx.strokeStyle = 'black'
    gCtx.textBaseline = 'Top'
    gCtx.textAlign = `${meme.lines[0].align}`
    gCtx.lineWidth = 2;
    gCtx.fillText(meme.lines[0].txt, x, y);
    gCtx.strokeText(meme.lines[0].txt, x, y);
    gCtx.fill();
}

function onChangeLineTxt(value) {
    setLineTxt(value)
    renderMeme()
}

