// JavaScript Document

jQuery(document).ready(function(){
    //메뉴 슬라이드
    $(".nav>li").mouseover(function(){
        if($(this).children(".submenu").length > 0){
            $(this).children(".submenu").stop().slideDown(500);
        }
    });
    $(".nav>li").mouseleave(function(){
       $(this).children(".submenu").stop().slideUp();
    });
    
    //이미지 슬라이드
    $('#imgsbar a').click(function(){
        $('#imgsbar a').removeClass('active');
        $(this).addClass('active');
        var imgLeft=$(this).attr('img-left');
        $('#imgs').animate({left:imgLeft},"fast");
    });
    
    //정보나눔 클릭 상호작용
    $(".partner_info img").click(function(){
        $(".modal").show();
    });
    
    $(".modal .content button").click(function(){
        $(".modal").hide();
    });
    
});

//누르면 창 뜨는거
var win;
function winOpen(){
    win = window.open('contact.html','child','toolbar = no, location=no, status = no, resizable = no, scrollbars = no. width=500, height = 300')
};