//Code your solutions in this file
const fiveToOneHundred = ()=>{
    for(let x =5;x<=100;x++){
        console.log(x)
    }
}
fiveToOneHundred()

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