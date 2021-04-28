function swapByValue(varOne, varTwo) { 
    console.log("Before Swapping by Value Method"); 
    console.log("varOne =" + varOne +" varTwo =" +varTwo); 
    varOne=varOne-varTwo;
    varTwo=varOne+varTwo;
    varOne=varTwo-varOne;
    console.log("After Swapping by Value Method"); 
    console.log("varOne =" + varOne +" varTwo =" +varTwo); 
    
  } 
let varOne = 10; 
let varTwo = 20; 
swapByValue(varOne, varTwo) 


function swapByReference(varObj) { 
    console.log("Before Call by Reference Method"); 
    console.log(varObj);
    
    var t=varObj.a ; 
    varObj.a=varObj.b;
    varObj.b=t;
    console.log("After Call by Reference Method");
     console.log(varObj);
    
  } 
let varObj = {a:1,b:5};
swapByReference(varObj) 
  
  
  