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
      // target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      var targetOffset = target.offset() ? target.offset().top : 0;

      var headerHeight = $(".site-header").outerHeight();

      targetOffset = targetOffset < headerHeight ? headerHeight: targetOffset;

      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: targetOffset - headerHeight
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
});