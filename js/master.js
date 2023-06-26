////////////////////////////////////gear animation/////////////////////////////////////////////



let settingBox = document.querySelector(".settings-box");
let SBtn = document.querySelector(".gear")
SBtn.onclick = () => {
        SBtn.classList.toggle("fa-spin")
        settingBox.classList.toggle("show")
        if(!settingBox.classList.contains("show")){
                settingBox.style.boxShadow = "none"
        }else{
                let Shadow = "12px 0px 40px 0px rgba(102,102,102,1)"
                settingBox.style.boxShadow = `${Shadow}`
        }
}


/////////////////////////////////////////THE END/////////////////////////////////////////////


////////////////////////////////////bullets and heading/////////////////////////////////////////////

let sections = document.querySelectorAll("section")

let navBullets = document.querySelector(".navBullets")

let bulletsOption = document.querySelectorAll(".bulletsOption span")

let bulletsLocalItem = localStorage.getItem("bulletsOption")

if(bulletsLocalItem !== null){
        bulletsOption.forEach(span=>{
                span.classList.remove("active")
        })

        if(bulletsLocalItem === 'block'){
                navBullets.style.display = "block"
                document.querySelector(".bulletsOption .yes").classList.add("active")
        }else{
                navBullets.style.display = "none"
                document.querySelector(".bulletsOption .no").classList.add("active")
        }
}

for(let i = 0; i < sections.length ; i++){
        let bullet = document.createElement("div")
        bullet.setAttribute("class","bullet")
        navBullets.appendChild(bullet)
        
}

let bullets = document.querySelectorAll(".bullet")
bullets.forEach((bullet)=>{
        let tooltip= document.createElement("div")
        tooltip.setAttribute("class","tooltip")
        bullet.appendChild(tooltip)
})

let links = document.querySelector(".links") 
for(let i=0; i <sections.length; i++){
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.innerHTML =`${sections[i].className}`
        a.style.textTransform = "capitalize"
        li.appendChild(a)
        links.appendChild(li)
}

let allLinks = document.querySelectorAll(".links li a")

let tooltips = document.querySelectorAll(".bullet .tooltip")

for(let i=0; i <sections.length; i++){
                tooltips[i].innerHTML = `${sections[i].className}`
                bullets[i].dataset.section = `.${sections[i].className}`
                allLinks[i].dataset.section = `.${sections[i].className}`
}

bulletsOption.forEach(span=>{
        span.addEventListener("click",(e)=>{
                if(span.dataset.display === "show"){
                        navBullets.style.display = "block"
                        localStorage.setItem("bulletsOption","block")
                }else{
                        navBullets.style.display = "none"
                        localStorage.setItem("bulletsOption","none")
                }
                handleActive(bulletsOption,e)
        })
} )

let bar =document.querySelector("#bars")

bar.onclick = () =>{
        document.querySelector(".header i span").classList.toggle("menuActive")
        links.classList.toggle("open")
}

document.addEventListener("click",(e)=>{
        if(e.target !== bar && e.target !== links){
                if(links.classList.contains("open")){
                        document.querySelector(".header i span").classList.toggle("menuActive")
                        links.classList.toggle("open")
                }
        }
})

links.onclick = (e) =>{
        e.stopPropagation()
}

scrollPage(allLinks)
scrollPage(bullets)
/////////////////////////////////////////THE END///////////////////////////////////////////////


////////////////////////////////////landing page/////////////////////////////////////////////


//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//var for this part//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//

let imgArry = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]
let landingpage = document.querySelector(".landing-page");
let pickImg = document.querySelectorAll(".settings-box .settings-continar .imageBox img")
let backgroundImageLocalItem = localStorage.getItem("backgroundNamber")
//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//


randomizeImgs = () => {
        if (backgroundOption === true) {
                backgroundInterval = setInterval(() => {
                        let randomNumber = Math.floor(Math.random() * imgArry.length + 1)
                        landingpage.style.backgroundImage = `url("image/0${randomNumber}.jpg")`
                        localStorage.setItem("backgroundNamber", `0${randomNumber}`)
                }, 1000)
        }
}
pickImg.forEach(e =>{
        e.addEventListener("click", e =>{
                imgN = e.target.dataset.img
                localStorage.setItem("backgroundNamber", imgN)
                landingpage.style.backgroundImage = `url("image/${imgN}.jpg")`
        })
})

