var swiper = new Swiper('.swiper-container', {
    centeredSlides: true
    , loop: true
    , autoplay: {
        delay: 2500
        , disableOnInteraction: false
    , }
    , pagination: {
        el: '.swiper-pagination'
        , clickable: true
    , }
, });


//home header 导航
var navlist = $('header .nav-list');
var lists=$('#list header .nav-icon');
$("header .nav-icon").on("click", function () {
    if (navlist.hasClass("show")) {
        navlist.removeClass("show");
        navlist.slideUp(100);
        $(this).css({
            'background-positionY': '-5.55rem'
        });
        lists.css({
            'background-positionY': '-3.75rem'
        });
        $('#home').css({
            'overflow': 'visible'
        });
        $('#shop').css({
            'overflow': 'visible'
        });
    }
    else {
        navlist.slideDown(100);
        navlist.addClass('show');
        $(this).css({
            'background-positionY': '-7.3rem'
        });
        lists.css({
            'background-positionY': '-3.75rem'
        });
        $('#home').css({
            'overflow': 'hidden'
        });
        $('#shop').css({
            'overflow': 'hidden'
        });
    }
});
//home 底部导航 
$("#home footer .item h3").on("click", function () {
    if ($(this).parent().hasClass("show")) {
        $(this).parent().removeClass("show");
        $(this).next(".list").slideUp(100);
    }
    else {
        $(this).parent().addClass("show").siblings().removeClass("show");
        $("#home footer .list").slideUp(100);
        $(this).next(".list").slideDown(100);
    }
});



//shop motoz-nav
//shop 下拉菜单
$("#shop header .motoz-p").on("click", function () {
    if ($(this).hasClass("show")) {
        $(this).removeClass("show");
        $('#shop header .motoz-nav').slideUp(100);
        $(this).children('i').css({'transform':'rotate(0deg)'});
    }
    else {
        $(this).addClass("show").siblings().removeClass("show");
        $('#shop header .motoz-nav').slideDown(100);
        $(this).children('i').css({'transform':'rotate(90deg)'});
    }
});
//shop 视频
var video1=document.getElementById("cideoPlay1");
$('#shop .containt .bg1 .playspan').on('click',function(){
    $('#shop .containt .bg1 video').css({'z-index':'2'});
    video1.play();
    
    video1.addEventListener("ended",function(){
        $('#shop .containt .bg1 video').css({'z-index':'-2'});
    })
})
//shop 滚动固定
$(window).scroll(function(){
    if($(window).scrollTop()>50){
       $("#shop .motozadd").css({'position':'fixed','top':'0'});  
      }else{
        $("#shop .motozadd").css({'position':'relative','top':'auto'});  
      }
});
//list nav
