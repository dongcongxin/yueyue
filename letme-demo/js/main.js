$(function() {
	// 设置边框线的高度 = 屏幕可视区域高度 - 头部的宽度
	var screenHeight = $(window).height() - 41;
	$(".effect").height(screenHeight);
    
	$(".btn").click(function() {
		var data = $(".textarea").val();
		$(".example").html(data);
	})

	$(".btn-js").click(function() {
		var data = $(".js").val();
		eval(data);
	})
})