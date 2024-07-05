(function($){
    // subpage_solutions_lnb
    const solutions_nav = $('.solutions_nav_wrapper.solution .solutions_nav > a');
    for (let i = 0; i < solutions_nav.length; i++){
        solutions_nav.eq(1).hover(function(){
            solutions_nav.eq(0).addClass('on');
        },function(){
            solutions_nav.eq(0).removeClass('on');
        });
    }
    // subpage_solutions_lnb end
    const popup_close = $('.popup_close');
    const popup = $('.popup_container .popup');

    popup_close.click(function(){
        popup.removeClass('on');
        $(this).removeClass('on');
        $('body').removeClass('dialog-prevent-scroll');
    });
    const product_thum_01 = $('.product_content_01 .product_content_thum .elementor-image-gallery > .gallery > .gallery-item');
    const product_list_01 = $('.product_content_01 .product_content_list .elementor-icon-list-items .elementor-icon-list-item');
    const product_list_mb_01 = $('.product_content_mb_01 .e-n-accordion-item');
    const product_01_popup = $('.popup_container_01 .popup');
    
    const product_thum_02 = $('.product_content_02 .product_content_thum .elementor-image-gallery > .gallery > .gallery-item');
    const product_list_02 = $('.product_content_02 .product_content_list .elementor-icon-list-items .elementor-icon-list-item');
    const product_list_mb_02 = $('.product_content_mb_02 .e-n-accordion-item');
    const product_02_popup = $('.popup_container_02 .popup');
    
    const product_thum_03 = $('.product_content_03 .product_content_thum .elementor-image-gallery > .gallery > .gallery-item');
    const product_list_03 = $('.product_content_03 .product_content_list .elementor-icon-list-items .elementor-icon-list-item');
    const product_list_mb_03 = $('.product_content_mb_03 .e-n-accordion-item');
    const product_03_popup = $('.popup_container_03 .popup');

    //pc
    for (let i = 0; i < product_list_01.length; i++){
        product_thum_01.eq(0).addClass('on');
        product_list_01.eq(0).addClass('on');

        product_list_01.eq(i).hover(function(){
            product_thum_01.removeClass('on');
            product_thum_01.eq(i).addClass('on');

            product_list_01.removeClass('on');
            product_list_01.eq(i).addClass('on');
        });
        product_list_01.eq(i).click(function(){
            product_01_popup.eq(i).addClass('on');
            popup_close.addClass('on');
            $('body').addClass('dialog-prevent-scroll');
        });
    }
    // pc end
    //mb
    for (let i = 0; i < product_list_mb_01.length; i++){
        product_list_mb_01.eq(i).children('.e-child').children('.elementor-widget-button').children('').children('').children('').click(function(){
            product_01_popup.eq(i).addClass('on');
            popup_close.addClass('on');
            $('body').addClass('dialog-prevent-scroll');
        });
    }
    //mb end
    // pc
    for (let i = 0; i < product_list_02.length; i++){
        product_thum_02.eq(0).addClass('on');
        product_list_02.eq(0).addClass('on');

        product_list_02.eq(i).hover(function(){
            product_thum_02.removeClass('on');
            product_thum_02.eq(i).addClass('on');

            product_list_02.removeClass('on');
            product_list_02.eq(i).addClass('on');
        });
        product_list_02.eq(i).click(function(){
            product_02_popup.eq(i).addClass('on');
            popup_close.addClass('on');
            $('body').addClass('dialog-prevent-scroll');
        });
    }
    // pc end
    //mb
    for (let i = 0; i < product_list_mb_02.length; i++){
        product_list_mb_02.eq(i).children('.e-child').children('.elementor-widget-button').children('').children('').children('').click(function(){
            product_02_popup.eq(i).addClass('on');
            popup_close.addClass('on');
            $('body').addClass('dialog-prevent-scroll');
        });
    }
    //mb end
    // pc
    for (let i = 0; i < product_list_03.length; i++){
        product_thum_03.eq(0).addClass('on');
        product_list_03.eq(0).addClass('on');

        product_list_03.eq(i).hover(function(){
            product_thum_03.removeClass('on');
            product_thum_03.eq(i).addClass('on');

            product_list_03.removeClass('on');
            product_list_03.eq(i).addClass('on');
        });
        product_list_03.eq(i).click(function(){
            product_03_popup.eq(i).addClass('on');
            popup_close.addClass('on');
            $('body').addClass('dialog-prevent-scroll');
        });
    }
    // pc end
    //mb
    for (let i = 0; i < product_list_mb_03.length; i++){
        product_list_mb_03.eq(i).children('.e-child').children('.elementor-widget-button').children('').children('').children('').click(function(){
            product_03_popup.eq(i).addClass('on');
            popup_close.addClass('on');
            $('body').addClass('dialog-prevent-scroll');
        });
    }
    //mb end
})(jQuery);