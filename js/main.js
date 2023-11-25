$(document).ready(function(){
    $(".banner_slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ["previous", "next"],
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });
  });

//   product_list_slider

$(document).ready(function(){
    $(".product_list_slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ["previous", "next"],
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });
  });
$(document).ready(function(){
    $(".best_product_slider").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        margin:30,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ["previous", "next"],
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
          0: {
            margin: 15,
            items: 1,
            nav: false
          },
          576: {
            margin: 15,
            items: 2,
            nav: false
          },
          768: {
            margin: 30,
            items: 3,
            nav: true
          },
          991: {
            margin: 30,
            items: 4,
            nav: true
          }
        }
    });
  });

//   product_list_slider

  //------- makeTimer js --------//  
  function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("27 Sep 2019 12:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    $("#days").html("<span>Days</span>" + days);
    $("#hours").html("<span>Hours</span>" + hours);
    $("#minutes").html("<span>Minutes</span>" + minutes);
    $("#seconds").html("<span>Seconds</span>" + seconds);

  }