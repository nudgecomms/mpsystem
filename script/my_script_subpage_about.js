(function($){
    // ●header●
    var scroll_event_object = $(".header");
    var sub01_section03 = $(".sub01_section03");


    $(window).scroll(function () {
        var scroll_top = $(this).scrollTop();
        var sub01_section03_top = sub01_section03.offset().top;
        var sub01_section03_bottom = sub01_section03_top + sub01_section03.innerHeight();

        if(
            (scroll_top > sub01_section03_top && scroll_top < sub01_section03_bottom)
        ){
            scroll_event_object.addClass("scroll_on");
        }else{
            scroll_event_object.removeClass("scroll_on");
        }
    });

})(jQuery);

