// 자세한 내용은 MDN의 https://developer.mozilla.org/en-US/docs/Web/API/Navigator.getUserMedia 참고

// 여러 브라우져를 다 지원하기 위한 부분
navigator.getUserMedia = ( navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

// html의 id가 v인 video 객체를 받을 자리
var vid;

// onload 되었을 때 처음 초기화 시킬 내용을 넣은 코드, init은 initialize를 짧게 쓴 것
var init = function() {
	// id가 v인 html요소를 video라고 놓고
	vid = document.querySelector('#v');
	
	// getUserMedia를 활용하여 video만 웹캠에서 받기
	// function (stream) 부분은 웹캠을 성공적으로 연결했을 때 실행되는 콜백 펑션 
	navigator.getUserMedia( {video: true}, function(stream) {
		// 비디오 스트림으로 부터 오브젝트 URL을 받아옴
		var url = URL.createObjectURL(stream);
		// vid의 src를 위에서 만든 URL로 연결, console.log(url); 을 해보길 권함
		vid.src = url;
	});
};

window.onload = function() {
	// 윈도우가 load되었을 때 init();을 한번 실행. 모든 html 구조가 해석된 뒤에 실행됨
	init();
};