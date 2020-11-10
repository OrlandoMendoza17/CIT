// GetToTopBtn
$(function() {
  
  var $btn = $('#btnTop');
  var $home = $('#topSection');
  var startpoint = $home.scrollTop() + $home.height();
  
  $(window).on('scroll', function() {
    if($(window).scrollTop() > startpoint) {
      $btn.show();
    } else {
      $btn.hide();
    }
  });
});
// GetToTopBtn

// js scrolling animation initialize
$( document ).ready(function() {
  new WOW().init();
});
// js scrolling animation initialize

// Tooltips Initialization
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//MY OWN JAVASCRIPT CODE

