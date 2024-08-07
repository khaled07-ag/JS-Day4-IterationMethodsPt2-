const temperatures = [22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];
const greater = temperatures.filter((num)=>{
    return num>=25;
});
console.log(greater);
const less = temperatures.filter((num)=>{
    return num<20;
});
console.log(less);
const fer = temperatures.map((num)=>{
    return (num * 9/5) + 32.;
});
console.log(fer);
const feel = temperatures.map((num)=>{
    if(num>=25){
        return "Warm";
    }else if(num<=24&&num>=20){
        return "Mild";
    }else if(num<20){
        return "Cool";
    }
});
console.log(feel);
let max = [0];
let min= temperatures[0];
const Highest = temperatures.forEach((num)=>{
    if(max<num ){
        max = num
    }
})
console.log(max);
const lowest = temperatures.forEach((num)=>{
    if(min>num ){
        min = num
    }
})
console.log(min)