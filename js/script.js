;(function($){
    'use strict';

/* ==========================================================================
       Preloader
    ========================================================================== */
    $(window).on('load', function() { // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({'overflow':'visible'});
    })
/* ==========================================================================
       Skrllr
    ========================================================================== */    var hasSkrollr = skrollr.init({
        forceHeight: false,
        easings: {
            easeOutBack: function (p, s) {
                s = 1.70158;
                p = p - 1;
                return (p * p * ((s + 1) * p + s) + 1);
            }
        },
        mobileCheck: function() {
            //hack - forces mobile version to be off
            return false;
        }
    });

    /* ==========================================================================
    
    ========================================================================== */
    var $vdoPop = $('.video');
    if($vdoPop.length > 0){
       $vdoPop.magnificPopup({
          type: 'iframe',
              iframe: {
                  markup: '<style>.mfp-iframe-holder .mfp-content {max-width: 900px;height:500px}</style>' +
                      '<div class="mfp-iframe-scaler" >' +
                      '<div class="mfp-close"></div>' +
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                      '</div></div>'
              }
          });
    }


    /* ==========================================================================
       Counter Up
    ========================================================================== */
    var $counter = $('.counter');
    if($counter.length > 0){
        $counter.counterUp({
            delay: 20,
            time: 5000
        });
    }

    /* ==========================================================================
        Parallax
    ========================================================================== */
    $.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });

    
    /* ==========================================================================
        Particle
    ========================================================================== */ 
    particlesJS('particles-js',
  
    {
    "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
    //    "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
        "value": "#e3e6ea"    
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 7,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "top-left",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);
    
/* ==========================================================================
    Screenshot carousel
========================================================================== */
    var $loop = $('.loop')
    if($loop.length > 0){
        $loop.owlCarousel({
        center: true,
        loop:true,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        margin:25,
        responsive:{
            300:{
                items:3,
                margin:10
            },
            768:{
                items:3,
                margin:60
            },
            991:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    }



/* ==========================================================================
    Testimonial Carousel
========================================================================== */
  
  var sync2 = $('#thumb'),
      sync1 = $('#quote'),
      duration = 300,
      thumbs = 4;

  sync1.on('click', '.owl-next', function () {
      sync2.trigger('next.owl.carousel')
  });
  sync1.on('click', '.owl-prev', function () {
      sync2.trigger('prev.owl.carousel')
  });

  sync1.owlCarousel({
      loop:true,
      items: 1,
      margin: 10,
      nav: false,
      dots: false,
      center:true,
  })
  .on('dragged.owl.carousel', function (e) {
          if (e.relatedTarget.state.direction == 'left') {
              sync2.trigger('next.owl.carousel')
          } else {
              sync2.trigger('prev.owl.carousel')
          }
  });


  sync2.owlCarousel({
      loop:true,
      items: 3,
      margin: 10,
      nav: false,
      dots: false,
      center:true,
  })
  .on('click', '.owl-item', function() {
      var i = $(this).index()-(thumbs+1);
      sync2.trigger('to.owl.carousel', [i, duration, true]);
      sync1.trigger('to.owl.carousel', [i, duration, true]);
  });

    /* ==========================================================================
        Wow
    ========================================================================== */
    new WOW().init();


    /* ==========================================================================
        Accordion
    ========================================================================== */

    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

    /* ==========================================================================
       Map
    ========================================================================== */
      var $mapholder = $('.map-holder');
      if ($mapholder.length > 0) {
        var map = new GMaps({
          div: '#gmap',
          lat: -12.043333,
          lng: -77.028333
        });

        map.addMarker({
        lat: -12.043333,
        lng: -77.028333,
        title: 'Lima',
        click: function(e) {
          alert('You clicked in this marker');
        }
      });

        $mapholder.on('click', function () {
          $(this).children().css("pointer-events", "auto");
        });

        $mapholder.on('mouseleave', function() {
          $(this).children().css("pointer-events", "none");
        });
    }
  /* ==========================================================================
      Mailchimp Form
    ========================================================================== */
    $('.subscribe form').submit(function(e) {
        e.preventDefault();
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'assets/subscribe.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.error-message').fadeIn('fast', function(){
                        $('.subscribe form').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                            $(this).removeClass('animated shake');
                        });
                    });
                }
                else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscribe form').hide();
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn('fast', function(){
                        $('.top-content').backstretch("resize");
                    });
                }
            }
        });
    });
    /* ==========================================================================
       Contact Form
    ========================================================================== */
    var $contactForm = $('#contact-form');
    $contactForm.validator();


    // when the form is submitted
    $contactForm.on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $contactForm.find('.messages').html(alertBox);
                        // empty the form
                        $contactForm[0].reset();
                    }
                }
            });
            return false;
        }
    })



})(jQuery); 

/* ==========================================================================
   Scroll 
    ========================================================================== */
(function () {
       $(document).on("scroll", onScroll);
 
        $('.menu li a[href^="#"], .demo a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
 
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
 
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
 
    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $('.menu a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('.menu li a').removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
    } 
}());
