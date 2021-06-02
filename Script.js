
const ELEMENT_VIDEO = document.getElementById('video');
const ELEMENT_BTN = document.querySelector('.btn');
let isPlaying = false;


ELEMENT_VIDEO.addEventListener('play', function () {

	ELEMENT_VIDEO.muted = false;
	ELEMENT_VIDEO.volume = .2;
	
});


ELEMENT_BTN.addEventListener('click', function () {

	if(isPlaying) {
		ELEMENT_BTN.innerText = 'Play';
		ELEMENT_VIDEO.pause();
	} else {
		ELEMENT_BTN.innerText = 'Pause';
		ELEMENT_VIDEO.play();
	}
	isPlaying = !isPlaying;

});
