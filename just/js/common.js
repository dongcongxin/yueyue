/*
  @methods(showImgs): 插入配图
  
*/
   function showImgs(arr, elt) {
	   var imgs = arr;
	   $.each(imgs, function(index, data) {
		   var imgs = "";
		   imgs+= "<img src='"+data+"' width='210' height='200'>";
		   elt.append(imgs);  
	   })
   }
   
/*
  @methods(imgLen): 显示图片数量
*/
   
   function imgLen(_name) {
	   $(".thumbnail img").click(function() {
		confirm("选择右键-->图片另存为-->保存到桌面")
	  })
	   $(document).attr("title", _name + "配图目前有:" + $(".thumbnail img").length + "张");
   }