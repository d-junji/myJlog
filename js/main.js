
//スライドショー
$(document).ready(function(){
  // var windowWidth = jQuery(window).width();
  // var width = windowWidth / 2;
  $('#slider').bxSlider({
    auto: true,
    pager: false,
    controls: false,
    // slideWidth: width
  });
});


//フェードイン
$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});

$(function() {
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });
});

/* モーダルウィンドウ */
$(function(){
  var winScrollTop;
  $('.js-modal-open').each(function(){
      $(this).on('click',function(){
          //スクロール位置を取得
          winScrollTop = $(window).scrollTop();
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
      });
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
      return false;
  }); 
});