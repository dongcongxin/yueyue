 function mobilePC(){
		
		  //判断是不是移动端打开的页面如果是就跳转到移动端页面
        var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");

        var browser = navigator.userAgent.toLowerCase();

        var isMobile = false;

        for (var i = 0; i < mobileAgent.length; i++) {
            if (browser.indexOf(mobileAgent[i]) != -1) {
                isMobile = true;

                //alert(mobileAgent[i]);

                location.href = 'https://dongcongxin.github.io/yueyue/mobilewenzhang.html';

                break;
            }
        }	
	}	
	mobilePC();