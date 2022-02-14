$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$( document ).ready(function() {
    $( ".owl-next").html('<svg xmlns="http://www.w3.org/2000/svg" width="25.156" height="21.593" viewBox="0 0 25.156 21.593"><path id="next-arrow" d="M1026.233,365.514c.007-.157.02-.314.02-.471q0-7.13,0-14.259c0-.307.013-.614.011-.921a2.144,2.144,0,0,1,1.877-1.882,2.176,2.176,0,0,1,2.313,1.5,2.585,2.585,0,0,1,.089.861c.006,2.053,0,4.106,0,6.16q0,4.293,0,8.585c0,.14.017.279.034.532.251-.23.44-.389.614-.563,1.415-1.412,2.824-2.83,4.244-4.237a2.072,2.072,0,0,1,1.6-.668,2.18,2.18,0,0,1,2.13,2.4,2.439,2.439,0,0,1-.792,1.493q-2.875,2.866-5.743,5.738-1.321,1.324-2.62,2.67a2.3,2.3,0,0,1-2.389.565,2.164,2.164,0,0,1-.891-.6q-3.712-3.709-7.4-7.442c-.35-.352-.71-.7-1.052-1.055a2.179,2.179,0,1,1,3.176-2.974c1.4,1.389,2.784,2.788,4.178,4.179.156.156.331.294.5.441Z" transform="translate(-347.971 1039.174) rotate(-90)" fill="#d1deeb"/></svg>');
    $( ".owl-prev").html('<svg xmlns="http://www.w3.org/2000/svg" width="25.156" height="21.593" viewBox="0 0 25.156 21.593"><path id="prev-arrow" d="M8.652,7.613c.007.157.02.314.02.471q0,7.13,0,14.259c0,.307.013.614.011.921a2.144,2.144,0,0,0,1.877,1.882,2.176,2.176,0,0,0,2.313-1.5,2.585,2.585,0,0,0,.089-.861c.006-2.053,0-4.106,0-6.159q0-4.292,0-8.585c0-.14.017-.279.034-.532.251.23.44.389.614.563,1.415,1.412,2.824,2.83,4.244,4.237a2.072,2.072,0,0,0,1.6.668,2.18,2.18,0,0,0,2.13-2.4,2.439,2.439,0,0,0-.792-1.493q-2.875-2.866-5.743-5.738Q13.727,2.02,12.427.675A2.3,2.3,0,0,0,10.038.11a2.164,2.164,0,0,0-.891.6q-3.712,3.709-7.4,7.442c-.35.352-.71.7-1.052,1.055a2.158,2.158,0,0,0,.73,3.611,2.153,2.153,0,0,0,2.446-.637C5.268,10.794,6.655,9.4,8.049,8c.156-.156.331-.294.5-.441Z" transform="translate(0 21.593) rotate(-90)" fill="#d1deeb"/></svg>');});


    ///////////////// fixed menu on scroll for desktop
if ($(window)) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 40) {
          $('.app-navbar').addClass("fixed-top");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('.app-navbar').removeClass("fixed-top");
           // remove padding top from body
          $('body').css('padding-top', '0');
        }   
    });
  } // end if
  $(document).ready(function() {
    // Gets the video src from the data-src on each button
    var $videoSrc;
    $(".video-btn").click(function() {
      $videoSrc = $(this).attr("data-src");
      console.log("button clicked" + $videoSrc);
    });
  
    // when the modal is opened autoplay it
    $("#myModal").on("shown.bs.modal", function(e) {
      console.log("modal opened" + $videoSrc);
      // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1"
      );
    });
  
    // stop playing the youtube video when I close the modal
    $("#myModal").on("hide.bs.modal", function(e) {
      // a poor man's stop video
      $("#video").attr("src", $videoSrc);
    });
  
    // document ready
  });
  //toggel left sidebar
function openSideNav() {
	document.getElementById('vertical-nav-menu').classList.add('SideNav-Res');
	document.getElementById('overlay').style.display = 'block';
}

function closeNav() {
  document.getElementById('vertical-nav-menu').classList.remove('SideNav-Res');
	document.getElementById('overlay').style.display = 'none';
}
//Button go to top
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add active class to the current button (highlight it)
var nav = document.getElementById("myDIV");
var btns = nav.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
// Add active class to the current button (highlight it)
var navm = document.getElementById("myDIVM");
var btnsm = navm.getElementsByClassName("nav-link");
for (var i = 0; i < btnsm.length; i++) {
  btnsm[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}