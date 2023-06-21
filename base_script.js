window.onload = function() {

alert("It's still a work in process...\nBut hit OK to continue!");



//To add the value from content attibute of keyword meta-tag as img's src value

//...............................................

const imagesLocationMeta = document.querySelector('meta[name="keyword"]');

const imagesLocation = imagesLocationMeta.getAttribute("content");

const imagesContainer = document.getElementById("imgContainer");

const image = imagesContainer.querySelectorAll("img");

        

for(let i = 0; i < image.length; i++) {

    image[i].src = imagesLocation;

}

//...............................................



// To start the animation without reloading the page

//...............................................

const startBtn = document.getElementById("start");

const l1 = document.getElementsByClassName("l1");

const l2 = document.getElementsByClassName("l2");

const l3 = document.getElementsByClassName("l3");

const l4 = document.getElementsByClassName("l4");

const l5 = document.getElementsByClassName("l5");

const progress = document.getElementById("progress");



startBtn.addEventListener("click", function() {

    l1[0].classList.remove("l1Animation");

    for (let i = 0; i < l2.length; i++) {

        l2[i].classList.remove("l2Animation");

    }

    for (let i = 0; i < l3.length; i++) {

        l3[i].classList.remove("l3Animation");

    }

    for (let i = 0; i < l4.length; i++) {

        l4[i].classList.remove("l4Animation");

    }

    for (let i = 0; i < l5.length; i++) {

        l5[i].classList.remove("l5Animation");

    }

    progress.classList.remove("progress");

    setTimeout(()=> {

        l1[0].classList.add("l1Animation");

        for (let i = 0; i < l2.length; i++) {

            l2[i].classList.add("l2Animation");

        }

        for (let i = 0; i < l3.length; i++) {

            l3[i].classList.add("l3Animation");

        }

        for (let i = 0; i < l4.length; i++) {

            l4[i].classList.add("l4Animation");

        }

        for (let i = 0; i < l5.length; i++) {

            l5[i].classList.add("l5Animation");

        }

        progress.classList.add("progress");

    }, 50);

});

//...............................................



// To show menu

//...............................................

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function showMenu() {

    menu.classList.toggle("hideMenu");

    menu.classList.toggle("showMenu");


});

//...............................................



// To change theme

//...............................................

const themeBtn = document.getElementById("themeBtn");

const pageBody = document.querySelector("body");

themeBtn.addEventListener("click", function chgTheme() {

    pageBody.classList.toggle("wTheme");

});

//...............................................

// To hide the preloader when the image has loaded

//...............................................

let img = document.getElementById("image");

let preloader = document.querySelector(".preloader");

img.addEventListener("load", function() {

    preloader.style.display = "none";

});

img.addEventListener("error", function() {

    preloader.style.display = "none";

});

}
