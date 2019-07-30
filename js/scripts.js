var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': window.innerWidth,
  'tolerance': 70,
  'easing': 'linear'
});

slideout.disableTouch();

document.querySelector('.open-button').addEventListener('click', function() {
  slideout.open();
});

document.querySelector('.close-button').addEventListener('click', function() {
  slideout.close();
});
