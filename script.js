$(function(){
  $('.nav-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.open-menu').toggleClass('open');
    return false;
  });
  
  $('#page-top').click(function() {
    $("html, body").animate({scrollTop:0}, 500);
    return false;
  });
});