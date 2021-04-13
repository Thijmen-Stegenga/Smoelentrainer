const button = document.querySelector('.submit');
button.onclick = submit

function submit(){
	var formValue = document.forms.timers;
	var formData = new FormData(formValue);
	var time = formData.get("timer");
	var players = formData.get("players");
	localStorage.setItem('tryTime', time);	
	localStorage.setItem('playersT', players);
	window.location.assign('smoelentrainer.html');
}