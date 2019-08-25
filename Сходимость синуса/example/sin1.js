var container = new PlotContainer("plot");

/////////////////////////////////первый график///////////////////////////////////
var controls1 = new app.Controls(container.addEmptyDiv());

maxright = 45;
var p1 = container.addPlot({left:-0.5, right:maxright, top:2, bottom:-2, height:400, width:750});


var options = {
	left: 1,
	right: maxright,
	top: 2,
	bottom: -2,
	strokeWidth:1.5,
	breaks : [0]
}

var pow = 1;
//определение функции:
var mathFunction = function (x) {
	return Math.sin(x)/Math.pow(x,pow);
}

//закрашивание площади под графиком
var i = Math.sin(1);
var j = Math.PI;

var arr0 = [];
arr0.push ({ x:1, y:0});
for (k = 1 ; k <= j ; k +=0.3) {
	arr0.push ({ x: k, y: mathFunction(k)});
}
arr0.push ({ x:j, y:0});
arr0.push ({ x:1, y:0});
p1.addArea(arr0, {
	fillOpacity: 1,  fill:1
});

for ( t = 1; t < 8; t++ ) {
	i=j;
	j=i+Math.PI;

	var arr1 = [];
	arr1.push ({ x:i, y:0});
	for (k = i ; k <= j ; k +=0.3) {
		arr1.push ({ x: k, y: mathFunction(k)});
	}
	arr1.push ({ x:j, y:0});
	arr1.push ({ x:i, y:0});
	p1.addArea(arr1, {
		fillOpacity: 1,  fill:3
	});

	i=j;
	j=i+Math.PI;

	var arr2 = [];
	arr2.push ({ x:i, y:0});
	for (m = i ; m <= j ; m +=0.3) {
		arr2.push ({ x: m, y: mathFunction(m)});
	}
	arr2.push ({ x:j, y:0});
	arr2.push ({ x:i, y:0});
	p1.addArea(arr2, {
		fillOpacity: 1,  fill:1
	});
}

//построение функции
var func = p1.addFunc( mathFunction, options);

//построение суммы (средней суммы Римана):
var i;
var n = 60;
var RimMiddleSum = 0;
var a = 1;
x0 = 1;
y0 = 0;
var x1;
var y1;

for (b = 1.2; b < maxright+1; b += 0.2){
	for (i = 1; i < n + 1; i++) {
		//серединная сумма римана: sum of [ f( (x_{i-1}+ x_{i}) / 2)*(x_i - x_{i-1}) ]
		RimMiddleSum = RimMiddleSum + mathFunction((a + i * (b - a) / n + a + (i-1) * (b - a) / n) / 2) * ((a + i * (b - a) / n) - (a + (i-1) * (b - a) / n) );
	}
	x1 = b;
	y1 = RimMiddleSum;
	var line = p1.addLine( x0,y0,x1,y1,{strokeWidth:1.5,color:6});
	x0 = x1;
	y0 = y1;
	RimMiddleSum = 0;
}




var S = "условная сходимость";

//ползунок:
function changeRange (value) {

	p1.removeAll();

	//закрашивание площади под графиком
	var area1;
	var area2;
	pow = value;

	var i = Math.sin(1);
	var j = Math.PI;

	var arr0 = [];
	arr0.push ({ x:1, y:0});
	for (k = 1 ; k <= j ; k +=0.3) {
		arr0.push ({ x: k, y: mathFunction(k)});
	}
	arr0.push ({ x:j, y:0});
	arr0.push ({ x:1, y:0});
	area1 = p1.addArea(arr0, {
		fillOpacity: 1,  fill:1
	});

	for ( t = 1; t < 8; t++ ) {
		i=j;
		j=i+Math.PI;

		var arr1 = [];
		arr1.push ({ x:i, y:0});
		for (k = i ; k <= j ; k +=0.3) {
			arr1.push ({ x: k, y: mathFunction(k)});
		}
		arr1.push ({ x:j, y:0});
		arr1.push ({ x:i, y:0});
		area2 = p1.addArea(arr1, {
			fillOpacity: 1,  fill:3
		});

		i=j;
		j=i+Math.PI;

		var arr2 = [];
		arr2.push ({ x:i, y:0});
		for (m = i ; m <= j ; m +=0.3) {
			arr2.push ({ x: m, y: mathFunction(m)});
		}
		arr2.push ({ x:j, y:0});
		arr2.push ({ x:i, y:0});
		area1 = p1.addArea(arr2, {
			fillOpacity: 1,  fill:1
		});

	}
	//построение функции
	var func = p1.addFunc( mathFunction, options);

	//построение суммы (средней суммы Римана):
	var i;
	var n = 60;
	var RimMiddleSum = 0;
	var a = 1;
	x0 = 1;
	y0 = 0;
	var x1;
	var y1;

	for ( b = 1.2; b < maxright+1; b += 0.2 ){
		for (i = 1; i < n + 1; i++) {
			//серединная сумма римана: sum of [ f( (x_{i-1}+ x_{i}) / 2)*(x_i - x_{i-1}) ]
			RimMiddleSum = RimMiddleSum + mathFunction((a + i * (b - a) / n + a + (i-1) * (b - a) / n) / 2) * ((a + i * (b - a) / n) - (a + (i-1) * (b - a) / n) );

		}
		x1 = b;
		y1 = RimMiddleSum;
		var line = p1.addLine( x0,y0,x1,y1,{strokeWidth:1.5,color:6});
		x0 = x1;
		y0 = y1;
		RimMiddleSum = 0;
	}


	if (value <= 1 && value >= 0) {
		S = "условная сходимость";
	}
	else if ( value > 1) { S="абсолютная сходимость";}
	else { S="расходится";}
	range.setText(text0 + value + text1 + S) ;

}

