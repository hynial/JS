// x...y.... < {1,2,3,4,5,6,7,8}
// y3 - x3 = 1;
// y2 + x2 = 9;
// y1 + x1 = 8;
// y - x = 2;
// 例如 ：x =1 ;y = 3; x1 = 2; y1= 6; x2 = 4; y2 = 5; y3 = 8; x3 = 7 
var values = [2,8,9,1];
Array.prototype.remove = function(dx) 
{ 
    if(isNaN(dx)||dx>this.length){return false;} 
    this.splice(dx,1); 
} 

var x,y,x1,y1,x2,y2,x3,y3,mark =0;
var rstArr = new Array(8);
for(var j = 0; j < 6; j++){
	rstArr = new Array();
	eightArr = new Array(1, 2, 3, 4, 5, 6, 7, 8);
	x = j + 1; 
	y = x + values[0]; 
	rstArr[0]=(x); eightArr.remove(eightArr.indexOf(x));
	rstArr[1]=(y); eightArr.remove(eightArr.indexOf(y));
	console.log(rstArr+"-"+eightArr);
	
	var trstArr = rstArr.slice(0);// slice(0)和concat()都是数组的复制，不能用=赋值的方式，js中表示引用的赋值，修改会相互影响
	var teightArr = eightArr.concat();

	for(var ii = 0; ii < teightArr.length - 1; ii++){
		rstArr = trstArr.slice(0);
		eightArr = teightArr.concat();
		x3 = teightArr[ii];
		y3 = x3 + values[3];
		if(eightArr.indexOf(y3) > -1){
			rstArr[2]=(x3); eightArr.remove(eightArr.indexOf(x3));
			rstArr[3]=(y3); eightArr.remove(eightArr.indexOf(y3));
			console.log(rstArr+"-"+eightArr);

			var trstArr1 = rstArr.slice(0);
			var teightArr1 = eightArr.concat();
			for(var jj = 0; jj < teightArr1.length - 1; jj++){
				rstArr = trstArr1.slice(0);
				eightArr = teightArr1.concat();
				x2 = teightArr1[jj];//console.log(x2+'.'+jj);
				y2 = values[2] - x2;
				if(eightArr.indexOf(y2) > -1){
					rstArr[4]=(x2); eightArr.remove(eightArr.indexOf(x2));
					rstArr[5]=(y2); eightArr.remove(eightArr.indexOf(y2));
					console.log(rstArr+"-"+eightArr);
					if(eightArr[0]+eightArr[1] == values[1]){
						rstArr[6]=(eightArr[0]);
						rstArr[7]=(eightArr[1]);
						mark++;
						console.log(rstArr);
					}
				}else{
					continue;
				}
			}
		}else{
			continue;
		}

	}
}
if(mark == 0){
	console.log("None");
}else{
	console.log("Find : "+mark);
}
