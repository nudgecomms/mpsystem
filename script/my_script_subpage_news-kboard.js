(function($){
    $('#copy-url').click(function(){
		var url = document.getElementById('my-url');
		
		url.select();
		document.execCommand('Copy');
		alert('URL 이 복사 되었습니다.');
	});
})(jQuery);