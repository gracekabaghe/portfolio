const data = [
  {
    projectName: 'TODO',
    projectDesktop: 'TODO',
    technology: 'Back End Dev',
    image: 'images/modal-todo.png',
    desktopImage: 'images/todo.png',
    description: 'Task management app for organization. Items can be added, edited, deleted or removed.',
    languages: ['Javascript', 'CSS', 'HTML'],
    desktopLanguages: ['Javascript', 'CSS', 'HTML'],
    link1: 'https://gracekabaghe.github.io/to-do/',
    link2: 'https://github.com/gracekabaghe/to-do',
    desktopLink1: 'https://gracekabaghe.github.io/to-do/',
    desktopLink2: 'https://github.com/gracekabaghe/to-do',
  },
  {
    projectName: 'Awesome Books',
    projectDesktop: 'Awesome Books',
    technology: 'Back End Dev',
    year: 2021,
    image: 'images/modal-awesome.png',
    desktopImage: '/images/popdesktimage.png',
    description: 'Simple web app that displays books - Add, Remove or Delete books',
    languages: ['CSS', 'Javascript', 'HTML'],
    desktopLanguages: ['CSS', 'Javascript', 'HTML'],
    link1: 'https://awesomebookshelf.netlify.app/',
    link2: 'https://github.com/gracekabaghe/Awesome-Books',
    desktopLink1: 'https://awesomebookshelf.netlify.app/',
    desktopLink2: 'https://github.com/gracekabaghe/Awesome-Books',
  },
  {
    projectName: 'Calculator',
    projectDesktop: 'Math Magicians',
    technology: 'Back End Dev',
    year: 2021,
    image: 'images/modal-calculator.png',
    desktopImage: '/images/calculator.png',
    description: 'Simple calculator that can perform addition, subtraction, Multiplication & Division',
    languages: ['CSS', 'Javascript', 'HTML'],
    desktopLanguages: ['CSS', 'Javascript', 'HTML'],
    link1: 'https://calculator-math-magicians.herokuapp.com/calculator',
    link2: 'https://github.com/gracekabaghe/math-magicians',
    desktopLink1: 'https://calculator-math-magicians.herokuapp.com/calculator',
    desktopLink2: 'https://github.com/gracekabaghe/math-magicians',
  },
  {
    projectName: 'Space Travelers Hub',
    projectDesktop: 'Space Traveler Hub',
    technology: 'Back End Dev',
    year: 2021,
    image: 'images/modal-space.png',
    desktopImage: '/images/spacetravelelers.png',
    description: 'This project uses the official spaceX API to pull in a list of active rockets and missions!',
    languages: ['React&Redux', 'Javascript', 'CSS3'],
    desktopLanguages: ['React&Redux', 'Javascript', 'CSS3'],
    link1: 'https://deploy-preview-33--romantic-benz-43572d.netlify.app/',
    link2: 'https://github.com/gracekabaghe/space-traveler-s-hub',
    desktopLink1: 'https://deploy-preview-33--romantic-benz-43572d.netlify.app/',
    desktopLink2: 'https://github.com/gracekabaghe/space-traveler-s-hub',
  },
];
const projectsDetailsBtns = document.querySelectorAll('.btn');
const bodyScroll = document.querySelector('body');
for (let i = 0; i < projectsDetailsBtns.length; i += 1) {
  projectsDetailsBtns[i].addEventListener('click', () => {
    bodyScroll.style.overflow = 'hidden';
    if (window.screen.width < 992) {
      const mobileProjectPopupWindow = document.querySelector('#mobile-popup-container');
      const mobileProjectPopupWindowImage = document.querySelector('#mobile-popup-container .modal-img-container .modal-img');
      const mobileProjectPopupWindowProjectName = document.querySelector('#mobile-popup-container .modal-h2-ul .modal-h2');
      const mobileProjectPopupWindowTechnologies = document.querySelector('#mobile-popup-container .modal-first-ul .modal-first-li');
      const mobileProjectPopupWindowDescription = document.querySelector('#mobile-popup-container p');
      const mobileProjectPopupWindowSeeLive = document.querySelector('#mobile-popup-container .modal-btn-seelive .modal-link');
      const mobileProjectPopupWindowSeeSource = document.querySelector('#mobile-popup-container .modal-btn-seesource .modal-link');
      const mobileProjectPopupWindowCloseBtn = document.querySelector('#mobile-popup-container .modal-close-button');
      mobileProjectPopupWindowTechnologies.innerHTML = '';
      for (let j = 0; j < data[i].languages.length; j += 1) {
        const technology = document.createElement('li');
        technology.textContent = data[i].languages[j];
        mobileProjectPopupWindowTechnologies.appendChild(technology);
      }
      mobileProjectPopupWindowProjectName.textContent = data[i].projectName;
      mobileProjectPopupWindowDescription.textContent = data[i].description;
      mobileProjectPopupWindowImage.src = data[i].image;
      mobileProjectPopupWindowSeeLive.href = data[i].link1;
      mobileProjectPopupWindowSeeSource.href = data[i].link2;
      mobileProjectPopupWindow.classList.remove('display-none');
      mobileProjectPopupWindow.style.display = 'block';
      mobileProjectPopupWindowCloseBtn.addEventListener('click', () => {
        mobileProjectPopupWindow.classList.add('display-none');
        mobileProjectPopupWindow.style.display = 'none';
        bodyScroll.style.overflow = 'auto';
      });
    } else {
      const desktopProjectPopupWindow = document.querySelector('#desktop-popup-container');
      const desktopProjectPopupWindowTechnologies = document.querySelector('#desktop-popup-container .modal-first-ul .modal-first-li');
      const desktopProjectPopupWindowImage = document.querySelector('#desktop-popup-container .modal-img-container .des-modal-img');
      const desktopProjectPopupWindowProjectName = document.querySelector('#desktop-popup-container .modal-h2-ul .modal-h2');
      const desktopProjectPopupWindowDescription = document.querySelector('#desktop-popup-container .modal-sec-p');
      const desktopProjectPopupWindowSeeLive = document.querySelector('#desktop-popup-container .modal-btn-seelive .modal-link');
      const desktopProjectPopupWindowSeeSource = document.querySelector('#desktop-popup-container .modal-btn-seesource .modal-link');
      const desktopProjectPopupWindowCloseBtn = document.querySelector('#desktop-popup-container .modal-close-button');
      desktopProjectPopupWindowTechnologies.innerHTML = '';
      for (let j = 0; j < data[i].desktopLanguages.length; j += 1) {
        const technology = document.createElement('li');
        technology.textContent = data[i].desktopLanguages[j];
        desktopProjectPopupWindowTechnologies.appendChild(technology);
      }
      desktopProjectPopupWindowProjectName.textContent = data[i].projectName;
      desktopProjectPopupWindowDescription.textContent = data[i].description;
      desktopProjectPopupWindowImage.src = data[i].image;
      desktopProjectPopupWindowSeeLive.href = data[i].desktopLink1;
      desktopProjectPopupWindowSeeSource.href = data[i].desktopLink2;
      desktopProjectPopupWindow.classList.remove('display-none');
      desktopProjectPopupWindow.style.display = 'block';
      document.querySelector('#blur-desktop').classList.add('blur');
      desktopProjectPopupWindowCloseBtn.addEventListener('click', () => {
        desktopProjectPopupWindow.classList.add('display-none');
        desktopProjectPopupWindow.style.display = 'none';
        document.querySelector('#blur-desktop').classList.remove('blur');
        bodyScroll.style.overflow = 'auto';
      });
    }
  });
}
