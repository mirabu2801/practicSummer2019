var container = new PlotContainer("plot");

var controls1 = new app.Controls(container.addEmptyDiv());


var p1 = container.addPlot({left:-0.5, right:30, top:2, bottom:-2, height:400, width:700});

	 var options ={
	 left: 1,
	 right: 45, 
	 top: 2, 
	 bottom: -2, 
	 strokeWidth:1.5,
	 breaks : [0]
	 }
	 
	//закрашивание площади под графиком
	var i = Math.sin(1);
	var j = Math.PI; 

	var arr0 = [];
	arr0.push ({ x:1, y:0});
	for (k = 1 ; k <= j ; k +=0.1) {
	   arr0.push ({ x: k, y: Math.sin(k)/Math.pow(k,1)});
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
	for (k = i ; k <= j ; k +=0.1) {
	   arr1.push ({ x: k, y: Math.sin(k)/Math.pow(k,1)});
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
	for (m = i ; m <= j ; m +=0.1) {
	   arr2.push ({ x: m, y: Math.sin(m)/Math.pow(m,1)});
	}
	arr2.push ({ x:j, y:0});
	arr2.push ({ x:i, y:0});
	p1.addArea(arr2, {
		fillOpacity: 1,  fill:1
	});
	}
	//построение функции
	var func = p1.addFunc(function (x) {
		return Math.sin(x)/Math.pow(x,1);
	},options);
	 
	var S = "условная сходимость";

	//ползунок: 
function changeRange (value) {

	p1.removeAll();
	//закрашивание площади под графиком
	var area1;
	var area2;
	
	var i = Math.sin(1);
	var j = Math.PI; 

	var arr0 = [];
	arr0.push ({ x:1, y:0});
	for (k = 1 ; k <= j ; k +=0.1) {
	   arr0.push ({ x: k, y: Math.sin(k)/Math.pow(k,value)});
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
	for (k = i ; k <= j ; k +=0.1) {
	   arr1.push ({ x: k, y: Math.sin(k)/Math.pow(k,value)});
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
	for (m = i ; m <= j ; m +=0.1) {
	   arr2.push ({ x: m, y: Math.sin(m)/Math.pow(m,value)});
	}
	arr2.push ({ x:j, y:0});
	arr2.push ({ x:i, y:0});
	area1 = p1.addArea(arr2, {
		fillOpacity: 1,  fill:1
	});
	
	}
	//построение функции
	var func = p1.addFunc(function (x) {
		return Math.sin(x)/Math.pow(x,value);
	},options);
		
		if (value <= 1 && value >= 0) {
		   S = "условная сходимость";
		   }
		else if ( value > 1) { S="абсолютная сходимость";}
		else { S="расходится";}
		range.setText(text0 + value + text1 + S) ;
	 
	}
	 
	var text0 = "на [1,+inf] при a = ";
	var text1 = "  , S = S(+)+ S(-) = ";
	
	var range = controls1.addRange(changeRange, text0 + "1" + text1 + S, -2, 5, 0.1, 1);

var range0;
////!!!!!!
function changeButton1() {

    p1.removeAll();	
    var options ={
	 left: 1,
	 right: 45, 
	 top: 2, 
	 bottom: -2, 
	 strokeWidth:1.5,
	 breaks : [0]
	 }
	 
	//закрашивание площади под графиком
	var i = Math.sin(1);
	var j = Math.PI; 

	var arr0 = [];
	arr0.push ({ x:1, y:0});
	for (k = 1 ; k <= j ; k +=0.1) {
	   arr0.push ({ x: k, y: Math.abs(Math.sin(k)/Math.pow(k,1))});
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
	for (k = i ; k <= j ; k +=0.1) {
	   arr1.push ({ x: k, y: Math.abs(Math.sin(k)/Math.pow(k,1))});
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
	for (m = i ; m <= j ; m +=0.1) {
	   arr2.push ({ x: m, y: Math.abs(Math.sin(m)/Math.pow(m,1))});
	}
	arr2.push ({ x:j, y:0});
	arr2.push ({ x:i, y:0});
	p1.addArea(arr2, {
		fillOpacity: 1,  fill:1
	});
	}
	//построение функции
	var func = p1.addFunc(function (x) {
		return Math.abs(Math.sin(x)/Math.pow(x,1));
	},options);
	 
	var S = "расходится";

	//ползунок: 
function changeRange (value) {

	p1.removeAll();
	//закрашивание площади под графиком
	var area1;
	var area2;
	
	var i = Math.sin(1);
	var j = Math.PI; 

	var arr0 = [];
	arr0.push ({ x:1, y:0});
	for (k = 1 ; k <= j ; k +=0.1) {
	   arr0.push ({ x: k, y: Math.abs(Math.sin(k)/Math.pow(k,value))});
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
	for (k = i ; k <= j ; k +=0.1) {
	   arr1.push ({ x: k, y: Math.abs(Math.sin(k)/Math.pow(k,value))});
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
	for (m = i ; m <= j ; m +=0.1) {
	   arr2.push ({ x: m, y: Math.abs(Math.sin(m)/Math.pow(m,value))});
	}
	arr2.push ({ x:j, y:0});
	arr2.push ({ x:i, y:0});
	area1 = p1.addArea(arr2, {
		fillOpacity: 1,  fill:1
	});
	
	}
	//построение функции
	var func = p1.addFunc(function (x) {
		return Math.abs(Math.sin(x)/Math.pow(x,value));
	},options);
		
		
		if (value <= 1 ) {
		   S = "расходится";
		   }
		else { S="сходится";}
		range.setText(text0 + value + text1 + S) ;
	 
	}
	 
	var text0 = "на [1,+inf] при a = ";
	var text1 = "  , S = S(+)+ S(-) = ";
	if (range) {
    range.remove();
    }
	range = controls1.addRange(changeRange, text0 + "1" + text1 + S, -2, 5, 0.1, 1);
	
   if (range0) {
    range0.remove();
  }
  range0 = controls1.addButton( changeButton2, " | sin(x)/x^a | ");

}

function changeButton2() {

    p1.removeAll();  
  
	 var options ={
	 left: 1,
	 right: 45, 
	 top: 2, 
	 bottom: -2, 
	 strokeWidth:1.5,
	 breaks : [0]
	 }
	 
	//закрашивание площади под графиком
	var i = Math.sin(1);
	var j = Math.PI; 

	var arr0 = [];
	arr0.push ({ x:1, y:0});
	for (k = 1 ; k <= j ; k +=0.1) {
	   arr0.push ({ x: k, y: Math.sin(k)/Math.pow(k,1)});
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
	for (k = i ; k <= j ; k +=0.1) {
	   arr1.push ({ x: k, y: Math.sin(k)/Math.pow(k,1)});
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
	for (m = i ; m <= j ; m +=0.1) {
	   arr2.push ({ x: m, y: Math.sin(m)/Math.pow(m,1)});
	}
	arr2.push ({ x:j, y:0});
	arr2.push ({ x:i, y:0});
	p1.addArea(arr2, {
		fillOpacity: 1,  fill:1
	});
	}
	//построение функции
	var func = p1.addFunc(function (x) {
		return Math.sin(x)/Math.pow(x,1);
	},options);
	 
	var S = "условная сходимость";

	//ползунок: 
function changeRange (value) {

	p1.removeAll();
	//закрашивание площади под графиком
	var area1;
	var area2;
	
	var i = Math.sin(1);
	var j = Math.PI; 

	var arr0 = [];
	arr0.push ({ x:1, y:0});
	for (k = 1 ; k <= j ; k +=0.1) {
	   arr0.push ({ x: k, y: Math.sin(k)/Math.pow(k,value)});
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
	for (k = i ; k <= j ; k +=0.1) {
	   arr1.push ({ x: k, y: Math.sin(k)/Math.pow(k,value)});
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
	for (m = i ; m <= j ; m +=0.1) {
	   arr2.push ({ x: m, y: Math.sin(m)/Math.pow(m,value)});
	}
	arr2.push ({ x:j, y:0});
	arr2.push ({ x:i, y:0});
	area1 = p1.addArea(arr2, {
		fillOpacity: 1,  fill:1
	});
	
	}
	//построение функции
	var func = p1.addFunc(function (x) {
		return Math.sin(x)/Math.pow(x,value);
	},options);
		
		
		if (value <= 1 && value >= 0) {
		   S = "условная сходимость";
		   }
		else if ( value > 1) { S="абсолютная сходимость";}
		else { S="расходится";}
		range.setText(text0 + value + text1 + S) ;
	 
	}
	 
	var text0 = "на [1,+inf] при a = ";
	var text1 = "  , S = S(+)+ S(-) = ";
	if (range) {
    range.remove();
    }
	range = controls1.addRange(changeRange, text0 + "1" + text1 + S, -2, 5, 0.1, 1);
	
	  
  if (range0) {
    range0.remove();
  }
  range0 = controls1.addButton( changeButton1, " sin(x)/x^a ");

}

range0 = controls1.addButton( changeButton1, " sin(x)/x^a ");

/*
////////////////////////////////////////второй график///////////////////////////////////////////////
var controls2 = new app.Controls(container.addEmptyDiv());

var controls2 = new app.Controls(container.addEmptyDiv()); 
	var p2 = container.addPlot({left:-0.2, right:1, top:7, bottom:-0.5, height:400, width:500});
	var e = 0.001;
    
	var options2 ={
	 left: e,
	 right: 1, 
	 top: 7, 
	 bottom: -0.5, 
	 strokeWidth:1.5,
	 breaks : [0]
	 }


	//закрашивание площади под графиком
	var arr0 = [];
	arr0.push ({ x:e, y:0});
	var k;
	for (k = e; k <= 1; k += 0.01) {
	if ( Math.sin(k)/Math.pow(k,1) >= 0) {
		arr0.push({
			x: k,
			y: Math.sin(k)/Math.pow(k,1)
		});
		}
	}
	arr0.push ({ x:1, y:Math.sin(1)/Math.pow(1,1)});
	arr0.push ({ x:1, y:0});
	arr0.push ({ x:e, y:0});

	p2.addArea(arr0, {
		fillOpacity: 1,
		fill:3
	});

	//функция: 
	var func2 = p2.addFunc(function (x) {
		return Math.sin(x)/Math.pow(x,1);
	},options2);

	var S2 = "расходится";
	 
	function changeRange2 (value2) {

		p2.remove(func2);
		p2.remove(area0);
		
		//закрашивание площади под графиком
		var arr0 = [];
		arr0.push ({ x:e, y:Math.sin(e)/Math.pow(e,value2)});
		var m;
		for (m = e; m <= 1; m += 0.01) { 
		 if ( Math.sin(m)/Math.pow(m,value2) >= 0) {
			  arr0.push({
				   x: m,
				   y: Math.sin(m)/Math.pow(m,value2)
				});
			}
		}
		arr0.push ({ x:1, y:Math.sin(1)/Math.pow(1,1)});
		arr0.push ({ x:1, y:0});
		arr0.push ({ x:e, y:0});
		
		var area0 = p2.addArea(arr0, {
		   fillOpacity: 1,
		   fill:3
		});
		//функция
		func2 = p2.addFunc(function (x) {
			return Math.sin(x)/Math.pow(x,value2);
		}, options2);
		
		if (value2 >= 1 ) {
		   S2 = "расходится";
		   }
		else { S2="сходится";}
		range2.setText(text2 + value2 + text3 + S2) ;
	 
	}
	 
	var text2 = "на [0,1] при a = ";
	var text3 = "  ,  S = ";
	var range2 = controls2.addRange(changeRange2, text2 + "1" + text3 + S2, -3, 3, 0.1, 1);

var range00;

function changeButton1() {
    p2.removeAll();
	
    var e = 0.001;

	var options2 ={
	 left: e,
	 right: 1, 
	 top: 7, 
	 bottom: -0.5, 
	 strokeWidth:1.5,
	 breaks : [0]
	 }


	//закрашивание площади под графиком
	var arr0 = [];
	arr0.push ({ x:e, y:0});
	var k;
	for (k = e; k <= 1; k += 0.01) {
	if ( Math.abs(Math.sin(k)/Math.pow(k,1) >= 0)) {
		arr0.push({
			x: k,
			y: Math.abs(Math.sin(k)/Math.pow(k,1))
		});
		}
	}
	arr0.push ({ x:1, y:Math.abs(Math.sin(1)/Math.pow(1,1))});
	arr0.push ({ x:1, y:0});
	arr0.push ({ x:e, y:0});

	p2.addArea(arr0, {
		fillOpacity: 1,
		fill:1
	});

	//функция: 
	var func2 = p2.addFunc(function (x) {
		return Math.abs(Math.sin(x)/Math.pow(x,1));
	},options2);

	var S2 = "расходится";
	 
	function changeRange2 (value2) {

		p2.remove(func2);
		p2.remove(area0);
		
		//закрашивание площади под графиком
		var arr0 = [];
		arr0.push ({ x:e, y:Math.abs(Math.sin(e)/Math.pow(e,value2))});
		var m;
		for (m = e; m <= 1; m += 0.01) { 
		 if ( Math.abs(Math.sin(m)/Math.pow(m,value2)) >= 0) {
			  arr0.push({
				   x: m,
				   y: Math.abs(Math.sin(m)/Math.pow(m,value2))
				});
			}
		}
		arr0.push ({ x:1, y:Math.abs(Math.sin(1)/Math.pow(1,1))});
		arr0.push ({ x:1, y:0});
		arr0.push ({ x:e, y:0});
		
		var area0 = p2.addArea(arr0, {
		   fillOpacity: 1,
		   fill:1
		});
		//функция
		func2 = p2.addFunc(function (x) {
			return Math.abs(Math.sin(x)/Math.pow(x,value2));
		}, options2);
		
		if (value2 >= 1 ) {
		   S2 = "расходится";
		   }
		else { S2="сходится";}
		range2.setText(text2 + value2 + text3 + S2) ;
	 
	}
	 
	var text2 = "на [0,1] при a = ";
	var text3 = "  ,  S = ";
	if (range2) {
    range2.remove();
    }
    range2 = controls2.addRange(changeRange2, text2 + "1" + text3 + S2, -3, 3, 0.1, 1);
 
    
   if (range00) {
    range00.remove();
  }
  range00 = controls.addButton( changeButton2, "sin");

}

function changeButton2() {

  p2.removeAll();
  
  var controls2 = new app.Controls(container.addEmptyDiv()); 
	var p2 = container.addPlot({left:-0.2, right:1, top:7, bottom:-0.5, height:400, width:500});
	var e = 0.001;

	var options2 ={
	 left: e,
	 right: 1, 
	 top: 7, 
	 bottom: -0.5, 
	 strokeWidth:1.5,
	 breaks : [0]
	 }


	//закрашивание площади под графиком
	var arr0 = [];
	arr0.push ({ x:e, y:0});
	var k;
	for (k = e; k <= 1; k += 0.01) {
	if ( Math.sin(k)/Math.pow(k,1) >= 0) {
		arr0.push({
			x: k,
			y: Math.sin(k)/Math.pow(k,1)
		});
		}
	}
	arr0.push ({ x:1, y:Math.sin(1)/Math.pow(1,1)});
	arr0.push ({ x:1, y:0});
	arr0.push ({ x:e, y:0});

	p2.addArea(arr0, {
		fillOpacity: 1,
		fill:3
	});

	//функция: 
	var func2 = p2.addFunc(function (x) {
		return Math.sin(x)/Math.pow(x,1);
	},options2);

	var S2 = "расходится";
	 
	function changeRange2 (value2) {

		p2.remove(func2);
		p2.remove(area0);
		
		//закрашивание площади под графиком
		var arr0 = [];
		arr0.push ({ x:e, y:Math.sin(e)/Math.pow(e,value2)});
		var m;
		for (m = e; m <= 1; m += 0.01) { 
		 if ( Math.sin(m)/Math.pow(m,value2) >= 0) {
			  arr0.push({
				   x: m,
				   y: Math.sin(m)/Math.pow(m,value2)
				});
			}
		}
		arr0.push ({ x:1, y:Math.sin(1)/Math.pow(1,1)});
		arr0.push ({ x:1, y:0});
		arr0.push ({ x:e, y:0});
		
		var area0 = p2.addArea(arr0, {
		   fillOpacity: 1,
		   fill:3
		});
		//функция
		func2 = p2.addFunc(function (x) {
			return Math.sin(x)/Math.pow(x,value2);
		}, options2);
		
		if (value2 >= 1 ) {
		   S2 = "расходится";
		   }
		else { S2="сходится";}
		range2.setText(text2 + value2 + text3 + S2) ;
	 
	}
	 
	var text2 = "на [0,1] при a = ";
	var text3 = "  ,  S = ";
	if (range2) {
    range2.remove();
    }
	range2 = controls2.addRange(changeRange2, text2 + "1" + text3 + S2, -3, 3, 0.1, 1);

  
  if (range00) {
    range00.remove();
  }
  range00 = controls2.addButton( changeButton1, "|sin|");

}

range00 = controls2.addButton( changeButton1, "|sin|");
*/

