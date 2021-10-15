// let total =document.getElementsByClassName('total');
// let increment = document.getElementsByClassName('plus');
// let decrement =document.getElementsByClassName('minus');
// console.log(total);

// //event for increment button
// let count =0;
// increment.addEventListener("click", function(e){
//  count=count+1;
//  total[0].innerHTML = count;
// //  console.log(count);
// });
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let counterValue = document.querySelector("#counterValue");

let counter = 0;
increment.addEventListener("click" , (e)=>{
  e.preventDefault();
    counter++;
    counterValue.innerText = `${counter}people`;
})
;
decrement.addEventListener("click" , (e)=>{
  e.preventDefault();
   
    if(counter<=0){
      counter = 0;
      counterValue.innerText = `${counter}people`;
    }else{
      counter--;
      counterValue.innerText = `${counter}people`;
    }
    
});

