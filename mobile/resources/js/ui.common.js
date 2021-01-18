setTimeout(console.log.bind(console, '%cNETIVE RED', 'color: #ed4947; font: bold 30px verdana;'),0);
setTimeout(console.log.bind(console, '%c Make UX AS GOOD AS POSSIBLE ', 'color: #000; font: bold 15x verdana; background-color: #fff;'),0);


$.fn.parallaxFn = function() {
	return this.each(function() {
		var $win = $(window),
			$wT = $win.scrollTop(),
			$t = $(this),
			$point = parseInt($t.positionInfo()),
			$num = 0, $var;
		
		if($('.mainArea').length) {
			$num = parseInt($('.mainArea').css('paddingTop'));
		}
		$val = parseInt(($wT+$num-$point)*0.6);

		if($wT+$num > $point) {
			$t.css({'top': $val + 'px'});
		} else {
			$t.css({'top':0});
		}
	});
}
$.fn.parallax1Fn = function() {
	return this.each(function() {
		var $win = $(window),
			$wT = $win.scrollTop(),
            $wH = $win.height(),
			$t = $(this),
			$tH = $t.innerHeight(),
			$point = parseInt($('.parallaxItem-point').positionInfo()),
			$val = parseInt(($wH+$wT - $point) * 1.3);
		
		if($wH+$wT > $point) {
			if($tH-$val < 27) {
				$t.css({'top': '27px'});
			} else {
				$t.css({'top': $tH-$val + 'px'});
			}
		} else {
			$t.css({'top': $tH});
		}
	});
}

// 객체의 offset().top 구하기
$.fn.positionInfo = function() {
    return $(this).offset().top;
}

// 객체의 위치 구해서 active 클래스 넣어주기
$.fn.addActive = function() {
    return this.each(function() {
        var $win = $(window),
            $wT = $win.scrollTop(),
            $wH = $win.height(),
            $t = $(this),
            $class = ['.dash', 'active'];

        if($wH+$wT > $t.positionInfo()) {
            $t.children($class[0]).length
                ? $t.children($class[0]).addClass($class[1])
                : $t.addClass($class[1]);

            if($t.hasClass('imgEffect') || $t.hasClass('mainFullArea')) {
                $t.addClass($class[1]);
            }
        } else {
            $t.children($class[0]).length
                ? $t.children($class[0]).removeClass($class[1])
                : $t.removeClass($class[1]);
        }
    });
}

