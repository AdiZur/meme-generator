'use ctrict'
// let gImg =  [{id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']}];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'TEXT COMES HERE',
            font: 'Impact',
            size: 25,
            align: 'center',
            color: 'white',
            strokeStyle: 'black',
            x: 175,
            y: 50,
            isDrag: false
        },
        {
            txt: 'TEXT COMES HERE',
            font: "Impact",
            size: 25,
            align: 'center',
            color: 'white',
            strokeStyle: 'black',
            x: 175,
            y: 330,
            isDrag: false
        }

    ]
}
function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    let currLine = gMeme.selectedLineIdx
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
        txt: 'TEXT COMES HERE',
        font: 'Impact',
        size: 25,
        align: 'center',
        color: 'white',
        strokeStyle: 'black',
        x: 175,
        y: 175,
        isDrag: false
    }
}

function switchLine() {
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

function deleteLine() {
    let currLine = gMeme.selectedLineIdx
    gMeme.lines.splice(currLine, 1)
}

function checkAlignFocus(val) {
    if (!val) return
    let currLine = gMeme.selectedLineIdx
    let txt = gMeme.lines[currLine].txt
    let x = gElCanvas.width / 2
    let y = gMeme.lines[currLine].y
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
    if (gMeme.lines[currLine].y < 50 && value < 0) return
    else if (gMeme.lines[currLine].y > 320 && value > 0) return
    gMeme.lines[currLine].y += value
}

function changeStrokeStyle(color) {
    let currLine = gMeme.selectedLineIdx
    gMeme.lines[currLine].strokeStyle = color
}

function resetMeme() {
    gMeme.lines.forEach(line => {
        deleteLine()
    });
    gMeme = {
        selectedImgId: 1,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'TEXT COMES HERE',
                font: 'Impact',
                size: 30,
                align: 'center',
                color: 'white',
                strokeStyle: 'black',
                x: 175,
                y: 50,
                isDrag: false
            },
            {
                txt: 'TEXT COMES HERE',
                font: "Impact",
                size: 30,
                align: 'center',
                color: 'white',
                strokeStyle: 'black',
                x: 175,
                y: 330,
                isDrag: false
            }

        ]
    }
    checkAlignFocus(0)
}