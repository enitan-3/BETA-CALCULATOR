function dis (val){
    const display=document.getElementById("beta")
    display.value= (display.value)+val
    
}
function slove() {
    const display=document.getElementById("beta")
    let x= display.value
    let y=eval(x)
    display.value=y
}
function clr(){
    const display=document.getElementById("beta")
    display.value=""
}
function x2(){
    const display=document.getElementById("beta")
    display.value=Math.pow(display.value,2)
}
function x3(){
    const display=document.getElementById("beta")
    display.value=Math.pow(display.value,3)
}
function x4(){
    const display=document.getElementById("beta")
    display.value=Math.pow(display.value,4)
}
function x5(){
    const display=document.getElementById("beta")
    display.value=Math.pow(display.value,5)
}
function x6(){
    const display=document.getElementById("beta")
    display.value=Math.pow(display.value,6)
}
function x7(){
    const display=document.getElementById("beta")
    display.value=Math.pow(display.value,7)
}
function x9(){
    const display=document.getElementById("beta")
    display.value=Math.pow(display.value,9)
}
function ac(){
    const display=document.getElementById("beta")
    display.value=""
}
function on(){
    const display=document.getElementById("beta")
    display.value=""
}
function clear(){
    const display=document.getElementById("beta")
    display.value -=val
}
function sin(){
    const display=document.getElementById("beta")
    display.value=Math.sin(display.value*(Math.PI/180))
}
function asinh(){
    const display=document.getElementById("beta")
    display.value=Math.asinh(display.value)
}
function asin(){
    const display=document.getElementById("beta")
    display.value=Math.asin(display.value)
}
function sinh(){
    const display=document.getElementById("beta")
    display.value=Math.sinh(display.value)
}
   
function cosh(){
    const display=document.getElementById("beta")
    display.value=Math.cosh(display.value)
}
function cos(){
    const display=document.getElementById("beta")
    display.value=Math.cos(display.value*(Math.pi/180))
}


function tan(){
    const display=document.getElementById("beta")
    display.value=Math.tan(display.value*(Math.PI/180))
}
function acos(){
    const display=document.getElementById("beta")
    display.value=Math.acos(display.value)
}
function acosh(){
    const display=document.getElementById("beta")
    display.value=Math.acosh(display.value)
}
function tanh(){
    const display=document.getElementById("beta")
    display.value=Math.tanh(display.value)
}
   
function atanh(){
    const display=document.getElementById("beta")
    display.value=Math.atanh(display.value)
}
function cot(){
    const display=document.getElementById("beta")
    display.value=1/Math.tan(display.value)
}
   
function cotx(){
    const display=document.getElementById("beta")
    display.value=-1/Math.tanh(display.value )
}
function log(){
    const display=document.getElementById("beta")
    display.value=Math.log10(display.value)
}
function del(){
    let dis =document.getElementById("beta").value;
    document.getElementById("beta")
    .value=dis.substring(0, dis.length -1);
    // display.value=display.value.slice(0.-1)
}
function exp (){
    const display =document.getElementById("beta")
    display.value=Math.exp(display.value)
}
function solve(){
    const display=document.getElementById("beta")
    let numericalExpression =display.value
    let result=eval(numericalExpression);
    display.value=result;
}
function sqrt(){
    const display=document.getElementById("beta")
    display.value=Math.sqrt(display.value)
}
function pow(){
    const display=document.getElementById("beta")
    display.value=Math.pow(display.value, 1/2)


}

