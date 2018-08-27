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



	$(document).on('click','[modal]',function(){
		var t = $(this),
			mi= t.attr('modal'),
			mg= t.parent('#bgModa'),
			bd= $('body'),
			al= $('#'+mi+',#bgModa');

			if(!al.hasClass('openedModal')&&!al.hasClass('closemodal')){
				al.addClass('openedModal')
				al.css({
					'display':'flex',
				}).animate({'opacity':1})
				bd.css({'overflow':'hidden'})
			}else{
				al.removeClass('openedModal')
				al.animate({'opacity':0},function(){
					al.css({'display':'none'})
				})
				bd.css({'overflow':'auto'})
			}

	})

/***	svg gra	***********************************************************************************************/
	var t    = $('.wrp-con');

	t.each(function(){
			
	var	path 	 = $('.radius circle').get(0),
		len   	 = Math.round(path.getTotalLength()),
		attrThis = $(this).attr('percentLoad'),
		percent  = len*attrThis/100;
		// alert(percent)
		$(this).animate({
			'stroke-dasharray': len,
			'stroke-dashoffset': Math.round(percent)
		})
		$(this).children('.percent').text(attrThis+'%')
	});


})


