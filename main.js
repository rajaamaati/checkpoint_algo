let tabl=[6,6];
let tabl1=[-6,6];
let sum1=0;

for (let i=0;i<tabl.length;i++){
   sum1+=tabl[i]*tabl1[i];
   
   

}
console.log(sum1);
if(sum1==0){
console.log("orthogonaux");
}
else {
console.log("no orthogonaux");
}