
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



//スクロールエフェクト
$(window).scroll(function() {
	//ウィンドウの高さを取得
	var windowH = $(window).height(),
	//スクロール量を取得
	scrollY = $(window).scrollTop();
	
	$('*').each(function() {
		//要素の位置（上端）を取得
		var thisPosition = $(this).offset().top;
		//要素の高さを取得
		var thisHeight = $(this).height();
		
		//要素が画面上に表示されているときにclass="effect"をつける
		if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
			$(this).addClass('effect');
			
		}else{
			$(this).removeClass('effect') ;
		}
	});
});

const menuItems = document.querySelectorAll('.menu li a');
const contents = document.querySelectorAll('.content');

menuItems.forEach(clickeditem => {
  // a 要素ですが、リンク先にページ遷移するという規定の動作があるのですが、それをキャンセルしたいので、こちらにイベントオブジェクトを渡して preventDefault() を呼んであげましょう
  clickeditem.addEventListener('click', e =>{
    e.preventDefault();

    menuItems.forEach(item => {
      item.classList.remove('active');
    });

    clickeditem.classList.add('active');

    contents.forEach(content => {
      content.classList.remove('active');
    });
    // content の id ですが、クリックされたメニュー項目の dataset.id で取得できるはずです
    document.getElementById(clickeditem.dataset.id).classList.add('active');
  });
});
