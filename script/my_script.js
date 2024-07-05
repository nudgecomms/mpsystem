(function($){
    // ●header●
    // slide_nav
    $(document).on("click",".slide_nav .top_menu .menu-item", function() {
        $(this).parents(".slide_nav, .elementor-location-popup").css("display", "none");
        $("body").removeClass("dialog-prevent-scroll");
    });
    // slide_nav end
    // ●header end●
    //●footer●
    //img_slide
    $(window).scroll( function(){
        $('.slide_in_img').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
                
            if( bottom_of_window > bottom_of_element ){
            // 여기부터 적용시킬 코드 삽입
            $(this).addClass('slide_in')
            }          
        }); 
    });
    //img_slide end
    // Hide on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; // 동작의 구현이 시작되는 위치
    var navbarHeight = $('.contact_btn_wrapper').outerHeight(); // 영향을 받을 요소를 선택

    // 스크롤시에 사용자가 스크롤했다는 것을 알림
    $(window).scroll(function(event){
        didScroll = true;
    });

    // hasScrolled()를 실행하고 didScroll 상태를 재설정
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    // 동작을 구현
    function hasScrolled() {
        // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
        var st = $(this).scrollTop();
        
        // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
        if(Math.abs(lastScrollTop - st) <= delta){
            return;
        }
        
        // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.contact_btn_wrapper').removeClass('up').addClass('down');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.contact_btn_wrapper').removeClass('down').addClass('up');
            }
        }
        
        // lastScrollTop 에 현재 스크롤위치를 지정한다.
        lastScrollTop = st;
    }
    
    // Hide on on scroll down end
    //●footer end●

    // --(개인정보처리방침/입금안내)창닫기버튼--
    $('#close_window').click(function(){
        window.open('','_self').close();
    });
    // --(개인정보처리방침/입금안내)창닫기 버튼 end--
    
})(jQuery);

window.onload = function(){
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
};