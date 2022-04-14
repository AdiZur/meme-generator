'use ctrict'
let gElCanvas
let gCtx

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
        // gCtx.fill();
    })
    checkAlignFocus()

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
    console.log('newline')
    meme = getMeme()
    console.log(meme.selectedLineIdx)
    addNewTextLine()
    onSetFocus()
    // switchLine()
    // onSwitchLine()
    renderMeme()
}

function onSwitchLine() {
    let meme = getMeme()
    onSetFocus()
    console.log(meme.selectedLineIdx)
    switchLine(meme.selectedLineIdx)
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
    // renderMeme()
}

// function onKeywordsSearch(string) {
//     let searchOptions = getFilteredKeywords(string).reduce((acc, option) => {
//         acc += `<option value="${option.word}">`;
//         return acc;
//     }, '');
//     document.querySelector('#search-options').innerHTML = searchOptions;
//     updateSearchFilter(string);
//     initImagesGallery();
// }

function onDeleteLine() {
    deleteLine()
    renderMeme()
}


function drawRect(x, y, xEnd, yEnd) {
    gCtx.beginPath()
    gCtx.rect(x, y, xEnd, yEnd);
    gCtx.closePath()
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
    renderMeme()
}

function onSetFocus() {
    checkAlignFocus()
}

function onMoveLine(value) {
    moveLine(value)
    renderMeme()
}