// function duplicates(){
//     let arr=[1,2,2,3,4,4,5,6,6,7]
//     return [new Set(arr)]
// }
// console.log(duplicates());

let arr=[1,2,2,3,4,4,5,6,6,7]
let s=[]
for(let i =0;i<arr.length;i++){
    if(!s.includes(arr[i])){
       s=s+" "+arr[i]
    //    s.push (arr[i])
    }
}
console.log(s);

