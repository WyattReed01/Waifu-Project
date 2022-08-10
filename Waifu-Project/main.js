const container = document.querySelector('#container')
const waifuImg = document.querySelector('#waifuImg')

randomBtn()
maidBtn()
uniformBtn()

function randomBtn(){
    const btn = document.getElementById('randombtn')
    btn.addEventListener('click', getWaifu)
}

function maidBtn(){
    const maidbtn = document.getElementById('maidbtn')
    maidbtn.addEventListener('click', garrettMaid)
}

function uniformBtn(){
    const uniformbtn = document.getElementById('uniformbtn')
    uniformbtn.addEventListener('click', uniformMaid)
}

function uniformMaid(){
    $.get(`https://api.waifu.im/random/?is_nsfw=false&selected_tags=uniform&excluded_tags=oppai&gif=false&full=false`, getObj)
}

function garrettMaid(){
    $.get(`https://api.waifu.im/random/?is_nsfw=false&selected_tags=maid&excluded_tags=oppai&gif=false&full=false`, getObj)
}

function getWaifu(){
    $.get(`https://api.waifu.im/random/?is_nsfw=false&excluded_tags=oppai&gif=false&full=false`, getObj)
}

function createImgDiv(obj){
    const photo = document.getElementById("photo")
    const imageDiv = document.querySelector('#waifuPhoto')
    photo.setAttribute('src', obj.url)
    imageDiv.textContent = (`Description: ${obj.tags[0].description}`)
    pinToWaifu(photo)
    pinToWaifu(imageDiv)
}


function getObj(data) {
    for (let obj in data) {
        let current = data[obj]
        console.log(current[0])
        createImgDiv(current[0])
    }
    console.log(data)
}

function pinToWaifu(htmlNodes){
    waifuImg.appendChild(htmlNodes);
}