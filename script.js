const menu = document.querySelector('.mobile');
const menuItems = document.querySelectorAll('.nav-tag');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const hamb = document.querySelector('.hamb');
closeIcon.style.display = 'none';
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}
hamburger.addEventListener('click', toggleMenu);
hamb.addEventListener('click', toggleMenu);
menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

// form validation
const form = document.querySelector('form');
const email = document.getElementById('email');
const textArea = document.getElementById('message');
const errorElement = document.getElementById('error');
function validateEmail(email) {
  const regEx = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  if (regEx.test(email)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateEmail(email.value)) {
    errorElement.innerText = `The email address needs to be in lowercase EG: ${email.value.toLocaleLowerCase()}`;
  } else {
    form.submit();
  }
});