// 메인
var mWord = {
	$posArray1: null,
	$posArray2: null,
	$posArray3: null,
	infiniteAniFn: function() {
		var $t = this;

		$('[class^=figure]').removeClass('active');

		/* .ani1 - background-position-x: '0%', '25%', '50%', '75%', '100%'; */
		/* .ani2 - background-position-x: '0%', '25%', '50%', '75%', '100%'; */
		/* .ani3 - background-position-x: '0%', '16.66%', '33.33%', '50%', '66.66%', '83.33%', '100%'; */
		/* .ani4 - background-position-x: '0%', '16.66%', '33.33%', '50%', '66.66%', '83.33%', '100%'; */
		/* .ani5 - background-position-x: '0%', '33.3%', '66.6%', '100%'; */

		setTimeout(function() {
			$('.firstView').css({'transition-duration': '0.3s'});
			$('.ani1.firstView').css({'background-position-x': $t.$posArray1[3] });
			$('.ani2.firstView').css({'background-position-x': $t.$posArray1[3] });
			$('.ani3.firstView').css({'background-position-x': $t.$posArray2[4] });
			$('.ani4.firstView').css({'background-position-x': $t.$posArray2[4] });
			$('.ani5.firstView').css({'background-position-x': $t.$posArray3[2] });
			
			$('.imgEffect > .img').animate({ 'opacity': 0 }, 300, function() {
				$(this).find('.dash').removeClass('active');
			});
			$('.figure1').addClass('active').animate({ 'opacity': 1 }, 300); // 첫번째 도형(바코드 모양)

			setTimeout(function() {
				$('.ani1.firstView').css({'background-position-x': $t.$posArray1[2] });
				$('.ani2.firstView').css({'background-position-x': $t.$posArray1[2] });
				$('.ani3.firstView').css({'background-position-x': $t.$posArray2[3] });
				$('.ani4.firstView').css({'background-position-x': $t.$posArray2[3] });
				$('.ani5.firstView').css({'background-position-x': $t.$posArray3[2] });
			
				$('.figure1').removeClass('active').animate({ 'opacity': 0 }, 300);
				$('.figure2').addClass('active').animate({ 'opacity': 1 }, 300); // 두번째 도형(원 2개)

				setTimeout(function() {
					$('.ani1.firstView').css({'background-position-x': $t.$posArray1[2] });
					$('.ani2.firstView').css({'background-position-x': $t.$posArray1[1] });
					$('.ani3.firstView').css({'background-position-x': $t.$posArray2[2] });
					$('.ani4.firstView').css({'background-position-x': $t.$posArray2[2] });
					$('.ani5.firstView').css({'background-position-x': $t.$posArray3[1] });
			
					$('.figure2').removeClass('active').animate({ 'opacity': 0 }, 300);
					$('.figure3').addClass('active').animate({ 'opacity': 1 }, 300); // 세번째 도형(사각형 2개)

					setTimeout(function() {
						$('.ani1.firstView').css({'background-position-x': $t.$posArray1[1] });
						$('.ani2.firstView').css({'background-position-x': $t.$posArray1[1] });
						$('.ani3.firstView').css({'background-position-x': $t.$posArray2[1] });
						$('.ani4.firstView').css({'background-position-x': $t.$posArray2[1] });
						$('.ani5.firstView').css({'background-position-x': $t.$posArray3[0] });
			
						$('.figure3').removeClass('active').animate({ 'opacity': 0 }, 300);
						// $('.figure4').addClass('active').animate({ 'opacity': 1 }, 300); // 세번째 도형(빗살 문양)
						$('.figure5').addClass('active').animate({ 'opacity': 1 }, 300); // 세번째 도형(빗살 문양)

						setTimeout(function() {
							$('.ani1.firstView').css({'background-position-x': $t.$posArray1[0] });
							$('.ani2.firstView').css({'background-position-x': $t.$posArray1[0] });
							$('.ani3.firstView').css({'background-position-x': $t.$posArray2[0] });
							$('.ani4.firstView').css({'background-position-x': $t.$posArray2[0] });
							$('.ani5.firstView').css({'background-position-x': $t.$posArray3[0] });
							
							// $('.figure4').removeClass('active').animate({ 'opacity': 0 }, 300);
							$('.figure5').removeClass('active').animate({ 'opacity': 0 }, 300);
							$('.imgEffect > .img').animate({ 'opacity': 1 }, 300, function() {
								$(this).find('.dash').addClass('active');
							});

							setTimeout(function() {
								$('.firstView').css({'transition-duration': '0s'});
								$('.ani1.firstView').css({'background-position-x': $t.$posArray1[3] });
								$('.ani2.firstView').css({'background-position-x': $t.$posArray1[4] });
								$('.ani3.firstView').css({'background-position-x': $t.$posArray2[5] });
								$('.ani4.firstView').css({'background-position-x': $t.$posArray2[5] });
								$('.ani5.firstView').css({'background-position-x': $t.$posArray3[3] });
								
								$t.infiniteAniFn(); // 재호출
							}, 300);
						}, 2300);
					}, 2300);
				}, 2300);
			}, 2300);
		}, 2000);
	},
	timerNewFn: function() {
		var $t = this;
		setTimeout(function() {
			// word에 첫번째 알파벳을 숨김
			$('span.word').find('[class^=ani]').css({'opacity': 0});

			// 로고, 햄버거메뉴, 하단 문구
			$('#headerLinks.imgEffect').addClass('active').animate({ 'opacity': 1 }, 200, function() {
				$('#nav .imgEffect').addClass('active').animate({ 'opacity': 1 }, 200, function() {
					$('.main_content .bottom_logo, .main_content .bottom_logo .dash').addClass('active').animate({ 'opacity': 1 }, 200);
				});
			});

			// 알파벳 애니메이션
			mWord.infiniteAniFn();			
		}, 1500);
	},
	init: function() {
		var $t = this;
		$t.$posArray1 = ['0%', '25%', '50%', '75%', '100%']; // 5
		$t.$posArray2 = ['0%', '16.66%', '33.33%', '50%', '66.66%', '83.33%', '100%']; // 7
		$t.$posArray3 = ['0%', '33.3%', '66.6%', '100%']; // 4
		
		$t.timerNewFn();

	}
}
var loader = {
	$html: null,
	activeFn: function() {
		return  $(document).on('scroll', function() {
					$('.dashed_wrap, .contactNumber').addActive(); // dash animation
					$('.scrollEffect').addActive(); // scroll effect
					$('[class^=figure]').addActive(); // object animation
					$('.imgEffect').addActive(); // image effect
					$('.mainFullArea').addActive(); // image effect
				}).trigger('scroll');

	},
	init: function(f) {
		var $t = this,
			url = document.location.href,
			urlFlag = url.indexOf('mobile/main');
			urlFlag2 = url.indexOf('mobile/projects/20');
			urlFlag3 = url.indexOf('?preload=0');

		$t.$html = '<div id="preloader"><span>Loading...</span></div>';

		if(urlFlag === -1 && urlFlag2 === -1 && urlFlag3 === -1) {
			$("body").prepend($t.$html);
			setTimeout(function() {
				$("#preloader").fadeOut(function() {
					$t.activeFn();
				});
			}, 1000);
		} else {
			$t.activeFn();
		}
	}
}

$(document).ready(function() {
	$.ajax({
		url: "/mobile/include/header.html"
	}).done(function(html) {
		$('header#header').append(html);
	});

	$.ajax({
		url: "/mobile/include/footer.html"
	}).done(function(html) {
		$('footer#footer').append(html);
	});

	// 화면 초기 진입시 loader 노출(메인 제외)
	loader.init();

	$('.btnTop > a').on('click', function(e) {
		e.preventDefault();
		$('body, html').animate({
			scrollTop: 0
		},100);
	});
});