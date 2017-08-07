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

	var $photo = $('#photo');
	var $index = $('#index');
	var width = $(window).width();
	var length = $photo.find('li').length;
	var liIndex = 0;
	$photo.css('width', length*width);
	$photo.find('li').css('width', width);
	for(var i = 0;i<length;i++){
		$index.append('<span></span>');
	}
	$index.find('span:first-child').addClass('active');
	$index.find('span').on('click', function(){
		toggle($(this).index() - liIndex)
	})
	var flag = true;
	$photo.find('.desc:first').css({
		left: '50%',
		opacity: 1
	});
	function toggle(index){
		if(flag){
			flag = false;
			liIndex = (liIndex += index + length) % length;
			$index.find('span').removeClass('active');
			$index.find('span').get(liIndex).className = 'active';
			var $current = $($photo.find('li').get(liIndex));
			$photo.find('.desc').css({
				left: '0',
				opacity: 0
			});
			// 判断是否在最后一张图
			if($photo.offset().left <= -width * (length - 1) && index > 0){
				$photo.css('left', 0);
				// 是否在第一张图
			}else if($photo.offset().left == 0 && index < 0){
				$photo.css('left', -(length-1)*width);
			}else{
				$photo.css('left', $photo.offset().left - index*width);
			}

			$photo.on('transitionend', function(){
				flag = true;
				$current.find('.desc').css({
					left: '50%',
					opacity: 1
				})
			})
		}
	}
	$('#next').on('click', function(){
		toggle(1);
	});
	$('#prev').on('click', function(){
		toggle(-1);
	});
});
	