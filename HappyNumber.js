var val = 19;
function abc(num){
var temp = 0;
var arr = String(num).split("");
for(var i=0;i<arr.length;i++){
	temp += arr[i]*arr[i];
}

if(temp == 1){
	alert("Happy Number");
	return;
}

if(temp == val){
	alert(Not "Happy Number");
	return;
}

abc(temp)
}

