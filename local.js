const contactForm = document.querySelector('form');
contactForm.addEventListener('change', (e) => {
  e.preventDefault();
  const nameValue = document.getElementById('name').value;
  const emailValue = document.getElementById('email').value;
  const messageValue = document.getElementById('message').value;

  const formData = {
    nameValue,
    emailValue,
    messageValue,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
});

// const retrievedData = JSON.parse(localStorage.getItem('formData'));

// window.onload = () => {
//   // document.getElementById('name').value = retrievedData.nameValue;
//   document.getElementById('email').value = retrievedData.emailValue;
//   document.getElementById('message').value = retrievedData.messageValue;
// };