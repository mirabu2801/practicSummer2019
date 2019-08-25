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
	var mathFunction = function (x) {
            return Math.sin(x)/Math.pow(x,1);
    } 
	var func = p1.addFunc(mathFunction, options);
	//построение сумм:
	/*var s1=[
	0, 0.1840,    0.2832,    0.3391,    0.3703,    0.3870,    0.3948,    0.3971,    0.3962,    0.3936,
    0.3902,    0.3866,    0.3834,    0.3806,    0.3784, 0.3768,    0.3758,    0.3753,    0.3753,    0.3756,
    0.3761,    0.3767,    0.3774,    0.3780,    0.3786,   0.3790,    0.3793,    0.3795,    0.3796,    0.3796,
    0.3794,    0.3792,    0.3790,    0.3788,    0.3786,  0.3784,    0.3782,    0.3781,    0.3781,    0.3781,
    0.3781,    0.3782,    0.3783,    0.3784,    0.3785,  0.3786,    0.3787,    0.3787,    0.3788,    0.3788,
    0.3788,    0.3787,    0.3787,    0.3786,    0.3786,  0.3785,    0.3785,    0.3784,    0.3784,    0.3784,
    0.3784,    0.3784,    0.3784,    0.3785,    0.3785,  0.3785,    0.3786,    0.3786,    0.3786,    0.3786,
    0.3786,    0.3786,    0.3786,    0.3786,    0.3786,  0.3785,    0.3785,    0.3785,    0.3785,    0.3785,
    0.3785,    0.3785,    0.3785,    0.3785,    0.3785,  0.3785,    0.3785,    0.3785,    0.3786,    0.3786,
    0.3786,    0.3786,    0.3786,    0.3786,    0.3786,  0.3785,    0.3785,    0.3785,    0.3785,    0.3785,  0.3785];
	*/
	var i;
	var n = 30;
	var RimMiddleSum = 0;
	var a=1;
	x0 = 1;
	y0 = 0;
	var x1;
	var y1;
	
	for (b = 1.1; b < 46; b += 0.1){
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

	/*
    for (i=1; i< 31; i+= 0.3)
	{
	    var line = p1.addLine(i, s1[k],i+0.3, s1[k+1]); 
		k=k+1;
    } 
*/
	 

/*	//ползунок: 
function changeRange (value) {

	p1.removeAll();
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
	*/