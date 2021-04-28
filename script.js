
function val(id){
    document.getElementById('display').value+=id;
}

function clea(){
    var a=" "+document.getElementById('display').value;
    document.getElementById('display').value=a[0];
}

function del(){
    var a=document.getElementById('display').value;
    document.getElementById('display').value=a.slice(0,a.length-1);
}
function cal(){
    var a=document.getElementById('display').value;
    var y=eval(a)
    document.getElementById('display').value=y;
}


