const root = document.getElementById("root")
const closeBtn = document.getElementById("close")
const emojiCount = document.getElementById("emoji-count")
const emojiSelect = document.getElementById("emoji-input")
const myCanvas = document.getElementById("myCanvas")
const openBtn = document.getElementById("open")
const saveBtn = document.querySelector(".save")
const canvasRot = document.getElementById("canvas-rotation")
const emojiRot = document.getElementById("emoji-rotation")
const canvasZoom = document.getElementById("canvas-zoom")
const emojiSize = document.getElementById("emoji-size")
const columnsNum = document.getElementById("columns-number")
const rowsNum = document.getElementById("rows-number")
const topRange = document.getElementById("top")
const leftRange = document.getElementById("left")
const widthInput = document.getElementById("width")
const heightInput = document.getElementById("height")
const randomEmojis = document.getElementById("randomEmojis")


openBtn.addEventListener('click', function (e) {
    document.querySelector(".sidebar").style.display = "flex"
    document.querySelector("#myCanvas").style.gridColumn = "2/11"
    document.querySelector("#open").style.display = 'none'
})

closeBtn.addEventListener("click", function (e) {
    document.querySelector(".sidebar").style.display = "none"
    document.querySelector("#myCanvas").style.gridColumn = "1/11"
    document.querySelector("#open").style.display = 'block'
})

let characters = []
let characterGroups = []
let uniqueGroups = []
let smileysGroup = []
let peopleBody = []
let animals = []
let foodDrink = []
let travelPlaces = []
let activities = []
let objects = []
let symbols = []
let flags = []
let randomEmos = []
let emojisOptions = ""
let emojisHtml = ""
var mouse = {
    x: undefined, y: undefined
}


emojiCount.max = 2 * innerWidth

function getEmojis() {
    // await fetch("https://emoji-api.com/emojis?access_key=7682f6ed755bcb358aadab94433ee0aea997825c")
    fetch("./emojis.json")
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                switch (data[i].group) {
                    case "smileys-emotion":
                        smileysGroup.push(data[i].character)
                        break;
                    case "people-body":
                        peopleBody.push(data[i].character)
                        break;
                    case "food-drink":
                        foodDrink.push(data[i].character)
                        break;
                    case "travel-places":
                        travelPlaces.push(data[i].character)
                        break;
                    case "activities":
                        activities.push(data[i].character)
                        break;
                    case "objects":
                        objects.push(data[i].character)
                        break;
                    case "symbols":
                        symbols.push(data[i].character)
                        break;
                    case "flags":
                        flags.push(data[i].character)
                        break;
                    default:
                        break;
                }
            }

            characters = data.map(dat => {
                return dat.character
            })
            characterGroups = data.map(dat => {
                return dat.group
            })

            uniqueGroups = [...new Set(characterGroups)]

            for (let character of characters) {
                emojisOptions += `<option value="${character}">${character}</option>`
            }

            emojiSelect.innerHTML = emojisOptions
        })
}


getEmojis()





function drawEmojis(count, drawItem) {
    for (let i = 0; i < count; i++) {
        emojisHtml += `<div class="emoji" id="emoji-${i}">${drawItem}</div>`
    }

    document.querySelector("#myCanvas").innerHTML = emojisHtml
}

emojiSelect.addEventListener("input", function (e) {
    emojisHtml = ""
    drawEmojis(emojiCount.value, emojiSelect.value)
    document.querySelectorAll(".emoji").forEach(emoji => {
        emoji.style.rotate = `${emojiRot.value}deg`
    })
})

emojiCount.addEventListener('input', function (e) {
    emojisHtml = ""
    drawEmojis(emojiCount.value, emojiSelect.value)
    document.querySelectorAll(".emoji").forEach(emoji => {
        emoji.style.rotate = `${emojiRot.value}deg`
    })

})




randomEmojis.addEventListener("click", function () {
    emojisHtml = ""
    drawEmojis(emojiCount.value, "RANDOM")

})

canvasRot.addEventListener("input", function (e) {
    // emojisHtml = ""
    // drawEmojis(emojiCount.value, emojiSelect.value)
    // document.querySelectorAll(".emoji").forEach(emoji => {
    //     emoji.style.rotate = `${emojiRot.value}deg`
    // })
    myCanvas.style.transform = `rotate(${canvasRot.value}deg)`
})

canvasZoom.addEventListener("input", function (e) {
    // emojisHtml = ""
    // drawEmojis(emojiCount.value, emojiSelect.value)
    myCanvas.style.scale = `${canvasZoom.value}`
    // document.querySelectorAll(".emoji").forEach(emoji => {
    //     emoji.style.rotate = `${emojiRot.value}deg`
    // })
})


emojiRot.addEventListener("input", function (e) {
    // emojisHtml = ""
    // drawEmojis(emojiCount.value, emojiSelect.value)
    document.querySelectorAll(".emoji").forEach(emoji => {
        emoji.style.rotate = `${emojiRot.value}deg`
    })

})

emojiSize.addEventListener("input", function (e) {
    // emojisHtml = ""
    // drawEmojis(emojiCount.value, emojiSelect.value)
    myCanvas.style.fontSize = `${emojiSize.value}px`
    // document.querySelectorAll(".emoji").forEach(emoji => {
    //     emoji.style.rotate = `${emojiRot.value}deg`
    // })
})


topRange.addEventListener("input", function () {
    // emojisHtml = ""
    // drawEmojis(emojiCount.value, emojiSelect.value)
    myCanvas.style.top = `${topRange.value}px`
    // document.querySelectorAll(".emoji").forEach(emoji => {
    //     emoji.style.rotate = `${emojiRot.value}deg`
    // })
})


leftRange.addEventListener("input", function () {
    // emojisHtml = ""
    // drawEmojis(emojiCount.value, emojiSelect.value)
    myCanvas.style.left = `${leftRange.value}px`
    // document.querySelectorAll(".emoji").forEach(emoji => {
    //     emoji.style.rotate = `${emojiRot.value}deg`
    // })
})

widthInput.addEventListener("input", function () {
    // emojisHtml = ""
    // drawEmojis(emojiCount.value, emojiSelect.value)
    myCanvas.style.width = `${widthInput.value}px`
    // document.querySelectorAll(".emoji").forEach(emoji => {
    //     emoji.style.rotate = `${emojiRot.value}deg`
    // })
})

heightInput.addEventListener("input", function () {
    // emojisHtml = ""
    // drawEmojis(emojiCount.value, emojiSelect.value)
    myCanvas.style.width = `${heightInput.value}px`
    // document.querySelectorAll(".emoji").forEach(emoji => {
    //     emoji.style.rotate = `${emojiRot.value}deg`
    // })
})

document.addEventListener("dblclick", e => {
    if (e.target.id === "width") {
        e.target.value = innerWidth
    }
    if (e.target.id === "height") {
        e.target.value = innerHeight
    }
})

document.querySelectorAll(".measure").forEach(measure => {
    measure.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowUp":
                measure.value++
                break;
            case "ArrowDown":
                measure.value--
                break;
        }
    })
})

window.onmousemove = (e) => {
    mouse.x = e.x
    mouse.y = e.y

    if (mouse.x === 0) {
        document.querySelector(".sidebar").style.transform = "translateX(0%)"
        // document.querySelector(".sidebar").style.display = "flex"
    } else if (mouse.x > 220) {
        document.querySelector(".sidebar").style.transform = "translateX(-100%)"
        // document.querySelector(".sidebar").style.display = "none"
    }
}





