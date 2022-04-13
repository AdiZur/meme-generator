'use ctrict'
// let gImg =  [{id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']}];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            font: 'Impact',
            size: 30,
            align: 'center',
            color: 'red',
            x: 190,
            y: 57
        },
        {
            txt: 'I sometimes eat Falafel',
            font: "Impact",
            size: 30,
            align: 'center',
            color: 'red',
            x: 190,
            y: 370
        }

    ]
}
function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    // if (!lines[currLine].txt) return
    let currLine = gMeme.selectedLineIdx
    console.log(currLine)
    gMeme.lines[currLine].txt = txt
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function changeTxtColor(color) {
    let currLine = gMeme.selectedLineIdx
    gMeme.lines[currLine].color = color
}

function setFontSize(value) {
    let currLine = gMeme.selectedLineIdx
    gMeme.lines[currLine].size += value
}

function addNewTextLine() {
    console.log('add new line')
    gMeme.lines.push(_createLine())
}

function _createLine() {

    return {
        txt: 'Add Text',
        font: 'Impact',
        size: 30,
        align: 'center',
        color: 'white',
        x: 190,
        y: 220
    }
}

function switchLine() {
    console.log(gMeme.selectedLineIdx)
    let newLine = gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) newLine = gMeme.selectedLineIdx = 0
}

function setFont(font) {
    let currLine = gMeme.selectedLineIdx
    gMeme.lines[currLine].font = font
}

function setAlign(align) {
    let currLine = gMeme.selectedLineIdx
    gMeme.lines[currLine].align = align

}


