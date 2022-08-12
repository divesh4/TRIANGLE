
function fun1(){
let a = parseInt(document.getElementById('a').value);
let b = parseInt(document.getElementById('b').value);
let c = parseInt(document.getElementById('c').value);
    let s = (a+b+c)/2;
    let w1 = a*20;
    let w2 = b*20;
    let w3 = c*20;
    let rough1 = ((c*c+a*a-b*b)/(2*c*a));
    let rough2 =((c*c+b*b-a*a)/(2*b*c));
    let rough3 = ((a*a+b*b-c*c)/(2*a*b));
    const pi = Math.PI;
    let B = Math.acos( rough1 );
    let A = Math.acos(  rough2); 
    let C = Math.acos(  rough3);
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    let ans1=(A*180/pi);
    let ans2=(B*180/pi);
    let ans3 = (C*180/pi);
    let g = Math.sin(C);
    let h = g*w2;
    let g2 = Math.cos(C);
    let h2 = g2*w2;



    document.getElementById("angles1").innerHTML = ans1;
    document.getElementById("angles2").innerHTML = ans2;
    document.getElementById("angles3").innerHTML = ans3;
    document.getElementById("angles4").innerHTML = ans1+ans2+ans3;
    document.getElementById("angles5").innerHTML = s;
    document.getElementById("angles6").innerHTML = area;

var d = document.getElementById("mycanvas");
var ctx = d.getContext("2d");



ctx.beginPath();
ctx.moveTo(200,550);
ctx.lineTo(200+w1,550);
ctx.lineTo(200+w1-h2,550-h);
ctx.lineTo(200,550);
ctx.closePath();



ctx.lineWidth = 3;
ctx.strokeStyle = "#666666"
ctx.stroke();

ctx.fillStyle = "#FFCC00";
ctx.fill();


// ctx.font = "100px 'Courier New', Courier, monospace";
// ctx.filltext("A",200+w1-h2,550-h);
// ctx.filltext("B",200,550);
// ctx.filltext("B",200+w1,550);
}
