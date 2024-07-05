<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );
        
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_child', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'hello-elementor','hello-elementor','hello-elementor-theme-style' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 10 );

// END ENQUEUE PARENT ACTION
add_filter('kboard_content_get_thumbnail', 'my_kboard_content_get_thumbnail_20191223', 10, 4);
function my_kboard_content_get_thumbnail_20191223($thumbnail_url, $width, $height, $content){
	
	$board = $content->getBoard();
	
	if($board->skin == 'ocean-gallery'){ // 게시판 스킨
		if(!$thumbnail_url){
			$thumbnail_url = '/wp-content/uploads/2024/06/thum_empty.jpg'; // 이미지 주소 편집
		}
	}
	
	return $thumbnail_url;
}
//my style 추가
function my_style(){
    wp_register_style('common.css', get_stylesheet_directory_uri() . '/css/common.css'); 
    wp_enqueue_style('common.css');
    // (main_01)
    wp_register_style('style_main_01__header_footer.css', get_stylesheet_directory_uri() . '/css/main_01/style_main_01__header_footer.css'); 
    wp_enqueue_style('style_main_01__header_footer.css');

    if(is_page( array(/*국*/1937,/*영*/6419 ))){
        wp_register_style('style_main_01.css', get_stylesheet_directory_uri() . '/css/main_01/style_main_01.css'); 
        wp_enqueue_style('style_main_01.css');
    }
    // (main_01 end)
    // (post)
    if(is_single() && 'post' == get_post_type()){
        wp_register_style('post.css', get_stylesheet_directory_uri() . '/css/subpage/post.css'); 
        wp_enqueue_style('post.css');
    }
    // (post end)   
    // (about)
    if(is_page(array(/*국*/421,/*영*/6368))){
        wp_register_style('01_about.css', get_stylesheet_directory_uri() . '/css/subpage/01_about.css'); 
        wp_enqueue_style('01_about.css');
    }
    // (about end)
    // (solutions)
    if(is_page(array(/*solution*//*국*/425,/*영*/6409, /*product*//*국*/5189,/*영*/6411,6592))){
        wp_register_style('02_solutions.css', get_stylesheet_directory_uri() . '/css/subpage/02_solutions.css'); 
        wp_enqueue_style('02_solutions.css');
    }
    if(is_page(array(/*국*/425,/*영*/6409))){
        wp_register_style('02_solutions_solution.css', get_stylesheet_directory_uri() . '/css/subpage/02_solutions_solution.css'); 
        wp_enqueue_style('02_solutions_solution.css');
    }
    if(is_page(array(/*국*/5189,/*영*/6411,6592))){
        wp_register_style('02_solutions_product.css', get_stylesheet_directory_uri() . '/css/subpage/02_solutions_product.css'); 
        wp_enqueue_style('02_solutions_product.css');
    }
    // (solutions end)
    // (projects)
    if(is_page(array(/*국*/429,/*영*/6332))){
        wp_register_style('03_projects.css', get_stylesheet_directory_uri() . '/css/subpage/03_projects.css'); 
        wp_enqueue_style('03_projects.css');
    }
    // (projects end)
    // (news)
    if(is_page(array(/*국*/431,/*영*/6290))){
        wp_register_style('04_news.css', get_stylesheet_directory_uri() . '/css/subpage/04_news.css'); 
        wp_enqueue_style('04_news.css');
    }
    // (news end)
    // (contact)
    if(is_page(array(/*국*/433,/*영*/5383))){
        wp_register_style('05_contact.css', get_stylesheet_directory_uri() . '/css/subpage/05_contact.css'); 
        wp_enqueue_style('05_contact.css');
    }
    // (contact end)
}
add_action( 'wp_enqueue_scripts', 'my_style', 10);
//my style 추가 end

//my scrtip 연결
function my_script() {
    wp_register_script( 'my_script', get_stylesheet_directory_uri() . '/script/my_script.js',  array ('jquery'), '1.0.0', true );
    wp_enqueue_script( 'my_script' );

    //main
    if(is_page( array( /*국*/1937,/*영*/5372 ))){
        wp_register_script( 'my_script_main', get_stylesheet_directory_uri() . '/script/my_script_main.js',  array ('jquery'), '1.0.0', true );
        wp_enqueue_script( 'my_script_main' ); 
    }
    //main end
    //about
    if(is_page(array(/*국*/421,/*영*/6368))){
        wp_register_script( 'my_script_subpage_about', get_stylesheet_directory_uri() . '/script/my_script_subpage_about.js',  array ('jquery'), '1.0.0', true );
        wp_enqueue_script( 'my_script_subpage_about' ); 
    }
    //about end
    //solutions
    if(is_page(array(/*국*/425,/*영*/6409))){
        wp_register_script( 'my_script_subpage_solutions_solution', get_stylesheet_directory_uri() . '/script/my_script_subpage_solutions_solution.js',  array ('jquery'), '1.0.0', true );
        wp_enqueue_script( 'my_script_subpage_solutions_solution' ); 
    }
    if(is_page(array(/*국*/5189, /*영*/6411,6592))){
        wp_register_script( 'my_script_subpage_solutions_product', get_stylesheet_directory_uri() . '/script/my_script_subpage_solutions_product.js',  array ('jquery'), '1.0.0', true );
        wp_enqueue_script( 'my_script_subpage_solutions_product' ); 
    }
    //solutions end
    //news
    if(is_page(array(/*국*/431, /*영*/6290))){
        wp_register_script( 'my_script_subpage_news-kboard', get_stylesheet_directory_uri() . '/script/my_script_subpage_news-kboard.js',  array ('jquery'), '1.0.0', true );
        wp_enqueue_script( 'my_script_subpage_news-kboard' ); 
    }
    //news end
} 
add_action( 'wp_enqueue_scripts', 'my_script', 100);
//my scrtip 연결 end