var players = [{
	"name": "Ben Davies",
	"img": "img/davies.png"
},
{
	"name": "Steven Bergwijn",
	"img": "img/bergwijn.png"
},
{
	"name": "Toby Alderwereld",
	"img": "img/alderweireld.png"
},
{
	"name": "Harry Kane",
	"img": "img/kane.png"
},
{
	"name": "Hugo lloris",
	"img": "img/lloris.png"
},
{
	"name": "Heung Min Son",
	"img": "img/son.png"
},
{
	"name": "Harry Winks",
	"img": "img/winks.png"
},
{
	"name": "Moussa Sissoko",
	"img": "img/sissoko.png"
},
{
	"name": "Davison Sanchez",
	"img": "img/sanchez.png"
},
{
	"name": "Serge Reguilon",
	"img": "img/reguilon.png"
},
{
	"name": "Lucas Moura",
	"img": "img/moura.png"
},
];

var selectedimage;
var selectedName;
var checkimage;
var checkName;
var countimage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var countname = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const player = document.querySelectorAll(".players");
const namePlayer = document.querySelectorAll(".namePlayer");

//geeft border aan de spelers
function selectimage(id){
	if (selectedimage == undefined) {
		//geeft witte border aan de speler
		document.getElementById(id).classList.add("borders");
		selectedimage = id;
		checkimage = document.getElementById(id).src;
	}else{
		//removes border when another player or name is selected
		document.getElementById(selectedimage).classList.remove("borders");
		document.getElementById(id).classList.add("borders");
		selectedimage = id;
		checkimage = document.getElementById(id).src;
	}
	checkimage = checkimage.substring(checkimage.indexOf("img"));
	console.log(checkimage);
	checkMatch();
}

player.forEach(player => {
	//onclick voor despeler
	player.onclick = function(){ selectimage(player.id); }
});

//Geeft border aan de namen
function selectName(id){
	if (selectedName == undefined) {
		document.getElementById(id).classList.add("borderName");
		selectedName = id;
	}else{
		document.getElementById(selectedName).classList.remove("borderName");
		document.getElementById(id).classList.add("borderName");
		selectedName = id;
	}
	checkName = document.getElementById(id).innerHTML;
	console.log(checkName);
	checkMatch();
}

namePlayer.forEach(namePlayer => {
	//onclick voor de spelersnamen
	namePlayer.onclick = function(){ selectName(namePlayer.id); }
});

//Random images
for (var i=0; i<players.length; i++){
	var random = countimage[Math.floor(Math.random() * countimage.length)];
	var countCheck = countimage.indexOf(random);
	countimage.splice(countCheck, 1);

	document.getElementById("img-"+i).src= players[random].img;
}
//Random names 
for (var i=0; i<players.length; i++){
	var random = countname[Math.floor(Math.random() * countname.length)];
	var countCheck = countname.indexOf(random);
	countname.splice(countCheck, 1);
	document.getElementById("btn-"+i).innerHTML= players[random].name;
}

//Check voor de images
var score = 0;
var tries = 0;
function checkMatch(){
	var checkNoMatch;

	if (checkimage != undefined && checkName != undefined) {

		tries++;
		document.getElementById("tries").innerHTML = tries;

		for (var i=0; i < players.length; i++){
			if(players[i].img === checkimage && players[i].name === checkName){
				//als het match word de border groen
				checkNoMatch = false;
				document.getElementById(selectedimage).classList.add("greenBorder");
				document.getElementById(selectedimage).onclick = null;

				document.getElementById(selectedName).classList.add("greenBorder");
				document.getElementById(selectedName).onclick = null;
				
				score++;
				document.getElementById("score").innerHTML = score;

				checkimage = undefined;
				checkName = undefined;
				return;
			}else{
				checkNoMatch = true;
			}
		}
	}
	if (checkNoMatch == true){
		//geeft een rode border als het fout is
		document.getElementById(selectedimage).classList.add("redBorder");
		document.getElementById(selectedName).classList.add("redBorder");
		document.getElementById(selectedimage).classList.remove("borders");
		document.getElementById(selectedName).classList.remove("borderName");
		alert("This was a wrong move");
	}
}

document.getElementById('timer').innerHTML =
  "01:00";
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){alert('Your time is up!,  You Lose')}
  if(m<0){window.location = "smoelentrainer.html";}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}

var timeLeft = 90;
var tryTime = localStorage.getItem('tryTime');

if(tryTime != null){
	timeLeft = tryTime
}

var playersSet = localStorage.getItem('playersT');
let playerAmount = [];


