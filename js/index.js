$(document).ready(function(){

  /* SlickNav */

  $('#menu').slicknav({
    label: 'Menu',
    prependTo: 'header',
    duration: 400,
    closeOnClick: true,
    anomations: 'jquery',
    easingClose: 'linear',
    easingOpen: 'linear'
  });

  /* Smooth Scrolling */

  $('header').on('click','a[href^="#"]:not([href="#"]):not([href="#0"])', function(event){

    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') 
      && 
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);

      var targetOffset = target.offset() ? target.offset().top : 0;

      var headerHeight = $('.site-header').outerHeight();

      targetOffset = targetOffset < headerHeight ? headerHeight: targetOffset;

      if (target.length) {
        event.preventDefault();
        $('html, body').animate({scrollTop: targetOffset - headerHeight}, 1000, 
          function() {
            //Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            // if ($target.is(":focus")) { // Checking if the target was focused
            //   return false;
            // } else {
            //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            //   $target.focus(); // Set focus again
            //}
          }
        );
      }
    }
  });

  /* Transparent header on top */

  $(window).scroll(function(){
    $(window).scrollTop() >= 30 ? $('.site-header').css('background', 'rgb(98, 169, 199)') : $('.site-header').css('background', 'transparent');
  });

  /* Active links in header */

  $(window).on('scroll', function() {
    $('section').each(function() {
      var headerHeight = $('.site-header').outerHeight(); 
      if($(window).scrollTop() + headerHeight >= $(this).offset().top) {
        var id = $(this).attr('id');
        $('li').removeClass('active');
        $('a[href="#'+ id +'"]').parent().addClass('active');
      }
    }); 
  });

  /* PopUps */

  $('.close-btn').on('click', function(e) {
    e.preventDefault();
    $('.popup-wrapper').css('display', 'none');
    $('body').css('overflow', 'auto');
  });

  $('.project-title').on('click enter', function(e) {
    e.preventDefault();
    var elemId = $(this).attr('id');
    if(elemId === 'quotes') {
      $('#quotes-popup').css('display', 'block');
      $('body').css('overflow', 'hidden');
      $('.close-btn').focus();
    }
    else if(elemId === 'starfish') {
      $('#starfish-popup').css('display', 'block');
      $('body').css('overflow', 'hidden');
      $('.close-btn').focus();
    }
    else if(elemId === 'inhabitent') {
      $('#inhabitent-popup').css('display', 'block');
      $('body').css('overflow', 'hidden');
      $('.close-btn').focus();
    }
    else if(elemId === 'pong') {
      $('#pong-popup').css('display', 'block');
      $('body').css('overflow', 'hidden');
      $('.close-btn').focus();
    }
    else if(elemId === 'instanews') {
      $('#instanews-popup').css('display', 'block');
      $('body').css('overflow', 'hidden');
      $('.close-btn').focus();
    }
    else if(elemId === 'aloha') {
      $('#aloha-popup').css('display', 'block');
      $('body').css('overflow', 'hidden');
      $('.close-btn').focus();
    }
  })
  .on('keypress', function(e) {
    if(e.which === 13) {
        $(this).trigger( 'enter' );
    }
  });
});