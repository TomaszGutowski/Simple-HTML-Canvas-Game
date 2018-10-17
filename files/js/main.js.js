$(document).ready(function(){

//functions call out////////////////////////////////////

progressBar()     //page loading progress bar at the top of website//
mobileMenu();     //mobile menu open-close in main-nav section//
pageSlide();      //sliding from menu to particular section on website//
goTop();          //function for go top button//
owlCarousel();    //image carousel in referenece section//   

////////////////////////////////////////////////////////    

//progress bar at the top of website//
    
function progressBar(){
    
    $("#progress").animate({
        width: "100%"
        }, 1200, function(){
        
        $("#progress-bar").slideToggle(900);
    });
   
};
    

//mobile menu open-close in main-nav section//
    
function mobileMenu(){
    
    $("#menu-text").find("p").on("click", function(){
        
       $(this).text($(this).text()== "Menu" ? "Zamknij":"Menu").toggleClass("animated bounceIn"); //Replacement of "Menu" paragraph text with "Zamknij" text//
    });
    
    $("#mobile-menu").on("click", function(){
        
        $("#main-nav").toggleClass("main-nav-expanded").animate(); //main-nav-expanded to be found in layout/header//
        $("main").toggleClass("about-section-margin"); //increase of margin in about section//
        $("#mobile-list").toggle().addClass("animated fadeInLeft"); //mobile list items shown/hide on click//
    });
};
    

//website sliding to particular section after menu item clicked//
function pageSlide(){ 
		
		$(".scroll").on("click", function(e){
			
			e.preventDefault();
			e.stopPropagation();
			
			$("body, html").animate({
				
				scrollTop: $(this.hash)
								.offset()
								.top
				
			}, 1000, "swing");
			
		});
	};
    
//go top button//
    
function goTop(){
    
    $("#go-top").on("click", function(){
				
			$("body, html").animate({scrollTop: 0}, 400, "linear"); //website animation to header section//
		});
	};
    
    
    $(window).on("scroll", function(){ //go up buttom showing up/ hiding durinh website scrolling//
				
			if($("body, html").scrollTop() >= 350){
				
					$("#go-top").removeClass("animated bounceOut").addClass("animated bounceIn");
					
			}if($("body, html").scrollTop() <= 349){	
				
					$("#go-top").addClass("animated bounceOut");	
			}
		});
                  

//image carousel in reference section//
    
function owlCarousel(){
    
 $(".owl-carousel").owlCarousel({
      
      autoplay: true,
      autoplayTimeout: 2000,
      items: 4,
      loop: true,
      dots: false,
      animateIn: true,
      slidespeed: 50
      
  });
  
};
    
//contact form code//
    
    $('#submit').on('click', function(){
        
        $('#contact-form').hide();
        $('#form-part').append('<br><br><br><h2>Dziękujemy za kontakt, odezwiemy się jak najszybciej.</h2>');
    })
    
});