window.addEventListener('load', function(){ 
  const spark = document.getElementById('spark');
  const coin = document.getElementById('coin');
  const hideCoin = document.getElementById('hide-coin');

  spark.classList.add('spark-show');
  coin.classList.add('coin-view');
  hideCoin.classList.add('coin-show');

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
