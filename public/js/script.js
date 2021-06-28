const heroImg= document.getElementById('heroImg');

heroImg.addEventListener('mouseenter', function(event){
    event.currentTarget.classList.add('old-pic');
    event.currentTarget.classList.remove('new-pic');
});

heroImg.addEventListener('mouseleave', function(event){
    event.currentTarget.classList.add('new-pic');
    event.currentTarget.classList.remove('old-pic');

});

const burgerIcon = document.querySelector('.navbar-burger');
const burgerMenu = document.querySelector('#navbarPortfolio');
const burgerDropDown = document.querySelector('.navbar-link');

burgerIcon.addEventListener('click', function (event) {
  burgerMenu.classList.toggle('is-active');
  const burgerItemDropDown = document.querySelector('.navbar-dropdown');
  burgerItemDropDown.style.display = 'none';
});
burgerDropDown.addEventListener('click', function (event) {
  const burgerItemDropDown = document.querySelector('.navbar-dropdown');

  if (burgerItemDropDown.style.display === 'none') {
    burgerItemDropDown.style.display = 'block';
  }
  else {
    burgerItemDropDown.style.display = 'none';
  }
});
