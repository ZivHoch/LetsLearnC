/***************CODE FUNCTIONS************* */
(function () {
	for (var tags = ['main', 'figure', 'figcaption'], i = 0; i < tags.length; i++) {
		document.createElement(tags[i]);
	}
})();

(function () {
	if (typeof (window.getComputedStyle) == 'undefined') {
		return;
	}

	var pre = document.getElementsByTagName('pre');

	for (var len = pre.length, i = 0; i < len; i++) {
		var code = pre[i].getElementsByTagName('code').item(0);
		if (!code) {
			code = pre[i].getElementsByTagName('samp').item(0);
			if (!code) {
				continue;
			}
		}

		var column = document.createElement('div');
		column.setAttribute('aria-hidden', 'true');

		for (var n = 0; n < code.innerHTML.split(/[\n\r]/g).length; n++) {
			column.appendChild(document.createElement('span'));
		}

		pre[i].insertBefore(column, code);
		pre[i].className = 'line-numbers';
	}

})();

/**************SIDENAVBAR FUNCTIONS*********** */
function openOrCloseNav(flag, flag2) {
	document.getElementById("mySidenav").style.width = (flag) ? ("250px") : ("0");
	document.getElementById("main").style.marginRight = (flag2) ? ("250px") : ("0");
}

var imgs;
var swipeOptions = {
	triggerOnTouchEnd: true,
	swipeStatus: swipeStatus,
	allowPageScroll: "vertical",
	threshold: 75
};

$(function () {
	if (document.getElementById("the_main_id").style.width <= 1024) {
		imgs = $("#topPage");
		imgs.swipe(swipeOptions);
	}
});

function swipeStatus(event, phase, direction, distance) {
	if ((phase == "move") && (direction == "left")) {
		var duration = 0;
		if (direction == "left") {
			openOrCloseNav(1, 0);
		}
	}
}