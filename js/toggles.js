function Page(){

}
		Page.prototype = {
			constructor:Page,
			init:function(){
				this.showHide();
				this.fontSize();
				this.backColor();
				this.moRenDaxiao();
			},
			showHide:function(){
				$("h3").on("click",function(){
				$("#footer").toggle();
				$(".bg-title").hide();
				$(".rolling").css({
					"margin-top":"40px",
					"font-size":"14px"	
				})
				})
			},
			fontSize:function(){
				var fonts = 16;
				var heightl = 30;
				$(".js-ul1").on("click","li",function(){
					if($(this).index() === 0){
						fonts++;
						heightl++;
						$("ol li").css({
							fontSize:fonts,
							lineHeight:heightl+"px"
						})
					localStorage.fontsize = $("ol li").css("fontSize")
					}
					if($(this).index() === 1){
						$("ol li").css({
							fontSize:16,
							lineHeight:heightl +"px"
						})	
					localStorage.fontsize = $("ol li").css("fontSize")
					}
					if($(this).index() === 2){
						fonts--;
						heightl--;
						$("ol li").css({
							fontSize:fonts,
							lineHeight:heightl+"px"
						})	
					localStorage.fontsize = $("ol li").css("fontSize")
					}
				})
			},
			backColor:function(){
				$(".js-ul2").on("click","li",function(){
					var color1 = ($(this).css("background"))
					$("body").css({
						background:color1
					})
					// console.log()
				localStorage.colora = $("body").css("background")
				})
			},
			moRenDaxiao:function (){
				$("ol li").css({
					fontSize:parseInt(localStorage.fontsize) + "px"
						});
				 $("body").css({
						background:localStorage.colora
					}) 
			}
		}
		var page = new Page();
		page.init();