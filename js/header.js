$(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() >= 116){
      $(".meses-header").css('display', 'inline');
      $(".th-header").css('opacity', '0');
      $(".th-header").css('display', 'none');
    }else{
      $(".meses-header").css('display', 'none');
      $(".th-header").css('opacity', '1');
      $(".th-header").css('display', 'relative');
    }
  });

  $(".meses-header").css({
    'width': $(".tab-receitas").width()
  });
  $( window ).resize(function() {
    $(".meses-header").css({
      'width': $(".tab-receitas").width()
    });
  });
});