window.addEventListener('load', function() {
    
   let slider = new Glider(document.querySelector('.glider'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.prev',
          next: '.next'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 650,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    itemWidth: 150,
                    duration: 0.25
                }
                },{
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    itemWidth: 150,
                    // duration: 0.25
                }
                }
            ],
    });


    let slider2 = new Glider(document.querySelector(".container--comments"),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
    }) 


    // complemento para el autoplay del glider js
    function sliderAuto(slider, miliseconds) {
        slider.isLastSlide = function() {
        return slider.page >= slider.dots.childElementCount - 1;
        }
    
        var slide = function() {
        slider.slideTimeout = setTimeout(function() {
            function slideTo() {
            return slider.isLastSlide() ? 0 : slider.page + 1.1;
            }
    
            slider.scrollItem(slideTo(), true);
        }, miliseconds);
        }
    
        slider.ele.addEventListener('glider-animated', function(event) {
        window.clearInterval(slider.slideTimeout);
        slide();
        });
    
        slide();
    } 

    sliderAuto(slider2,6000);

});