var text0 = "график sinx/(x^a) на [1,+inf] при a = ";
var text1 = "  , S = S(+)+ S(-) = ";
var range = controls1.addRange(changeRange, text0 + "1" + text1 + S, -2, 5, 0.01, 1);


//////////////////////////////второй график модуля синуса//////////////////////////
var controls2 = new app.Controls(container.addEmptyDiv());
var p2 = container.addPlot({left:-0.5, right:45, top:3.5, bottom:-0.5, height:400, width:750});

maxright = 45;

var options2 ={
	left: 1,
	right: maxright,
	top: 3.5,
	bottom: -0.5,
	strokeWidth:1.5,
	breaks : [0]
}

var pow2 = 1;
//определение функции:
var mathFunction2 = function (x) {
	return Math.abs(Math.sin(x)/Math.pow(x,pow2));
}

//закрашивание площади под графиком
var i = Math.sin(1);
var j = Math.PI;

var arr0 = [];
arr0.push ({ x:1, y:0});
for (k = 1 ; k <= j ; k +=0.3) {
	arr0.push ({ x: k, y: mathFunction2(k)});
}
arr0.push ({ x:j, y:0});
arr0.push ({ x:1, y:0});
p2.addArea(arr0, {
	fillOpacity: 1,  fill:1
});

for ( t = 1; t < 8; t++ ) {
	i=j;
	j=i+Math.PI;

	var arr1 = [];
	arr1.push ({ x:i, y:0});
	for (k = i ; k <= j ; k +=0.3) {
		arr1.push ({ x: k, y: mathFunction2(k)});
	}
	arr1.push ({ x:j, y:0});
	arr1.push ({ x:i, y:0});
	p2.addArea(arr1, {
		fillOpacity: 1,  fill:3
	});

	i=j;
	j=i+Math.PI;

	var arr2 = [];
	arr2.push ({ x:i, y:0});
	for (m = i ; m <= j ; m +=0.3) {
		arr2.push ({ x: m, y: mathFunction2(m)});
	}
	arr2.push ({ x:j, y:0});
	arr2.push ({ x:i, y:0});
	p2.addArea(arr2, {
		fillOpacity: 1,  fill:1
	});
}

//построение функции
var func2 = p2.addFunc( mathFunction2, options2);

//построение суммы (средней суммы Римана):
var i;
var n = 60;
var RimMiddleSum = 0;
var a = 1;
x0 = 1;
y0 = 0;
var x1;
var y1;

for (b = 1.2; b < maxright+1; b += 0.2){
	for (i = 1; i < n + 1; i++) {
		//серединная сумма римана: sum of [ f( (x_{i-1}+ x_{i}) / 2)*(x_i - x_{i-1}) ]
		RimMiddleSum = RimMiddleSum + mathFunction2((a + i * (b - a) / n + a + (i-1) * (b - a) / n) / 2) * ((a + i * (b - a) / n) - (a + (i-1) * (b - a) / n) );
	}
	x1 = b;
	y1 = RimMiddleSum;
	var line = p2.addLine( x0,y0,x1,y1,{strokeWidth:1.5,color:6});
	x0 = x1;
	y0 = y1;
	RimMiddleSum = 0;
}

var S2 = "расходится";

