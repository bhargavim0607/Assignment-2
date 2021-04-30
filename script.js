
function val(id){
    document.getElementById('display').value+=id;
   
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
        
        if(a[0]=='√'){
            var b=a.slice(1,);
            a="Math.sqrt("+b+")";
        }
        else if(a[a.length-1]=='√'){
           var b=a.slice(0,a.length-1);
           a="Math.sqrt("+b+")";
        }
    }
    if(a.includes('ln')){
        a=a.replace('ln','Math.log');
        a=a+')';
    }
    if(a.includes('!')){
        a=fact(new Number(a.slice(0,length-1)));
    }
    var y=eval(a);
    if(y==undefined){
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

function operator(id){
    console.log(document.getElementById('display').value);
    if(document.getElementById('display').value!=""){
        document.getElementById('display').value+=id;
    }else{
        document.getElementById('display').value=null;
    }
}


