document.getElementById('syn').addEventListener('click', function(){
	var er=document.getElementById('er').value;
	var h=document.getElementById('h').value;
	var f=document.getElementById('f').value;
	var zo=document.getElementById('zo').value;
	var EL=document.getElementById('EL').value;
	var h_u=document.getElementById('h_unit').value;

	var A=zo*Math.sqrt(er/2+0.5)/60+(er-1)*(0.23+(0.11/er))/(er-(0-1));
	var B=377*Math.PI/(2*zo*Math.sqrt(er));
	console.log(B);
	var W=8*h*Math.pow(Math.E, A)/(Math.pow(Math.E, 2*A)-2);
	var ee=(er-(0-1))/2+(er-1)/(2*Math.sqrt(12*h/W-(0-1)));
	console.log(ee);
	var ko=20000000000*Math.PI*f/2997924580000;
	console.log(ko);
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
	var h_u=document.getElementById('h_unit').value;
	var W_u=document.getElementById('W_unit').value;
	var L_u=document.getElementById('L_unit').value;

	var zo=1;
	var EL=1;

	document.getElementById('zo').value=zo;
	document.getElementById('EL').value=EL;
})
