$(function() {
  $('#slideR').hover(
  function(){
    $(this).stop(true).animate({'margin-right':'140px'},500);
  },
  function () {
    $(this).animate({'margin-right':'0'},500);
  }
);
});

//左側のサイドバー
$('#slideL').on('click',function(){
  var nav = document.getElementById("nav-icon");
	if($('#slideL').hasClass('off')){
		$('#slideL').removeClass('off');
		$(this).animate({'margin-left':'400px'},300).addClass('on');
    nav.innerHTML = "close..";
	}else{
		$('#slideL').addClass('off');
		$(this).animate({'margin-left':'0px'},300);
    nav.innerHTML = "open..";
	}
});

$(document).ready(function(){
	fit();
	$(window).resize(function(){
		fit();
	})
		function fit(){
			var h = $(window).height();
			$('.slide-inner').css("height",h);
		}
});