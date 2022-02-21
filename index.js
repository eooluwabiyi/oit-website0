$(document).ready(function(){
  $("#banner-area .owl-carousel").owlCarousel({
    dots: true,
    items: 1
  })
});

function openNav(){
  document.getElementById('SideNav').style.width='400px';
}

function closeNav(){
  document.getElementById('SideNav').style.width='0';
}


var img = document.getElementById('showcaseImg').firstChild;
img.onload = function() {
    if(img.height > img.width) {
        img.height = '100%';
        img.width = 'auto';
    }
};

});

  //top sale owl carousel
//   $("#top-sale.owl-carousel").owlCarousel({
//     loop: true,
//     nav: true,
//     dots: false,
//     responsive:{
//       0:{
//         items: 1
//       }
//       600:{
//         items:3
//       }
//       1000:{
//         items:3
//       }
//     }
//   })
// });

/*loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1500,
    autopplayHoverPause:true*/