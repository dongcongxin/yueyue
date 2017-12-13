$(function(){
	  
	   change(".hidden","隐藏/显示","显示/隐藏");
	   change(".yueyue span","+","-"); 
       collection();	
       close();	 
	   playMusic();	
     
	})
	 // 显示与隐藏
	 function change(ele,showText, hideText){
		$(ele).each(function(){
			 $(this).click(function(){
				 if($(this).parent().next().is(":visible")){
					 $(this).parent().next().hide("slow");
					 $(this).text(showText);
				 }else{
					 $(this).parent().next().show("slow");
					 $(this).text(hideText); 
				 }
				})  
		}) 
	}
	 //收藏链接总数
	function collection(){ 
        var a =$(".xinxin li").length;
	    var b =$(".yueyue li").length-$(".yueyue li ul").length;
	    $("#white").animate({ width: 0,left:"250px"}, 1000 ,function(){
		$("#vs").fadeIn("slow",function(){
			$("#all").html(a+b);$("#aa").html(a);$("#bb").html(b);
			var newLeft = a/(a+b)*500-20 + "px"; //20为vs 的一半
			$("#vs").animate({left:newLeft}, 1000);
			$("#red").animate({width:newLeft}, 1000);             
		});
        })
	}
	// 一键关闭和一键开启功能
     function close(){ 
	   $(".close").click(function(){
		  if($(".close").text().match("一键关闭")){
		      $(".nav_list").hide("slow"); 
			  $(this).text("一键开启");
		  }else{
		      $(".nav_list").show("slow");
			  $(this).text("一键关闭");
		  }
	   })
	 }
	// 背景音乐部分
	 function playMusic(){
	   $("#music_btn").click(function(){
		  var music = document.getElementById("music");
		   if(music.paused){
			 music.play();
			 $("#music_btn").attr("src","images/play.gif");
		   }else{
			  music.pause();
			 $("#music_btn").attr("src","images/pause.gif");
		  }
	   })
	} 