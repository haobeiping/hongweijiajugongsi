$(function(){
	var navTimer = null;
	$('.has-inner').on('mouseenter', function(){
		$('#nav-inner').stop().slideDown().find('figure').stop().hide().eq($(this).attr('data-index')).fadeIn();
	})

	$('#nav, #nav-inner').on('mouseenter',function(){
		clearTimeout(navTimer);
	}).on('mouseleave', function(){
		navInnerHide();
	})

	function navInnerHide(){
		navTimer = setTimeout(function(){
			$('#nav-inner').stop().slideUp();
		},200)
	}
});
	