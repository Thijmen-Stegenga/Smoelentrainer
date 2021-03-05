  
const button = document.getElementById("submit");
button.onclick = submit;

function sumbit(){
	var formValues = document.forms.forms;
	var formData = new FormData(formValues);
	var time = formData.get("timer");
}

localStorage.setItem('tryTime', 'time');
