      

//---mobile menu----//

   $(".burger").click(function(){
            
            $(".icon ").toggleClass("close");
        });
    const burger = document.querySelector('.burger');
     const navLinks = document.querySelector('.main-nav');
     const links = document.querySelectorAll(".main-nav li");
//------burger----//
     burger.addEventListener('click', () => {
         navLinks.classList.toggle("open");

     });





 

    
//---type.js---//
		
var typed = new Typed(".type", {
  strings: 
          ["Student.",
           " Freelancer.",
     	   "Web Designer.",
	       "Web Developer.",
			  ],
           typeSpeed: 40,
		   backSpeed: 40,
		   backDelay: 2000,
		   loop: true,
});
 $(".gallery-content").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
        enabled: true
      }
    });

//-----START scrolling manu-----//
	$(window).scroll(function(){
	  
	if($(document).scrollTop()>500){

	$('nav').addClass('sticky');

	}

	else{

	$('nav').removeClass('sticky');
	}
	});
//-----END scrolling manu-----//
  
  $(function(){

  $('.circlechart').circlechart();
});

  jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
//-----START SLIDER JS-----//
  $('.slider-area').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow:$('.prev'),
  prevArrow:$('.next'),
 //-----END SLIDER JS-----//   
});
//-----START ANIMATION JS-----//
AOS.init();
//-----START ANIMATION JS-----//

//-----START MOBILE MENU JS-----//

