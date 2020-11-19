window.addEventListener('load', function(){ 
  const spark = document.getElementById('spark');

  spark.classList.add('spark-show');
})

const shadow = document.querySelector('.bg');
const popupBtn = document.querySelector('.popup-button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

popupBtn.addEventListener('click', e => {
  modal.classList.add('bg');
  modal.classList.remove('hidden');
})

closeBtn.addEventListener('click', e => {
  modal.classList.remove('bg');
  modal.classList.add('hidden');
})


const btn = document.getElementById('test');
console.log(btn)
