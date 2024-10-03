// Click on the text to repeat the animation.

$(document).ready(function(){
    $('.text-container').mouseleave(function(){
      $(this).removeClass('clicked');
    }).click(function(){
      $(this).addClass('clicked').html($(this).html());
    });
  });