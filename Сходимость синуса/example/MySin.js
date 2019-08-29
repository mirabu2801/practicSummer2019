function addAreaUnderFunc(plot, fun, ranges, fillOpacity, fillPos, fillNeq, abs = false) {
    e = 0.001;
    var i;
    for (i = 0; i + 1 < ranges.length; ++i) {
        var k;
        var arr0 = [];
        arr0.push({x: ranges[i], y: 0});
        arr0.push({x: ranges[i], y: fun(ranges[i])});
        for (k = ranges[i]; k <= ranges[i + 1]; k += 0.01) {
            y = fun(k);
            if (abs) {
                y = Math.abs(y);
            }
            arr0.push({
                x: k,
                y: y
            });
        }
        arr0.push({x: ranges[i + 1] + e, y: fun(ranges[i + 1])});
        arr0.push({x: ranges[i + 1], y: 0});

        fill = fillPos;
        if (fun(ranges[i] / 2 + ranges[i + 1] / 2) < 0) {
            fill = fillNeq;
        }
        plot.addArea(arr0, {
            fillOpacity: fillOpacity,
            fill: fill
        });
    }
}

function addRimSumm(plot, fun, left, right, a, color = 6, move = Math.PI / 8, st_v=0) {
    function checkMax(x) {
        d = (x - Math.PI) % (Math.PI * 2);
        e = 0.001;
        return ((d - Math.PI * 2 > -e) || d < e);
    }
    function checkMin(x) {
        d = (x) % (Math.PI * 2);
        e = 0.001;
        return ((d - Math.PI * 2 > -e) || d < e);
    }
    xPrev = left;
    yPrev = st_v;
    prevMinX = prevMaxX = prevMaxY = prevMinY = 0;
    var x1;
    var y1;
    var RimMiddleSum = st_v;
    for (b = left + move; b <= right; b += move) {
        RimMiddleSum += rimSumm(fun, xPrev, b, 1);
        x1 = b;
        y1 = RimMiddleSum;
        var line = plot.addLine(xPrev,yPrev,x1,y1,{strokeWidth:1.5,color:color});
        if (a <= 1) {
            if (checkMin(x1)) {
                if (prevMinX != 0) {
                    plot.addLine(prevMinX, prevMinY, x1, y1, {strokeWidth:0.8,color:'black'})
                }
                prevMinX = x1;
                prevMinY = y1;
            } else if (checkMax(x1)) {
                if (prevMaxX != 0) {
                        plot.addLine(prevMaxX, prevMaxY, x1, y1, {strokeWidth:0.8,color:'black'})
                    }
                    prevMaxX = x1;
                    prevMaxY = y1;
                }
        }
        xPrev = x1;
        yPrev = y1;
    }
    return RimMiddleSum;
}

function rimSumm(fun, left, right, n) {
    res = 0;
    for (var i = 0; i < n; i++) {
        res += fun(left + i / n * (right - left));
    }
    return res / n * (right - left);
}

var S = "условно сходится";
var text0 = "график sinx/(x^a) на [PI/4,+inf] при a = ";

let e = 0.000001, maxright = 100;

function changeRange(value) {
    p1.removeAll();
    pow = value;

    addAreaUnderFunc(p1, mathFunction, ranges, 1, 1, 3);
    //построение функции
    var func = p1.addFunc(mathFunction, options);

    //построение суммы (средней суммы Римана):

    addRimSumm(p1, mathFunction, options.left, maxright, pow);
    summ = addRimSumm(p1, mathFunctionAbs, options.left, maxright, 2, 4);
    addRimSumm(p1, mathFunctionAbs, maxright, maxright * 10, 2, 4, 10, summ);
    if (value  > 1) {
        S = "абсолютно сходится";
    } else {
        if (value > 0) {
            S="условно сходится";
        } else {
            S="расходится";
        }
    }
    range.setText(text0 + value + " " + S) ;
}

var S3 = "расходится";
var text2 = "При a = "; text3 = " на (0, 1]";

function addRimSumm3() {
    var xPrev = 1, yPrev = 0, x1, y1, RimMiddleSum = 0, move = 0.01, left=e, right=1;
    move = 0.2;
    cons = Math.pow(2, -move);
    x = move;
    for (var b = cons; x < maxright * 2; x += move) {
        RimMiddleSum += rimSumm(mathFunction2,  b, xPrev, 20);
        x1 = b;
        y1 = RimMiddleSum;
        var line = p3.addLine(x - move,yPrev,x,y1,{strokeWidth:1.5,color:4});
        xPrev = x1;
        yPrev = y1;
        b *= cons;
    }
}


function changeRange3(value3) {
    p3.removeAll();
    pow2 = value3;
    addRimSumm3();
    if (value3 < 2) {
        S3 = "сходится";
    }
    else { S3="расходится";}
    range3.setText(text2 + value3 + ' интеграл ' + S3 + text3) ;

}


let options = {
    left: Math.PI/4,
    right: maxright,
    top: 2,
    bottom: -2,
    strokeWidth:1.5,
}

var pow = 1;

var mathFunction = function (x) {
    return Math.sin(x)/Math.pow(x,pow);
}

var mathFunctionAbs = function (x) {
    return Math.abs(mathFunction(x));
}

var mathFunction2 = function (x) {
    return Math.sin(x)/Math.pow(x,pow2);
}

var mathFunctionAbs2 = function (x) {
    return Math.abs(mathFunction2(x));
}

maximums = []
minimums = []

for (var i = Math.PI / 2; i < maxright; i += Math.PI * 2) {
    maximums.push(i);
    if (i + Math.PI < maxright) {
        minimums.push(i + Math.PI);
    }
}

var container = new PlotContainer("plot");

/////////////////////////////////первый график///////////////////////////////////
var controls1 = new app.Controls(container.addEmptyDiv());
var p1 = container.addPlot({left:-0.5, right:maxright, top:2, bottom:-2, height:400, width:750});

ranges = [options.left];
for (var i = 1; i * Math.PI < maxright; i++) {
    ranges.push(i * Math.PI);
}
ranges.push(maxright);

addAreaUnderFunc(p1, mathFunction, ranges, 1, 1, 3);
var func = p1.addFunc(mathFunction, options);

addRimSumm(p1, mathFunction, options.left, maxright, pow);
summ = addRimSumm(p1, mathFunctionAbs, options.left, maxright, 2, 4);
addRimSumm(p1, mathFunctionAbs, maxright, maxright * 10, 2, 4, 16, summ);

var range = controls1.addRange(changeRange, text0 + "1 " + S, -1, 3, 0.02, 1);

////////////////////////////////////третий график///////////////////////////////////////
var controls3 = new app.Controls(container.addEmptyDiv());
var p3 = container.addPlot({left:-0.2, right:maxright * 1.5, top:700, bottom:-0.5, height:400, width:500});

pow2 = 2;

var range3 = controls3.addRange(changeRange3, text2 + "2 интеграл " + S3 + text3, 1, 3, 0.01, 2);
addRimSumm3()