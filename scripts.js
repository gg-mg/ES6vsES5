
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
    
function loopingFunction{

    let i=10

    const arr=[1,2,3,4,5]

    for(let i=0;i<arr.length;i++){
        if(arr[i]==2){
            return;
            //same work break;
        }
    }
    for(i of arr){
        //0,1,2,3,4
        if(arr[index]==2){
            return
        }
    }
}
    //return--------code stops when it finds return

    arr.map(function(){

    })

    arr.map(()=>{


    })