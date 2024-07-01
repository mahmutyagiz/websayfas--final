document.addEventListener('DOMContentLoaded', function () {
    let index = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const carouselSlides = document.querySelector('.carousel-slides');
        carouselSlides.style.transform = `translateX(${-index * 100}%)`;
    }

    document.querySelector('.carousel-next').addEventListener('click', function () {
        index = (index + 1) % totalSlides;
        showSlide(index);
    });

    document.querySelector('.carousel-prev').addEventListener('click', function () {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide(index);
    });

    showSlide(index); 
});
$(document).ready(function(){
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = $(".slide");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }

    $(".prev").click(function() {
        plusSlides(-1);
    });

    $(".next").click(function() {
        plusSlides(1);
    });
});
