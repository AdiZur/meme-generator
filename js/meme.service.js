'use ctrict'
// let gImg =  [{id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']}];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 30,
            align: 'center',
            color: 'red'
        }
    ]
}
function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[0].txt = txt
}

function setMeme(imgId) {
    gMeme.selectedImgId = imgId
}
