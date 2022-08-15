let closeBtn = document.querySelector(".btn")
let closeNav = document.querySelector(".sitenav")
let closeImg = document.querySelector(".btn__x")
let closeSvg = document.querySelector(".btn__svg")
let closeDn = document.querySelector(".dn")

closeBtn.addEventListener('click', function () {
    closeNav.classList.add('sitenav--js');
    closeImg.classList.add("sitenav--js");
    closeSvg.classList.add("dn");
})


closeImg.addEventListener('click', function () {
    closeNav.classList.remove("sitenav--js");
    closeImg.classList.remove("sitenav--js");
    closeSvg.classList.remove("dn");
})

