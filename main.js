$(document).ready(function(){

  //背景更改
  $('.white').on('click',function(e){
    event.preventDefault();//取消預設行為
    $('header').css({'background-color':'#DDDDDD','color':'#000000'});
    $('article').css({'background-color':'#FFFFFF','color':'#000000'});
    $('footer').css({'background-color':'#DDDDDD','color':'#000000'});
    $('.lastChapter').css({'background-color':'#FFFFFF','color':'#000000'});
    $('.content').css({'background-color':'#FFFFFF','color':'#000000'});
    $('.nextChapter').css({'background-color':'#FFFFFF','color':'#000000'});
  });

  $('.green').on('click',function(e){
    event.preventDefault();
    $('header').css({'background-color':'#A9EEAD','color':'#000000'});
    $('article').css({'background-color':'#F3FDEC','color':'#000000'});
    $('footer').css({'background-color':'#A9EEAD','color':'#000000'});
    $('.lastChapter').css({'background-color':'#F3FDEC','color':'#000000'});
    $('.content').css({'background-color':'#F3FDEC','color':'#000000'});
    $('.nextChapter').css({'background-color':'#F3FDEC','color':'#000000'});
  });

  $('.blue').on('click',function(e){
    event.preventDefault();
    $('header').css({'background-color':'#61AEEE','color':'#000000'});
    $('article').css({'background-color':'#E9F4FC','color':'#000000'});
    $('footer').css({'background-color':'#61AEEE','color':'#000000'});
    $('.lastChapter').css({'background-color':'#E9F4FC','color':'#000000'});
    $('.content').css({'background-color':'#E9F4FC','color':'#000000'});
    $('.nextChapter').css({'background-color':'#E9F4FC','color':'#000000'});
  });

  $('.gray').on('click',function(e){
    event.preventDefault();
    $('header').css({'background-color':'#808080','color':'#000000'});
    $('article').css({'background-color':'#DDDDDD','color':'#000000'});
    $('footer').css({'background-color':'#808080','color':'#000000'});
    $('.lastChapter').css({'background-color':'#DDDDDD','color':'#000000'});
    $('.content').css({'background-color':'#DDDDDD','color':'#000000'});
    $('.nextChapter').css({'background-color':'#DDDDDD','color':'#000000'});
  });

  $('.black').on('click',function(e){
    event.preventDefault();
    $('header').css({'background-color':'#000000','color':'#DDDDDD'});
    $('article').css({'background-color':'#2C313C','color':'#DDDDDD'});
    $('footer').css({'background-color':'#000000','color':'#DDDDDD'});
    $('.lastChapter').css({'background-color':'#2C313C','color':'#DDDDDD'});
    $('.content').css({'background-color':'#2C313C','color':'#DDDDDD'});
    $('.nextChapter').css({'background-color':'#2C313C','color':'#DDDDDD'});
  });

  //文字大小更改
  $('.bigBig').on('click',function(e){
    event.preventDefault();
    $('.story').css('font-size','20px');
  });

  $('.big').on('click',function(e){
    event.preventDefault();
    $('.story').css('font-size','18px');
  });

  $('.middle').on('click',function(e){
    event.preventDefault();
    $('.story').css('font-size','16px');
  });

  $('.small').on('click',function(e){
    event.preventDefault();
    $('.story').css('font-size','14px');
  });

});
