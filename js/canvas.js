function dibujo(){
	var canvas = document.getElementById('canvas');
	var con = canvas.getContext('2d');

	con.beginPath();
	con.arc(150,150,100,0,Math.PI*2, true);
	con.fillStyle="#edba1c";
	con.fill();
	con.strokeStyle="#edba1c";
	con.stroke();
	con.closePath();

	con.beginPath();
	con.arc(120,120,10,0, Math.PI*2, true);
	con.arc(180,120,10,0, Math.PI*2, true);
	con.fillStyle="#000";
	con.fill();
	con.closePath();

	con.beginPath();
	con.arc(125,115,3,0, Math.PI*2, true);
	con.arc(185,115,3,0, Math.PI*2, true);
	con.fillStyle="#fff";
	con.fill();
	con.closePath();

	con.beginPath();
	con.moveTo(90,160);
	con.arc(150,160,60,0,Math.PI, false);
	con.fillStyle="#ff003e";
	con.fill();
	con.strokeStyle="#ff003e"
	con.stroke();
	con.closePath();

	con.beginPath();
	con.arc(150,190,20,0,Math.PI*1, true);
	con.fillStyle="#000";
	con.fill();
	con.closePath();
	
	con.beginPath();
	con.arc(150,190,30,0,Math.PI, false);
	con.arc(135,190,15,0,Math.PI, true);
	con.arc(165,190,15,0,Math.PI, true);
	con.fillStyle="#e33331";
	con.fill();
	con.closePath();


	

}