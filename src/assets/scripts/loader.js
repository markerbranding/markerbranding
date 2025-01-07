;(function(){
	function id(v){return document.getElementById(v); }
	function loadbar() {
    var ovrl = id("overlay"),
    log = id("logoloader"),
    prog = id("progress"),
    bgbar = id("progress__bg"),
    stat = id("progstat"),
    img = document.images,
    c = 0;
    tot = img.length;

		function imgLoaded(){
			c += 1;
			var perc = ((100/tot*c) << 0) +"%";
			prog.style.width = perc;
			stat.innerHTML = ""+ perc;
			if(c===tot) return doneLoading();
		}
		function doneLoading(){
			ovrl.style.opacity = 0;
			setTimeout(function(){ 
				ovrl.style.display = "none";
				gsap.to(".transition__top", { height: "0%", ease: "power1.in", duration: 0.4 });
				gsap.to(".transition__bottom", { height: "0%", ease: "power1.in", duration: 0.4 });
			}, 400);/**/
		}
		for(var i=0; i<tot; i++) {
			var tImg     = new Image();
			tImg.onload  = imgLoaded;
			tImg.onerror = imgLoaded;
			tImg.src     = img[i].src;
		}    
	}
	document.addEventListener('DOMContentLoaded', loadbar, false);
}());