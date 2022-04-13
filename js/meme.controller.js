'use ctrict'
let gElCanvas, gCtx;

// renderMeme()

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
    // console.log(x)
    // console.log(y)
    let lines = meme.lines
    const idx = meme.selectedImgId
    // console.log(idx)
    const line = meme.lines[idx]
    // console.log(txt)
    lines.forEach(line => {
        gCtx.font = `${line.size}px ${line.font}`
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = 'black'
        // gCtx.textBaseline = 'Top'
        gCtx.textAlign = `${line.align}`
        gCtx.lineWidth = 2;
        gCtx.fillText(line.txt, line.x, line.y);
        gCtx.strokeText(line.txt, line.x, line.y);
        gCtx.fill();
    })
}

function onChangeLineTxt(value) {
    if (document.querySelector('.txt-line').value) setLineTxt(value)
    renderMeme()
}

function onChangeTxtColor(color) {
    console.log(color)
    changeTxtColor(color)
    renderMeme()
}

function onChangeFontSize(value) {
    console.log('fontsize')
    setFontSize(value)
    renderMeme()
}

function onAddNewLine() {
    addNewTextLine()
    // switchLine()
    // onSwitchLine()
    renderMeme()
}

function onSwitchLine() {
    let meme = getMeme()
    console.log(meme.lines)
    let newCurrLine = switchLine()
    // console.log(newCurrLine)
    // document.querySelector('.txt-line').value = meme.lines[newCurrLine].txt;
    renderMeme()
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'canvas.jpg'
}

function uploadImg() {
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`

        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }
    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}

function onChangeFont(font) {
    setFont(font)
    renderMeme()
}

function onChangeAlign(value) {
    setAlign(value)
    renderMeme()
}

