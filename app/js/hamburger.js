$(document).ready(function(){

   setTimeout(function () {
     $(".hamburger").addClass('on-run');
   }, 700);
   setTimeout(function () {
     $(".hamburger").removeClass("on-run");
     $(".hamburger").addClass('ready');
   }, 2000);

  $('.hamburger').on('click',function(){
    $(this).toggleClass('open');
  });
});