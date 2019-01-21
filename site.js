document.getElementById('syn').addEventListener('click', function(){
	var er=document.getElementById('er').value;
	var h=document.getElementById('h').value;
	var f=document.getElementById('f').value;
	var zo=document.getElementById('zo').value;
	var EL=document.getElementById('EL').value;

	var A=zo*Math.sqrt(er/2+0.5)/60+(er-1)*(0.23+(0.11/er))/(er-(0-1));
	var B=377*Math.PI/(2*zo*Math.sqrt(er));
	var W=8*h*Math.pow(Math.E, A)/(Math.pow(Math.E, 2*A)-2);
	var ee=(er-(0-1))/2+(er-1)/(2*Math.sqrt(12*h/W-(0-1)));
	var ko=20000000000*Math.PI*f/2997924580000;
	var L=EL*Math.PI/(180*(Math.sqrt(ee)*ko));

	document.getElementById('W').value=W;
	document.getElementById('L').value=L;
});

document.getElementById('anal').addEventListener('click', function(){
	var er=document.getElementById('er').value
	var h=document.getElementById('h').value;
	var f=document.getElementById('f').value;
	var W=document.getElementById('W').value;
	var L=document.getElementById('L').value;

	var ee=(er-(0-1))/2+(er-1)/(2*Math.sqrt(12*h/W-(0-1)));
	var ko=20000000000*Math.PI*f/2997924580000;
	var zo=0;
	if(W/h<=1) {
		zo=Math.log(8*h/W+W/4/h)*60/Math.sqrt(ee);
	}
	else {
		zo=120*Math.PI/Math.sqrt(ee)/(W/h-(0-1.393)-(0-0.667*Math.log(W/d+1.444)));
	}
	
	var EL=L*Math.sqrt(ee)*ko*180/Math.PI;

	document.getElementById('zo').value=zo;
	document.getElementById('EL').value=EL;
})
