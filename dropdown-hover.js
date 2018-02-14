/*$(function(){
    function is_touch_device() {
        return 'ontouchstart' in window        // works on most browsers 
        || navigator.maxTouchPoints;       // works on IE10/11 and Surface
    };

    if(!is_touch_device() && $('.navbar-toggle:hidden')){
      $('.dropdown-menu', this).css('margin-top',0);
      $('.dropdown').hover(function(){ 
          $('.dropdown-toggle', this).trigger('click');
          $('.dropdown-toggle', this).toggleClass("disabled"); 
      });			
    }
});

$(function(){
  $("#nav .dropdown").hover(
    function() {
      $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
      $(this).toggleClass('open');
    },
    function() {
      $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
      $(this).toggleClass('open');
    });
});
*/

$(function($) {
  if($(window).width()>768){
      $('.navbar .dropdown').hover(function() {
          $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

      }, function() {
          $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

      });

      $('.navbar .dropdown > a').click(function(){
          location.href = this.href;
      });

  }
});