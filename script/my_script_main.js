(function($){
    // ●header●
    var scroll_event_object = $(".header");
    var main_section04 = $(".section04");


    $(window).scroll(function () {
        var scroll_top = $(this).scrollTop();
        var main_section04_top = main_section04.offset().top;
        var main_section04_bottom = main_section04_top + main_section04.innerHeight();

        if(
            (scroll_top > main_section04_top && scroll_top < main_section04_bottom)
        ){
            scroll_event_object.addClass("scroll_on");
        }else{
            scroll_event_object.removeClass("scroll_on");
        }
    });
    // ●header end●
    // ●divider class●
    $(window).scroll( function(){
        // 적용 시킬 개체의 class명
        $('.divider').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                
            if( bottom_of_window > bottom_of_element ){
                $(this).addClass('line_slide')
            }          
        }); 
    });
    // ●divider class end●
})(jQuery);

