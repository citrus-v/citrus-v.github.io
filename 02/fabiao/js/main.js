$(".wx").hover(function () {
    $("#wximg").show().stop().animate({
        "top": "35px"
        , "opacity": "1"
    }, 1000);
}, function () {
    $("#wximg").hide().stop().animate({
        "top": "70px"
        , "opacity": 0
    }, 1000);
})
$("#qqimg").hover(function () {
    $("#qqimg").show().stop().animate({
        "top": "50px"
        , "opacity": "1"
    }, 1000);
}, function () {
    $("#qqimg").hide().stop().animate({
        "top": "70px"
        , "opacity": "0"
    }, 1000);
})
$(".qq").hover(function () {
    $("#qqimg").show().stop().animate({
        "top": "50px"
        , "opacity": "1"
    }, 1000);
}, function () {})
$(function () {
    var n = 0;

    function run() {
        n++;
        n = (n == 3) ? 0 : n; //如果n=6是true，那么n=0，否则n=n
        $(".banner img").eq(n).fadeIn(1000).siblings("img").fadeOut(1000);
    }
    var timer = setInterval(run, 3000);
})
$(".huadong1").hover(function () {
    $(".huadong1").show().stop().animate({
        "opacity": "1"
    }, 500);
    $(".name1").show().stop().animate({
        "margin-top": "0px"
    }, 500);
}, function () {
    $(".huadong1").show().stop().animate({
        "opacity": "0"
    }, 500);
    $(".name1").show().stop().animate({
        "margin-top": "52px"
    }, 500);
})
$(".huadong2").hover(function () {
    $(".huadong2").show().stop().animate({
        "opacity": "1"
    }, 500);
    $(".name2").show().stop().animate({
        "margin-top": "0px"
    }, 500);
}, function () {
    $(".huadong2").show().stop().animate({
        "opacity": "0"
    }, 500);
    $(".name2").show().stop().animate({
        "margin-top": "52px"
    }, 500);
})
$(".huadong3").hover(function () {
    $(".huadong3").show().stop().animate({
        "opacity": "1"
    }, 500);
    $(".name3").show().stop().animate({
        "margin-top": "0px"
    }, 500);
}, function () {
    $(".huadong3").show().stop().animate({
        "opacity": "0"
    }, 500);
    $(".name3").show().stop().animate({
        "margin-top": "52px"
    }, 500);
})
$(".huadong4").hover(function () {
    $(".huadong4").show().stop().animate({
        "opacity": "1"
    }, 500);
    $(".name4").show().stop().animate({
        "margin-top": "0px"
    }, 500);
}, function () {
    $(".huadong4").show().stop().animate({
        "opacity": "0"
    }, 500);
    $(".name4").show().stop().animate({
        "margin-top": "52px"
    }, 500);
})
$(".fx").hover(function () {
    $("#fx").css({
        "display": "block"
    });
}, function () {
    $("#fx").css({
        "display": "none"
    });
})
$("#fx").hover(function () {
    $("#fx").css({
        "display": "block"
    });
}, function () {
    $("#fx").css({
        "display": "none"
    });
})
$(".yq").hover(function () {
    $("#yq").css({
        "display": "block"
    });
}, function () {
    $("#yq").css({
        "display": "none"
    });
})
$("#yq").hover(function () {
    $("#yq").css({
        "display": "block"
    });
}, function () {
    $("#yq").css({
        "display": "none"
    });
})
//首页样式部分结束
$(".a-main ul li").click(function () {
        var a = $(this).index();
        $(".a-main .col-md-12 div").eq(a).show().siblings().not("ul").hide();
        $(this).attr("class", "li" + a).siblings().removeAttr("class");
    })
    //about样式部分结束
$(".s-main ul li").click(function () {
    var a = $(this).index();
    $(".s-main .col-md-12 div").eq(a).show().siblings().not("ul").hide();
    $(this).attr("class", "li" + a).siblings().removeAttr("class");
})