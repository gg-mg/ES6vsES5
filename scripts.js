
//ES5 
function addNumber(firstNumber, secondNumber){

    //define your function 

firstNumber=2;
secondNumber=3;

var result=firstNumber + secondNumber;
console.log(result);

}

// or 
// addNumber(2,3);


//ES6
addNumber=(first,second) =>{
    console.log(first+second);
}
addNumber(2,3);


addNumber=(first,second) =>  console.log(first+second);

//Var-> Global scoped variable



function loopingFunction(){
    for (var i=0;i=5;i++){
        console.log("this is i inside of a for:"+i)
    }
console.log("this is i outside of the for: "+i)
}
loopingFunction()


function loopingFunction(){
    for (let i=0;i=5;i++){
        console.log("this is i inside of a for:"+i)
    }
console.log("this is i outside of the for: "+i)
}
loopingFunction()



function loopingFunction{
    for (let i=0;i<11;i++){
        for(let j=0;j<11;j++){
            //do something
            //Big O Notation
        }
    }
}
//121 loops

do{
    console.log("George")
}while(i>0)

while(true){
    console.log("I am")
}
    
    