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
				var tlLoad = gsap.timeline();

                tlLoad.to(".inner__transition", {
                    delay: 0.3,
					scaleY: 0,
                    ease: "power4.out",
                    duration: 0.5
                })

                tlLoad.to(".transition", {
                    delay: 0,
					scaleY: 0,
                    ease: "power4.out",
                    duration: 0.7
                }, "-=0.3");
			}, 500);/**/
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