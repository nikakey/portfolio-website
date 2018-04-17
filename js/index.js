$(document).ready(function(){

  /* SlickNav */

  $('#menu').slicknav({
    label: 'Menu',
    prependTo: 'header',
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
        $('html, body').animate({scrollTop: targetOffset - headerHeight}, 1000, function() {
        });
      }
    }
  });
});