if (backgroundImageLocalItem !== null){
        landingpage.style.backgroundImage = `url("image/${localStorage.getItem("backgroundNamber")}.jpg")`
}



/////////////////////////////////////////THE END/////////////////////////////////////////////


////////////////////////randomBackground and option to turn this or no///////////////////////


//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//var for this part//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//

let optionBackground = document.querySelector(".settings-box .settings-continar .imageBox")
let backgroundLocalItam = localStorage.getItem("background-option")
let backgroundOption = true;
let backgroundInterval;
const randomBackEl = document.querySelectorAll(".random-Backgrounds span")

//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//

if (backgroundLocalItam !== null) {
        if (backgroundLocalItam === 'true') {
                backgroundOption = true;
        } else {
                backgroundOption = false;
        }
        randomBackEl.forEach(
                Element => {
                        Element.classList.remove("active")
                }
        )
        if (backgroundLocalItam === 'true') {
                document.querySelector(".yes").classList.add("active")
        } else {
                document.querySelector(".no").classList.add("active")
                optionBackground.classList.add("show")
        }
}

randomBackEl.forEach((span) => {
        span.addEventListener("click", (e) => {
                randomBackEl.forEach(
                        (span) => {
                                span.classList.remove("active")
                        }
                        )
                        e.target.classList.add("active")
                        if (e.target.dataset.background === "yes") {
                                backgroundOption = true
                                localStorage.setItem("background-option", true)
                                randomizeImgs()
                                optionBackground.classList.remove("height")
                                optionBackground.classList.remove("show")
                        } else {
                                backgroundOption = false;
                                clearInterval(backgroundInterval)
                                localStorage.setItem("background-option", false)
                                optionBackground.classList.add("show")
                }
        })
})

randomizeImgs()


/////////////////////////////////////////THE END/////////////////////////////////////////////


////////////////////////set main color and create color to use in web///////////////////////


//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//var for this part//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//

let mainColors = localStorage.getItem("color-option")
let lastChild = document.querySelector(".lastChild")
let heightDiv = document.querySelector("#height")
let colorPick = document.querySelector(".colorPick")
const colorList = document.querySelectorAll(".color-list li")
let values = document.querySelectorAll("#value")
let redValue = localStorage.getItem("red")
let blueValue = localStorage.getItem("blue")
let greenValue = localStorage.getItem("green")
let inputValue = document.querySelectorAll(".colorPick input")
let colorsValues = [redValue, greenValue, blueValue]

//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//^-^//

function setDataColor() {
        document.documentElement.style.setProperty('--colorPick', localStorage.getItem('colorPick'))
        lastChild.setAttribute("data-color", localStorage.getItem("color-option"))
}

if (mainColors !== null) {
        setDataColor()
        document.documentElement.style.setProperty('--main-color', localStorage.getItem('color-option'))
        colorList.forEach(
                (li) => {
                        li.classList.remove("active")
                }
        )
        document.querySelector(`[data-color="${localStorage.getItem('color-option')}"]`).classList.add('active')
}

if (redValue !== null || greenValue !== null || blueValue !== null){
        inputValue.forEach((e,i)=>{
                e.setAttribute("value", `${colorsValues[i]}`)
                i++
        }
        )
        values.forEach((e,i) => {
                e.innerHTML = colorsValues[i]
                i++
        })
}

colorList.forEach((li) => {
        li.addEventListener("click", (e) => {
                document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
                localStorage.setItem("color-option", e.target.dataset.color);
                if (e.currentTarget.lastChild) {
                        let red = document.querySelector(".red").value;
                        let green = document.querySelector(".green").value;
                        let blue = document.querySelector(".blue").value;
                        localStorage.setItem("red", red)
                        localStorage.setItem("green", green)
                        localStorage.setItem("blue", blue)
                        let color = `rgb(${red},${green},${blue})`;
                        localStorage.setItem("color-option", color)
                        document.documentElement.style.setProperty('--main-color', color)
                } else {
                        localStorage.setItem("color-option", e.target.dataset.color);
                }
                handleActive(colorList,e)
        })
})


