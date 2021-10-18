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

let counter = 1;
increment.addEventListener("click" , (e)=>{
  e.preventDefault();
    counter++;
    counterValue.innerText = `${counter}people`;
})
;
decrement.addEventListener("click" , (e)=>{
  e.preventDefault();
   
    if(counter<=1){
      counter = 1;
      counterValue.innerText = `${counter}people`;
    }else{
      counter--;
      counterValue.innerText = `${counter}people`;
    }
    
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.modal-button')
  .addEventListener('click', e => {
    // render the modal
    e.preventDefault();
    renderModal();
  })
});

function removeModal(){
  // find the modal and remove if it exists
  const modal = document.querySelector('.modal')
  if (modal) {
    modal.remove()
  }
}

function renderModal(element){
  // create the background modal div
  const modal = document.createElement('div')
  modal.classList.add('modal')
  // create the inner modal div with appended argument
  const child = document.createElement('div')
  child.className='child'
  child.innerHTML = `<h1 >THANKS FOR MAKING YOUR RESERVATION</h1>`
  // render the modal with child on DOM
  modal.appendChild(child)
  document.body.appendChild(modal)

  // remove modal if background clicked
  modal.addEventListener('click', event => {
    if (event.target.className === 'modal') {
      removeModal()
    }
  })
}


