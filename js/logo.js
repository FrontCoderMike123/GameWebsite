(function() {

	function LOGO() {

	var CR = document.querySelector("#hex");
	TweenMax.to(CR, 1, {x:0, y:320, delay:1, repeat:-1, repeatDelay: 10});

	}

	window.addEventListener("load", LOGO, true);

})();