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
    // subpage_solution
    const solution_thum_01 = $('.solution_content_01 .solution_content_thum .elementor-loop-container .e-loop-item');
    const solution_list_01 = $('.solution_content_01 .solution_content_list .elementor-loop-container .e-loop-item');
    
    const solution_thum_02 = $('.solution_content_02 .solution_content_thum .elementor-loop-container .e-loop-item');
    const solution_list_02 = $('.solution_content_02 .solution_content_list .elementor-loop-container .e-loop-item');
    
    const solution_thum_03 = $('.solution_content_03 .solution_content_thum .elementor-loop-container .e-loop-item');
    const solution_list_03 = $('.solution_content_03 .solution_content_list .elementor-loop-container .e-loop-item');
    
    const solution_thum_04 = $('.solution_content_04 .solution_content_thum .elementor-loop-container .e-loop-item');
    const solution_list_04 = $('.solution_content_04 .solution_content_list .elementor-loop-container .e-loop-item');
    
    for (let i = 0; i < solution_list_01.length; i++){
        solution_thum_01.eq(0).addClass('on');
        solution_list_01.eq(0).addClass('on');

        solution_list_01.eq(i).hover(function(){
            solution_thum_01.removeClass('on');
            solution_thum_01.eq(i).addClass('on');

            solution_list_01.removeClass('on');
            solution_list_01.eq(i).addClass('on');
        });
    }
    for (let i = 0; i < solution_list_02.length; i++){
        solution_thum_02.eq(0).addClass('on');
        solution_list_02.eq(0).addClass('on');

        solution_list_02.eq(i).hover(function(){
            solution_thum_02.removeClass('on');
            solution_thum_02.eq(i).addClass('on');

            solution_list_02.removeClass('on');
            solution_list_02.eq(i).addClass('on');
        });
    }
    for (let i = 0; i < solution_list_03.length; i++){
        solution_thum_03.eq(0).addClass('on');
        solution_list_03.eq(0).addClass('on');

        solution_list_03.eq(i).hover(function(){
            solution_thum_03.removeClass('on');
            solution_thum_03.eq(i).addClass('on');

            solution_list_03.removeClass('on');
            solution_list_03.eq(i).addClass('on');
        });
    }
    for (let i = 0; i < solution_list_04.length; i++){
        solution_thum_04.eq(0).addClass('on');
        solution_list_04.eq(0).addClass('on');

        solution_list_04.eq(i).hover(function(){
            solution_thum_04.removeClass('on');
            solution_thum_04.eq(i).addClass('on');

            solution_list_04.removeClass('on');
            solution_list_04.eq(i).addClass('on');
        });
    }
    // subpage_solution end
})(jQuery);