lastChild.addEventListener("click", () => {
        if (lastChild.classList.contains("active")) {
                colorPick.classList.add("show")
                heightDiv.classList.add("height")
        }
})

function colors() {
        let red = document.querySelector(".red").value;
        let green = document.querySelector(".green").value;
        let blue = document.querySelector(".blue").value;
        let color = `rgb(${red},${green},${blue})`;
        localStorage.setItem("colorPick", color);
        document.documentElement.style.setProperty("--colorPick", `rgb(${red}, ${green} , ${blue})`)
        document.documentElement.style.setProperty('--main-color', localStorage.getItem("colorPick"))
        let rgb = [red,green,blue]
        values.forEach((e,i) => {
                e.innerHTML = rgb[i]
                i++
        })
}
function remove() {
        if (lastChild.classList.contains("active")) {
                colorPick.classList.remove("show")
                heightDiv.classList.remove("height")
        }
}




/////////////////////////////////////THE END/////////////////////////////////////////////


///////////////////////////////Skillls&&windowOBJ//////////////////////////////////////////


let ourSkills = document.querySelector(".skills")

window.onscroll = function () {
        let topSkills = ourSkills.getBoundingClientRect().top
        let allSkills = document.querySelectorAll(".skillBox .skillProgress span")
        if (topSkills <= 0) {
                allSkills.forEach(skill => {
                        // skill.style.width = skill.dataset.progress
                        anime({
                                targets: skill,
                                width: `${skill.dataset.progress}`,
                                easing: 'easeOutSine',
                                direction: 'alternate',
                                loop: false
                        });
                })
        }


}






/////////////////////////////////////////THE END/////////////////////////////////////////////


////////////////////////////////////////Gallery/////////////////////////////////////////////

let ourGallery = document.querySelectorAll(".gallery .imageBox img")

ourGallery.forEach(img => {
    img.addEventListener("click", e => {
                let overlay = document.createElement("div")
                overlay.className = "popup-overlay"
                document.body.appendChild(overlay)
                let popupBox = document.createElement("div")
                popupBox.className = "poupBox"
                if (img.alt !== null) {
                    let imgHeading = document.createElement("h3")
                    let headingText = document.createTextNode(img.alt)
                        imgHeading.appendChild(headingText)
                        popupBox.appendChild(imgHeading)
                    }
                    let popupImg = document.createElement("img")
                    popupImg.src = img.src
                    popupBox.appendChild(popupImg)
                    document.body.appendChild(popupBox)
                    let closeButton = document.createElement("span")
                    let closeButtonText = document.createTextNode("X")
                    closeButton.appendChild(closeButtonText)
                    closeButton.className = "closeButton"
                    popupBox.appendChild(closeButton)
                })
            })

            document.addEventListener("click", (e) => {
        if (e.target.className == "closeButton") {
            e.target.parentNode.remove()
                document.querySelector(".popup-overlay").remove()
            }
        })

        
        ////////////////////////////////////////Testmonials/////////////////////////////////////////////

        /////////////////////////////////////////THE END/////////////////////////////////////////////


        ////////////////////////////////////////local function/////////////////////////////////////////////
        
        function handleActive(elements,ev){elements.forEach(
        (ele) => {
                ele.classList.remove("active")
        }
)
ev.currentTarget.classList.add("active")}

function scrollPage(elements){
        elements.forEach((ele)=>{
                ele.addEventListener("click",(e)=>{
                        e.preventDefault()
                        document.querySelector(`${e.target.dataset.section}`).scrollIntoView({
                                behavior: "smooth"
                        })
                })
        })
}

/////////////////////////////////////////THE END///////////////////////////////////////////////////


////////////////////////////////////////Other/////////////////////////////////////////////


document.querySelector(".resetOption").onclick = () => {

        localStorage.clear()
        window.location.reload()
}


/////////////////////////////////////////THE END///////////////////////////////////////////////////
