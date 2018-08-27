$(function(){
	$('.slider-project').slick({
		infinite: true,
		slidesToShow: 3,
		centerMode: true,
		
		responsive:[
			{
				breakpoint:1000,
				settings:{
					slidesToShow:2
				}
			},
			{
				breakpoint:767,
				settings:{
					slidesToShow:1,
					centerMode:false
				}
			}
		]
	})


	$('.slide-news-container').slick({
		arrows:true,
		slidesToShow:1,

	});

	$(document).on('click','.hamself',function(){
		if(!$('.bgmenu').hasClass('activated')){
			$('.bgmenu').toggleClass('activated');
			$(this).children('.lineham').css({'background':'white'})
			$('.bgmenu').show()
		}else{
			$(this).children('.lineham').css({'background':'black'})
			$('.bgmenu').toggleClass('activated');
			$('.activated').animate({
				'opacity':'0',
			},500)
			$('.bgmenu').hide()
		}
	})
})