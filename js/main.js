document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('body').classList.add('menu-open');
});

document.querySelector('.menu-return').addEventListener('click', function(){
  document.querySelector('body').classList.remove('menu-open');
});

document.querySelector('.overlay').addEventListener('click', function(){
  document.querySelector('body').classList.remove('menu-open');
});
  