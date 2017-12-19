
    
    // Scroll page with easing effect
    $('.navbar ul li a, #documentation a').bind('click', function(e) {
        e.preventDefault();
        target = this.hash;
        $.scrollTo(target, 1500, {
        	easing: 'easeOutCubic'
        });

        $(".btn-navbar").click();
   	});

	    // Scroll page with easing effect
    $('#footerMenu a').bind('click', function(e) {
        e.preventDefault();
        target = this.hash;
        $.scrollTo(target, 1500, {
        	easing: 'easeOutCubic'
        });

        $(".btn-navbar").click();
   	});



	// Show/Hide Sticky "Go top" button
	$(window).scroll(function(){
		if($(this).scrollTop()>200){
			$(".go-top").fadeIn(200);
		}
		else{
			$(".go-top").fadeOut(200);	
		}
	});
	
	// Scroll Page to Top when clicked on "go top" button
	$(".go-top").click(function(event){
		event.preventDefault();

		$.scrollTo('#headerSection', 1500, {
        	easing: 'easeOutCubic'
        });
	});
	


$(function(){
    var mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    
    hljs.initHighlightingOnLoad();
    hljs.configure({useBR: true});
        jQuery('#mainSection').raindrops({color:'white',canvasHeight:100});
        jQuery('#thePlugin').raindrops({color:'#ddb3c2',canvasHeight:100});
        jQuery('#documentation').raindrops({color:'#3b3b3b',canvasHeight:100});

    if (!mobile){
        jQuery('#download').raindrops({color:'#99d4a5',canvasHeight:100});
        jQuery('#examples').raindrops({color:'#b5d5e1',canvasHeight:100});
        jQuery('#example1').raindrops();
        jQuery('#example2').raindrops({color:'#99d4a5',canvasHeight:200});
        jQuery('#example3').raindrops({color:'#ddb3c2', waveLength: 700,waveHeight: 50});
        jQuery('#example4').raindrops({color:'#a5d2da', density: 0.1, frequency: 20});
        jQuery('#example5').raindrops({color:'#f77b7b', canvasHeight:150, waveLength: 100, rippleSpeed: 0.05, density: 0.04});
        jQuery('#example6').raindrops({color:'#ffef92', canvasHeight:250, rippleSpeed: 0.01, frequency: 1, density: 0});

            jQuery('#examples .thumbnail').click(function(e){
                if (e.target.tagName!="CODE"){
                    jQuery(this).children('.blockDtl').toggleClass('active')
                }
            });
    } else{
        jQuery('#download').raindrops({color:'#b5d5e1',canvasHeight:100});
    }
});


