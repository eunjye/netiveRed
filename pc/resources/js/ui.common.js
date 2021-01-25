setTimeout(console.log.bind(console, '%cNETIVE RED', 'color: #ff3d32; font: bold 30px verdana;'),0);
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
			$wT = $win.scrollTop(), // window 스크롤값
			$wH = $win.height(), // 브라우저 높이값
			$t = $(this),
			$tH = 50, // this의 부모 기준 50%에 위치
			$point = $t.siblings('.parallaxItem-point').positionInfo(), // this의 형제(parallaxItem-point)의 오프셋탑값
			$val = parseInt(($point - $wT) * 100 / $wH) + 4; // 최종 조정되어야 할 값.
		/*
			활용 가능한 값들
			1. ($point - $wT) --> point 상단부터 브라우저 상단 끝 까지 거리
				($point - $wT) * 100 / $wH --> 브라우저 높이값에 대한 백분율
			2. ($wH+$wT - $point) --> point 상단부터 브라우저 하단 끝 까지 거리
				($wH+$wT - $point) * 100 / $wH --> 브라우저 높이값에 대한 백분율
			3. ($point - $wT) + ($wH+$wT - $point) -->  $wH 와 같음
			4. ($wH+$wT == $point) --> point 가 브라우저 하단에 딱 붙어 있는 경우
			5. ($wH+$wT > $point) , ($wH >= $point - $wT) --> parallaxItem-point 가 화면에 출현하는 시점
			6. ($wT >= $point) , ($point - $wT <= 0) --> point가 브라우저 상단에 걸린 경우

			4번에서 1번까지의 거리는 $wH 와 동일.
			5번 시점부터 $wH 만큼을 이동하는 거리
		*/
		$t.parent().css({'padding-bottom' : $t.parent().innerHeight() - $wH + 'px' }).height($wH);

		if ($wH+$wT > $point && $wT < $point) {
			// parallaxItem-point 가 화면에 출현하는 시점부터 ~ 브라우저 상단에 걸치는 시점 전까지.
			$t.css({'top': $val + '%'});
		}
		if ($wH+$wT <= $point) {
			// parallaxItem-point 가 화면에 출현하기 이전
			$t.css({'top': $tH + '%' }); // this의 형제(parallaxItem-point)의 innerHeight/2 과 부모의 패딩값을 더함
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
	infiniteAniFn1: function() {
		var $t = this;
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

			$t.infiniteAniFn2();
		}, 2000);
	},
	infiniteAniFn2: function() {
		var $t = this;
		setTimeout(function() {
			$('.ani1.firstView').css({'background-position-x': $t.$posArray1[2] });
			$('.ani2.firstView').css({'background-position-x': $t.$posArray1[2] });
			$('.ani3.firstView').css({'background-position-x': $t.$posArray2[3] });
			$('.ani4.firstView').css({'background-position-x': $t.$posArray2[3] });
			$('.ani5.firstView').css({'background-position-x': $t.$posArray3[2] });

			$('.figure1').removeClass('active').animate({ 'opacity': 0 }, 300);
			$('.figure2').addClass('active').animate({ 'opacity': 1 }, 300); // 두번째 도형(원 2개)

			$t.infiniteAniFn3();
		}, 2300);
	},
	infiniteAniFn3: function() {
		var $t = this;
		setTimeout(function() {
			$('.ani1.firstView').css({'background-position-x': $t.$posArray1[2] });
			$('.ani2.firstView').css({'background-position-x': $t.$posArray1[1] });
			$('.ani3.firstView').css({'background-position-x': $t.$posArray2[2] });
			$('.ani4.firstView').css({'background-position-x': $t.$posArray2[2] });
			$('.ani5.firstView').css({'background-position-x': $t.$posArray3[1] });

			$('.figure2').removeClass('active').animate({ 'opacity': 0 }, 300);
			$('.figure3').addClass('active').animate({ 'opacity': 1 }, 300); // 세번째 도형(사각형 2개)

			$t.infiniteAniFn4();
		}, 2300);
	},
	infiniteAniFn4: function() {
		var $t = this;
		setTimeout(function() {
			$('.ani1.firstView').css({'background-position-x': $t.$posArray1[1] });
			$('.ani2.firstView').css({'background-position-x': $t.$posArray1[1] });
			$('.ani3.firstView').css({'background-position-x': $t.$posArray2[1] });
			$('.ani4.firstView').css({'background-position-x': $t.$posArray2[1] });
			$('.ani5.firstView').css({'background-position-x': $t.$posArray3[0] });

			$('.figure3').removeClass('active').animate({ 'opacity': 0 }, 300);
			$('.figure5').addClass('active').animate({ 'opacity': 1 }, 300); // 세번째 도형(빗살 문양)

			$t.infiniteAniFn5();
		}, 2300);
	},
	infiniteAniFn5: function() {
		var $t = this;
		setTimeout(function() {
			$('.ani1.firstView').css({'background-position-x': $t.$posArray1[0] });
			$('.ani2.firstView').css({'background-position-x': $t.$posArray1[0] });
			$('.ani3.firstView').css({'background-position-x': $t.$posArray2[0] });
			$('.ani4.firstView').css({'background-position-x': $t.$posArray2[0] });
			$('.ani5.firstView').css({'background-position-x': $t.$posArray3[0] });

			$('.figure5').removeClass('active').animate({ 'opacity': 0 }, 300); //figure5
			$('.imgEffect > .img').animate({ 'opacity': 1 }, 300, function() {
				$(this).find('.dash').addClass('active');
			});

			$t.infiniteAniFn6();
		}, 2300);
	},
	infiniteAniFn6: function() {
		var $t = this;
		setTimeout(function() {
			$('.firstView').css({'transition-duration': '0s'});
			$('.ani1.firstView').css({'background-position-x': $t.$posArray1[3] });
			$('.ani2.firstView').css({'background-position-x': $t.$posArray1[4] });
			$('.ani3.firstView').css({'background-position-x': $t.$posArray2[5] });
			$('.ani4.firstView').css({'background-position-x': $t.$posArray2[5] });
			$('.ani5.firstView').css({'background-position-x': $t.$posArray3[3] });

			$t.infiniteAniFn(); // 재호출
		}, 300);
	},
	infiniteAniFn: function() {
		var $t = this;

		$('[class^=figure]').removeClass('active');

		/* .ani1 - background-position-x: '0%', '25%', '50%', '75%', '100%'; */
		/* .ani2 - background-position-x: '0%', '25%', '50%', '75%', '100%'; */
		/* .ani3 - background-position-x: '0%', '16.66%', '33.33%', '50%', '66.66%', '83.33%', '100%'; */
		/* .ani4 - background-position-x: '0%', '16.66%', '33.33%', '50%', '66.66%', '83.33%', '100%'; */
		/* .ani5 - background-position-x: '0%', '33.3%', '66.6%', '100%'; */

		$t.infiniteAniFn1();
	},
	timerNewFn: function() {
		var $t = this;
		setTimeout(function() {
			// word에 첫번째 알파벳을 숨김
			$('span.word').find('[class^=ani]').css({'opacity': 0});

			// 로고, 햄버거메뉴, 하단 문구
			$('#headerLinks.imgEffect').addClass('active').animate({ 'opacity': 1 }, 200, function() {
				$('#nav .imgEffect').addClass('active').animate({ 'opacity': 1 }, 200, function() {
					$('.main_content .bottom_logo, .main_content .bottom_logo .dash, #nav_menu .bottom_logo .dash').addClass('active').animate({ 'opacity': 1 }, 200);
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
					$('.process_wrap .dash').addActive(); // about page
					$('.onFrame').addActive(); // in browser area
				}).trigger('scroll');

	},
	init: function(f) {
		var $t = this,
			url = document.location.href,
			urlFlag = url.indexOf('pc/main');
			urlFlag2 = url.indexOf('pc/projects/20');
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
		url: "../../pc/include/header.html"
	}).done(function(html) {
		$('header#header').append(html);
	});

	$.ajax({
		url: "../../pc/include/footer.html"
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

$.fn.addScrollFixed = function(v) {
    return this.each(function() {
        var $win = $(window),
            $wT = $win.scrollTop(); // window 스크롤값
            $wH = $win.height(), // window 높이(브라우저 화면)

            $t = $(this),
            $tH = $t.innerHeight(), // this 높이값
            $tT = $t.positionInfo(), // this 옵셋탑

            $fixed = $t.find('.ui-fixed-target'), // 고정시킬 타겟
            $fixedH = $fixed.innerHeight(), // 고정될 타겟 높이값

            $pos = parseInt($wH * v / 100), // 타겟이 브라우저 위치(%)에 왔을 경우( 50%는 몇픽셀? )
            $class = ['active']; // class 활용 가능

        if($fixed.length) {
            $t.css({'position': 'relative'}); // position 을 사용하기 때문에 속성 필요

            if($wT+$pos > $tT) { // 스크롤값 + 매개변수로 계산된 위치값 > this 옵셋탑
                $t.addClass($class[0]);
                $fixed.css({ 'position': 'fixed', 'top': $pos + 'px' });

                if($fixed.positionInfo() + $fixedH >= $tT + $tH) {
                    $t.removeClass($class[0]);
                    $fixed.css({ 'position': 'absolute', 'top': $tH - $fixedH + 'px' });
                }
            } else {
                $t.removeClass($class[0]);
                $fixed.css({ 'position': 'absolute', 'top': 'auto' });
            }

            // console.log('브라우저 높이 : ' + $wH, ' | 스크롤 탑 : ' + $wT, ' | 대상 옵셋탑 : ' + $tT,  ' | 부모영역 높이 : ' + $tH)
        }
    });
}

//bg scroll event
$.fn.bgScrollFn = function() {
	return this.each(function() {
		var $win = $(window),
			$wT = $win.scrollTop(),
			$wH = $win.height(),
			$t = $(this),
			$tH = parseInt(($t.positionInfo()+$t.innerHeight()/2)-$('.cont_wrap').positionInfo()),
			$img = $('.cont_wrap').find('.scrolLBg'),
			$point = parseInt($t.positionInfo()),
			$val = parseInt(($wH+$wT - $point) * 0.2);

		if($wH+$wT > $point) {
			$img.css({'top': $tH - $val + 'px'});
		} else {
			$img.css({'top': '91.0833vw' });
		}
	});
}

$(window).on('load', function() {

	var OsNo = navigator.userAgent.toLowerCase(),
		 os = {
				Mac: /mac/.test(OsNo),
				Windows: /win/.test(OsNo)
		 }
	if (os.Windows) {
		 $(this).impulse();
	}

});