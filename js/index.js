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
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);

      var targetOffset = target.offset() ? target.offset().top : 0;

      var headerHeight = $(".site-header").outerHeight();

      targetOffset = targetOffset < headerHeight ? headerHeight: targetOffset;

      if (target.length) {
        event.preventDefault();
        $('html, body').animate({scrollTop: targetOffset - headerHeight}, 1000);
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
      var headerHeight = $(".site-header").outerHeight(); 
      if($(window).scrollTop() + headerHeight >= $(this).offset().top) {
        var id = $(this).attr('id');
        $('li').removeClass('active');
        $('a[href="#'+ id +'"]').parent().addClass('active');
      }
    }); 
  });

});