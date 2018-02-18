numCookies = 0

document.getElementById('cookie').onclick = function() {
	numCookies += 1;
	document.getElementById('numCookies').innerHTML = numCookies
}