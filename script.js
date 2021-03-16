const slider = document.querySelector(".works__slider");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const indicatorParent = document.querySelector(".works__controller ul");
const menuBtn = document.querySelector(".menu-btn");
const navUL = document.querySelector(".nav__navigation");


let sectionIndex = 0;

document.querySelectorAll(".works__controller li").forEach((indicator, idx)=>{
    indicator.addEventListener('click', () => {
        sectionIndex = idx;
        document.querySelector('.works__controller .selected').classList.remove('selected');
        slider.style.transform = `translate(${(idx) * (-33.3333)}%)`;
        indicator.classList.add('selected')
    })
})

rightArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 0;
    document.querySelector('.works__controller .selected').classList.remove('selected');
    indicatorParent.children[sectionIndex].classList.add('selected');
    slider.style.transform = `translate(${(sectionIndex) * (-33.3333)}%)`;
})

leftArrow.addEventListener('click', () => {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 2;
    document.querySelector('.works__controller .selected').classList.remove('selected');
    indicatorParent.children[sectionIndex].classList.add('selected');
    slider.style.transform = `translate(${(sectionIndex) * (-33.3333)}%)`;
})

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('open');
    navUL.classList.toggle('show');
})