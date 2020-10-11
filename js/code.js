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
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginRight = "250px";

}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginRight = "0";
}