$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 3000
  });

  var typed = new Typed('.typed', {
    strings: ['Software Engineer', 'Full-Stack Developer', 'Student'],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000
  });

  $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })

    $('.chart').easyPieChart({
            //your options goes here
        });

});
