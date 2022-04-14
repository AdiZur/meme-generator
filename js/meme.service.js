'use ctrict'
// let gImg =  [{id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']}];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'TEXT COMES HERE',
            font: 'Impact',
            size: 30,
            align: 'center',
            color: 'white',
            x: 200,
            y: 57,
            isDrag: false
        },
        {
            txt: 'TEXT COMES HERE',
            font: "Impact",
            size: 30,
            align: 'center',
            color: 'white',
            x: 200,
            y: 370,
            isDrag: false
        }

    ]
}
function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    // if (!lines[currLine].txt) return
    console.log('selectedLineIdx', gMeme.selectedLineIdx)
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
    gMeme.lines.push(_createLine())
}

function _createLine() {
    gMeme.selectedLineIdx = gMeme.lines.length

    return {
        txt: 'Add Text',
        font: 'Impact',
        size: 30,
        align: 'center',
        color: 'white',
        x: 200,
        y: 220,
        isDrag: false
    }
}

function switchLine() {
    console.log(gMeme.selectedLineIdx)
    let newLine = gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx >= gMeme.lines.length) newLine = gMeme.selectedLineIdx = 0
    console.log(newLine)
    // return newLine
}

function setFont(font) {
    let currLine = gMeme.selectedLineIdx
    gMeme.lines[currLine].font = font
}

function setAlign(align) {
    let currLine = gMeme.selectedLineIdx
    log(align)
    gMeme.lines[currLine].align = align

}

function deleteLine() {
    console.log(gMeme.lines)
    let currLine = gMeme.selectedLineIdx
    gMeme.lines.splice(currLine, 1)
    console.log(gMeme.lines)
}

function checkAlignFocus() {
    let currLine = gMeme.selectedLineIdx
    console.log(currLine)
    let txt = gMeme.lines[currLine].txt
    console.log(txt)
    let x = gElCanvas.width / 2
    let y = gMeme.lines[currLine].y
    console.log('x', x, 'y', y)
    console.log(gMeme.lines[currLine].align)
    switch (gMeme.lines[currLine].align) {
        case 'center':
            drawRect(x - gCtx.measureText(txt).width / 2, y - parseInt(gCtx.font) * 1.5, gCtx.measureText(txt).width, parseInt(gCtx.font) * 2)
            break;
        case 'left':
            drawRect(x, y - parseInt(gCtx.font) * 1.5, gCtx.measureText(txt).width, parseInt(gCtx.font) * 2)
            break;
        case 'right':
            drawRect(x - gCtx.measureText(txt).width, y - parseInt(gCtx.font) * 1.5, gCtx.measureText(txt).width, parseInt(gCtx.font) * 2)
            break;
    }
}


function moveLine(value) {
    let currLine = gMeme.selectedLineIdx
    console.log(value)
    console.log('gMeme[currLine].line', gMeme.lines[currLine].y)
    if (gMeme.lines[currLine].y < 60 && value < 0) return
    else if (gMeme.lines[currLine].y > 370 && value > 0) return
    gMeme.lines[currLine].y += value
}

