//Code your solutions in this file
const fiveToOneHundred = ()=>{
    for(let x =5;x<=100;x++){
        console.log(x)
    }
}
fiveToOneHundred()

const multiplesOfThree = ()=>{
    for(let x =0;x<=100;x++){
        x%3==0?console.log(x):''
    }

}

multiplesOfThree()

const multiplesOfThreeOrFive = ()=>{
    for(let x =0;x<=100;x++){
        if(x%3 == 0){
            console.log(x)
        } else if(x%5 == 0){
            console.log(x)
        }
    }

}
multiplesOfThreeOrFive()

const untilNum = (n)=>{
    for(let x =0;x<=n;x++){
        console.log(x)
    }

}
untilNum(5)

const multiply = (n1,n2)=>{
    return n1*n2
}

