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

const add = (n1,n2)=>{
    return n1 == n2? n1*n2: n1+n2
}

const isNegative = (n)=>{
    return n<0 
}

const triangleArea = (n1,n2)=>{
    return n1*n2*(1/2) 
}

const bt2040 = (n)=>{
    return (n>20 && n<40)
}

const largest = (n1,n2,n3)=>{
    return n1>n2?n1>n3?n1:n3:n2>n3?n2:n3
}
console.log(largest(90,40,80))

const abs19 = (num) =>{
    return num>19?num-19:19-num
}

const revname = (str) =>{
    return str.split("").reverse().join("")
}

const alpheba = (str)  => {
const obj = {
  a:"b", b:"c", c:"d", d:"e", e:"f", f:"g", g:"h", h:"i", i:"j", j:"k",
  k:"l", l:"m", m:"n", n:"o", o:"p", p:"q", q:"r", r:"s", s:"t", t:"u",
  u:"v", v:"w", w:"x", x:"y", y:"z", z:"a"
};

let bin=''
    for(let char of str){
bin+=obj[char]
}
    return bin
}