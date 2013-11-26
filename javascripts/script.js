navigator.getUserMedia = ( navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

var vid;
var scene;


var init = function() {
	vid = document.querySelector('#v');
	navigator.getUserMedia( {video: true}, function(stream) {
	var url = URL.createObjectURL(stream);
	vid.src = url;
	});
    scene = document.querySelector('#scene'); 
};

window.onload = function() {
	init();
};


window.onmousemove = function(e) {
    var dx = (window.innerWidth / 2 - e.pageX)*0.1;
    var s = 'rotateY(' + dx + 'deg)'; 
    scene.style['-webkit-transform'] = s;
};