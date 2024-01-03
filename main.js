const slides = document.querySelectorAll(".content")
const leftBtn = document.querySelector('.btn-left i')
const rightBtn = document.querySelector('.btn-right i')

let slideIndex = 1;

// CREATE SPAN FOR DOTS ON SLIDER
const dotContainer = document.querySelector('.dots-container')

slides.forEach( slide => {
	let newSpan = document.createElement('span')
	dotContainer.appendChild(newSpan)
})

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

// SHOW SLIDES AND DOTS BASED ON INDEX
function showSlides(n) {
	let dots = dotContainer.querySelectorAll("span")
	
    if (n > slides.length) {slideIndex = 1}    
	if (n < 1) { slideIndex = slides.length }
	
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active')  
	}
	
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active')
	}
	
	slides[slideIndex - 1].classList.add('active')
	dots[slideIndex - 1].classList.add('active')
}

rightBtn.addEventListener('click', (e) => {
	plusSlides(1)
})

leftBtn.addEventListener('click', (e) => {
	plusSlides(-1)
})