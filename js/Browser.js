/*
   检测浏览量
*/
function browser(element) {
	
    if (localStorage.pagecount) {
        localStorage.pagecount = Number(localStorage.pagecount) + 1;
    } else {
        localStorage.pagecount = 1;
    }

    element.innerHTML = "阅读量:"+localStorage.pagecount+"次";
    // localStorage.clear();
}

/*在帮助页面中检测浏览器*/
var badge =document.getElementById("reading");
browser(badge);