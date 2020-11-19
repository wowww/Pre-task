window.addEventListener('load', function(){ 
  const spark = document.getElementById('spark');

  spark.classList.add('spark-show');
})

const popupBtn = document.querySelector('.popup-button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

popupBtn.addEventListener('click', e => {
  modal.classList.remove('hidden');
})

closeBtn.addEventListener('click', e => {
  modal.classList.add('hidden');
})


const btn = document.getElementById('test');
console.log(btn)