//ползунок:
function changeRange2 (value2) {

	p2.removeAll();

	//закрашивание площади под графиком
	var area1;
	var area2;
	pow2 = value2;

	var i = Math.sin(1);
	var j = Math.PI;

	var arr0 = [];
	arr0.push ({ x:1, y:0});
	for (k = 1 ; k <= j ; k +=0.3) {
		arr0.push ({ x: k, y: mathFunction2(k)});
	}
	arr0.push ({ x:j, y:0});
	arr0.push ({ x:1, y:0});
	area1 = p2.addArea(arr0, {
		fillOpacity: 1,  fill:1
	});

	for ( t = 1; t < 8; t++ ) {
		i=j;
		j=i+Math.PI;

		var arr1 = [];
		arr1.push ({ x:i, y:0});
		for (k = i ; k <= j ; k +=0.3) {
			arr1.push ({ x: k, y: mathFunction2(k)});
		}
		arr1.push ({ x:j, y:0});
		arr1.push ({ x:i, y:0});
		area2 = p2.addArea(arr1, {
			fillOpacity: 1,  fill:3
		});

		i=j;
		j=i+Math.PI;

		var arr2 = [];
		arr2.push ({ x:i, y:0});
		for (m = i ; m <= j ; m +=0.3) {
			arr2.push ({ x: m, y: mathFunction2(m)});
		}
		arr2.push ({ x:j, y:0});
		arr2.push ({ x:i, y:0});
		area1 = p2.addArea(arr2, {
			fillOpacity: 1,  fill:1
		});

	}
	//построение функции
	var func2 = p2.addFunc( mathFunction2, options2);

	//построение суммы (средней суммы Римана):
	var i;
	var n = 60;
	var RimMiddleSum = 0;
	var a = 1;
	x0 = 1;
	y0 = 0;
	var x1;
	var y1;

	for ( b = 1.2; b < maxright+1; b += 0.2 ){
		for (i = 1; i < n + 1; i++) {
			//серединная сумма римана: sum of [ f( (x_{i-1}+ x_{i}) / 2)*(x_i - x_{i-1}) ]
			RimMiddleSum = RimMiddleSum + mathFunction2((a + i * (b - a) / n + a + (i-1) * (b - a) / n) / 2) * ((a + i * (b - a) / n) - (a + (i-1) * (b - a) / n) );

		}
		x1 = b;
		y1 = RimMiddleSum;
		var line = p2.addLine( x0,y0,x1,y1,{strokeWidth:1.5,color:6});
		x0 = x1;
		y0 = y1;
		RimMiddleSum = 0;
	}


	if ( value2 >= 0 && value2 <= 1) {
		S2 = "расходится";
	}
	else { S2="сходится";}
	range2.setText(text02 + value2 + text12 + S2) ;

}

var text02 = "график | sinx/(x^a) | на [1,+inf] при a = ";
var text12 = "  , S = S(+)+ S(-) = ";
var range2 = controls2.addRange(changeRange2, text02 + "1" + text12 + S2, -2, 5, 0.1, 1);


////////////////////////////////////третий график///////////////////////////////////////
var controls3 = new app.Controls(container.addEmptyDiv());
var p3 = container.addPlot({left:-0.2, right:1, top:7, bottom:-0.5, height:400, width:500});
var e = 0.001;

var options3 ={
	left: e,
	right: 1,
	top: 7,
	bottom: -0.5,
	strokeWidth:1.5,
	breaks : [0]
}

pow = 1;
//закрашивание площади под графиком
var arr0 = [];
arr0.push ({ x:e, y:0});
var k;
for (k = e; k <= 1; k += 0.01) {
	arr0.push({
		x: k,
		y: mathFunction(k)
	});
}
arr0.push ({ x:1, y:mathFunction(1)});
arr0.push ({ x:1, y:0});
arr0.push ({ x:e, y:0});

p3.addArea(arr0, {
	fillOpacity: 1,
	fill:3
});

//функция:
var func3 = p3.addFunc( mathFunction,options3 );

var S3 = "расходится";

function changeRange3 (value3) {

	p3.removeAll();
	//закрашивание площади под графиком
	pow = value3;
	var arr0 = [];
	arr0.push ({ x:e, y:0});
	var k;
	for (k = e; k <= 1; k += 0.01) {
		arr0.push({
			x: k,
			y: mathFunction(k)
		});
	}
	arr0.push ({ x:1, y:mathFunction(1)});
	arr0.push ({ x:1, y:0});
	arr0.push ({ x:e, y:0});

	p3.addArea(arr0, {
		fillOpacity: 1,
		fill:3
	});

	//функция:
	func3 = p3.addFunc( mathFunction,options3 );

	if ( value3 >= 0 && value3 <= 1) {
		S3 = "сходится";
	}
	else { S3="расходится";}
	range3.setText(text2 + value3 + text3 + S3) ;

}

var text2 = "график sinx/(x^a) на [0,1] при a = ";
var text3 = "  ,  S = ";
var range3 = controls3.addRange(changeRange3, text2 + "1" + text3 + S3, -3, 3, 0.1, 1);




