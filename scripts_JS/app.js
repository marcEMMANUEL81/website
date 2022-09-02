const bloc = document.querySelectorAll(".navlist__item")
const barre = document.querySelectorAll(".navlist__forme")
const icon = document.querySelectorAll(".icon")
const para = document.querySelectorAll(".para")
const barre_courte = document.querySelector(".part3__barre__courte")
const titre = document.querySelectorAll(".title")
const toogle__animation = document.querySelectorAll(".icon__animate")
const show__popup = document.querySelector(".show__popup")
const my__popup = document.querySelector(".modal__notifications")
const cercle__button = document.querySelectorAll(".rond1, .rond2, .rond3, .rond4, .rond5")
const button__color = document.querySelectorAll(".cercle1, .cercle2, .cercle3, .cercle4, .cercle5")
const main = document.querySelectorAll(".cadre1, .cadre2, .cadre3")
const theme__button = document.querySelector(".theme")
const custom__page = document.querySelector(".customize")
const close__button = document.querySelector(".close")
const messageBoxButton = document.querySelector(".messageBoxButton")
const container2 = document.querySelector(".container2")
const text__transition = document.querySelectorAll("p")

barre[0].classList.add("width1")
barre_courte.classList.add("move0")
button__color[0].classList.add("border_color")
cercle__button[2].classList.add("color__rond3")

bloc.forEach(element => {
    element.addEventListener("click", function(){
        const index = Array.from(bloc).findIndex(el => el === element)

        bloc.forEach(el => el.classList.remove("color__item"))
        this.classList.add("color__item")

        if(index !== 0 && index !== 7){
            barre.forEach(bar => bar.classList.remove("width1"))
            barre.forEach(bar => bar.classList.remove("width2"))
            barre.forEach(bar => bar.classList.remove("width3"))
            barre[index].classList.add("width2")
        }

        if (index == 0){
            barre[0].classList.add("width1")
            barre.forEach(bar => bar.classList.remove("width2", "width3"))
        }

        if (index == 7){
            barre[7].classList.add("width3")
            barre.forEach(bar => bar.classList.remove("width2", "width1"))
        }

        icon.forEach(bar => bar.classList.remove("color__p"))
        icon[index].classList.add("color__p")

        para.forEach(bar => bar.classList.remove("color__p"))
        para[index].classList.add("color__p")
    })
})


titre.forEach(element => {
    element.addEventListener("click", function(){
        barre_courte.classList.remove("move0", "move1", "move2")
        const ind = Array.from(titre).findIndex(el => el === element)
        barre_courte.classList.add(`move${ind}`)
    })
})

toogle__animation.forEach(element => {
    element.addEventListener("click", function(){
        this.classList.toggle("animate")
    })
})

show__popup.addEventListener("click",function(){
    my__popup.classList.toggle("visible")
})

cercle__button.forEach(element => {
    element.addEventListener("click",function(){
        cercle__button.forEach(el => el.classList.remove("color__rond1", "color__rond2", "color__rond3", "color__rond4", "color__rond5"))
        const mybuttonindex = Array.from(cercle__button).findIndex(el => el === element)
        this.classList.add(`color__rond${mybuttonindex + 1}`)
    })
})

button__color.forEach(element => {
    element.addEventListener("click",function(){
        button__color.forEach(el => el.classList.remove("border_color"))
        const mycolorindex = Array.from(button__color).findIndex(el => el === element)
        this.classList.add("border_color")
    })
})

theme__button.addEventListener("click", function(){
    custom__page.classList.add("customize__visible")
})

close__button.addEventListener("click", function(){
    custom__page.classList.remove("customize__visible")
})

messageBoxButton.addEventListener("click", function(){
    container2.classList.add("shadow");
    setTimeout(function(){
        container2.classList.remove("shadow");
    }, 3000);
})

// change font size

let root = document.querySelector(':root')
let gsc = getComputedStyle(root)
let body__color = gsc.getPropertyValue('--body-color')
let second__color = gsc.getPropertyValue('--secondary-color')
let text__color = gsc.getPropertyValue('--text-color')
let second__text__color = gsc.getPropertyValue('--text-color-secondary')
let page__font__size = gsc.getPropertyValue('--body-font-size')
let main__color = gsc.getPropertyValue('--color-primary')


cercle__button.forEach(element => {
    element.addEventListener("click", function(){
        const ind = Array.from(cercle__button).findIndex(el => el === element);
        if(ind === 0){
            root.style.setProperty('--body-font-size', '12px');
        }
        if(ind === 1){
            root.style.setProperty('--body-font-size', '14px')
        }
        if(ind === 2){
            root.style.setProperty('--body-font-size', '16px')
        }
        if(ind === 3){
            root.style.setProperty('--body-font-size', '18px')
        }
        if(ind === 4){
            root.style.setProperty('--body-font-size', '20px')
        }
    })
})

button__color.forEach(element => {
    element.addEventListener("click", function(){
        const ind = Array.from(button__color).findIndex(el => el === element);
        if(ind === 0){
            root.style.setProperty('--color-primary', '#6A4AE1');
        }
        if(ind === 1){
            root.style.setProperty('--color-primary', '#e4c747')
        }
        if(ind === 2){
            root.style.setProperty('--color-primary', '#dd4973')
        }
        if(ind === 3){
            root.style.setProperty('--color-primary', '#5ae142')
        }
        if(ind === 4){
            root.style.setProperty('--color-primary', '#5ea4e5')
        }
    })
})

main.forEach(element => {
    element.addEventListener("click", function(){
        main.forEach(el => el.classList.remove("cadre__border"))
        const ind = Array.from(main).findIndex(el => el === element);
        if(ind === 0){
            this.classList.add("cadre__border")
            root.style.setProperty('--body-color', '#e9e6ec');
            root.style.setProperty('--secondary-color', '#fff');
            root.style.setProperty('--text-color', '#202020');
            root.style.setProperty('--text-color-secondary', '#989898');
            root.style.setProperty('--color-primary', '#6A4AE1');
        }
        if(ind === 1){
            this.classList.add("cadre__border")
            root.style.setProperty('--body-color', '#353144');
            root.style.setProperty('--secondary-color', '#3D394F');
            root.style.setProperty('--text-color', '#fff');
            root.style.setProperty('--text-color-secondary', '#c3bbdc');
            root.style.setProperty('--color-primary', '#6A4AE1');
        }
        if(ind === 2){
            this.classList.add("cadre__border")
            root.style.setProperty('--body-color', '#1E1E1E');
            root.style.setProperty('--secondary-color', '#2a2a2a');
            root.style.setProperty('--text-color', '#fff');
            root.style.setProperty('--text-color-secondary', '#a4a4a4');
            root.style.setProperty('--color-primary', '#6A4AE1');
        }
    })
})

text__transition.forEach(element => {
    element.classList.add("text__transition")
})