function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

var clickedTime; var createdTime; var reactionTime;

function makebox(){

	var time=Math.random();
	time=time*5000;

	setTimeout(function() {

		if (Math.random()>0.5) {
			document.getElementById("myBox").style.borderRadius="100px";
		} else {
			document.getElementById("myBox").style.borderRadius="0";	
		}

		var top=Math.random();
		top=top*250;
		var left=Math.random();
		left=left*250;

		document.getElementById("myBox").style.top=top+"px";
		document.getElementById("myBox").style.left=left+"px";
		document.getElementById("myBox").style.backgroundColor=getRandomColor();
		document.getElementById("myBox").style.display="block";
		createdTime=Date.now();

	}, time);
}

document.getElementById("myBox").onclick=function() {

	clickedTime = Date.now();
	reactionTime = (clickedTime - createdTime)/1000;
	document.getElementById("time").innerHTML=reactionTime;
	this.style.display="none"
	makebox();	
}

makebox();