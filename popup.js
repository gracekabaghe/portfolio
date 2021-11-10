const data = [
  {
    projectName: 'TODO',
    projectDesktop: 'TODO',
    technology: 'Back End Dev',
    image: 'images/todo2.png',
    desktopImage: 'images/tododeskt.png',
    description: 'Task management app for organization. Items can be added, edited, deleted or removed.',
    languages: ['Javascript', 'CSS', 'HTML'],
    desktopLanguages: ['Javascript', 'CSS', 'HTML'],
    link1: 'https://gracekabaghe.github.io/to-do/',
    link2: 'https://github.com/gracekabaghe/to-do',
    desktopLink1: 'https://gracekabaghe.github.io/to-do/',
    desktopLink2: 'https://github.com/gracekabaghe/to-do',
  },
  {
    projectName: 'Tonic',
    projectDesktop: 'Tonic',
    technology: 'Back End Dev',
    year: 2021,
    image: '/images/card2-image.png',
    desktopImage: '/images/popdesktimage.png',
    description: 'This is a school website that renders HTML dynamically with Javascript',
    languages: ['CSS', 'Javascript', 'HTML'],
    desktopLanguages: ['CSS', 'Javascript', 'HTML'],
    link1: 'see live',
    link2: 'see source',
    desktopLink1: 'see live',
    desktopLink2: 'see sourc',
  },
  {
    projectName: 'Tonic',
    projectDesktop: 'Tonic',
    technology: 'Back End Dev',
    year: 2021,
    image: '/images/card2-image.png',
    desktopImage: '/images/popdesktimage.png',
    description: 'This is a school website that renders HTML dynamically with Javascript',
    languages: ['CSS', 'Javascript', 'HTML'],
    desktopLanguages: ['CSS', 'Javascript', 'HTML'],
    link1: 'see live',
    link2: 'see source',
    desktopLink1: 'see live',
    desktopLink2: 'see sourc',
  },
  {
    projectName: 'Tonic',
    projectDesktop: 'Tonic',
    technology: 'Back End Dev',
    year: 2021,
    image: '/images/card2-image.png',
    desktopImage: '/images/dodeskt.png',
    description: 'A daily selection of privately personalized reads noaccounts or sign-ups required.',
    languages: ['CSS', 'Javascript', 'HTML'],
    desktopLanguages: ['CSS', 'Javascript', 'HTML'],
    link1: 'see live',
    link2: 'see source',
    desktopLink1: 'see live',
    desktopLink2: 'see sourc',
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
