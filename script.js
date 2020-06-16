// set slide index
let slideIndex = 0;
// define all slides
let slides = document.querySelectorAll(".slide");
// display current slide
function displaySlide(index){
    // hide other slides
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}