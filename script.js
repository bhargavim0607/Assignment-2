
function val(id){
    a=document.getElementById('display').value;
    document.getElementById('display').value+=id;
    if(a.includes('ln(')){
        document.getElementById('display').value+=")";
    }
}

function clea(){
    document.getElementById('display').value=null;
}

function del(){
    var a=document.getElementById('display').value;
    document.getElementById('display').value=a.slice(0,a.length-1);
}
function cal(){
    var a=document.getElementById('display').value;
    if(a.includes('π')){
        a=a.replace('π','Math.PI');
        console.log(a);
    }
    if(a.includes('^')){
        a=a.replace('^','**');
    }
    if(a.includes('√')){
        a=a.replace('√','Math.sqrt()');
        if(!isNaN(a[0])){
            console.log(a);
            a=a.slice(1,a.length-1)+a[0]+a.slice(a.length-1,);
            console.log(a);
        }
        else if(!isNaN(a[a.length-1])){
            a=a.slice(0,a.length-2)+a[a.length-1]+a.slice(a.length-2,a.length-1);
            
        }
    }
    if(a.includes('ln')){
        a=a.replace('ln','Math.log');
    }
    if(a.includes('!')){
        a=fact(new Number(a[0]));
    }
    var y=eval(a);
    if(a==" "){
        y=null;
    }
    document.getElementById('display').value=y;
}
function fact(a){
    var n=1;
    if(a==0 || a==1){
        return n;
    }else{
        for(var i=a;i>=1;i--){
            n=n*i;
        }
        return n;
    }
}
console.log(eval(3*Math.PI));


