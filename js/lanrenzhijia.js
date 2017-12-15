// 代码整理：懒人之家 lanrenzhijia.com
		$(function() {
			$("#demo1").paginate({
				count 		: 100,
				start 		: 1,
				display     : 8,
				border					: true,
				border_color			: '#fff',
				text_color  			: '#fff',
				background_color    	: 'black',	
				border_hover_color		: '#ccc',
				text_hover_color  		: '#000',
				background_hover_color	: '#fff', 
				images					: false,
				mouse					: 'press'
			});
			$("#demo2").paginate({
				count 		: 50,
				start 		: 5,
				display     : 10,
				border					: false,
				text_color  			: '#888',
				background_color    	: '#EEE',	
				text_hover_color  		: 'black',
				background_hover_color	: '#CFCFCF'
			});
			$("#demo3").paginate({
				count 		: 50,
				start 		: 20,
				display     : 12,
				border					: true,
				border_color			: '#BEF8B8',
				text_color  			: '#68BA64',
				background_color    	: '#E3F2E1',	
				border_hover_color		: '#68BA64',
				text_hover_color  		: 'black',
				background_hover_color	: '#CAE6C6', 
				rotate      : false,
				images		: false,
				mouse		: 'press'
			});
			$("#demo4").paginate({
				count 		: 50,
				start 		: 20,
				display     : 12,
				border					: false,
				text_color  			: '#79B5E3',
				background_color    	: 'none',	
				text_hover_color  		: '#2573AF',
				background_hover_color	: 'none', 
				images		: false,
				mouse		: 'press'
			});
			$("#demo5").paginate({
				count 		: 10,
				start 		: 1,
				display     : 7,
				border					: true,
				border_color			: '#fff',
				text_color  			: '#fff',
				background_color    	: 'black',	
				border_hover_color		: '#ccc',
				text_hover_color  		: '#000',
				background_hover_color	: '#fff', 
				images					: false,
				mouse					: 'press',
				onChange     			: function(page){
											$('._current','#paginationdemo').removeClass('_current').hide();
											$('#p'+page).addClass('_current').show();
											$('body,html').animate({scrollTop:0},200); //使整个页面回到顶部
										  }
			});
		});
		
		// 代码整理：懒人之家 lanrenzhijia.com