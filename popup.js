const data = [
  {
    projectName: 'Tonic',
    projectDesktop: 'Tonic',
    technology: 'Back End Dev',
    year: 2021,
    image: '/images/card2-image.png',
    desktopImage: '/images/popdesktimage.png',
    description: 'A daily selection of privately personalized reads noaccounts or sign-ups required.',
    languages: ['CSS', 'Javascript', 'HTML'],
    desktopLanguages: ['CSS', 'Javascript', 'HTML'],
    link1: 'see live',
    link2: 'see source',
  },
  {
    projectName: 'Tonic',
    projectDesktop: 'Tonic',
    technology: 'Back End Dev',
    year: 2021,
    image: '/images/card2-image.png',
    desktopImage: '/images/popdesktimage.png',
    description: 'A daily selection of privately personalized reads noaccounts or sign-ups required.',
    languages: ['CSS', 'Javascript', 'HTML'],
    desktopLanguages: ['CSS', 'Javascript', 'HTML'],
    link1: 'see live',
    link2: 'see source',
  },
  {
    projectName: 'Tonic',
    projectDesktop: 'Tonic',
    technology: 'Back End Dev',
    year: 2021,
    image: '/images/card2-image.png',
    desktopImage: '/images/popdesktimage.png',
    description: 'A daily selection of privately personalized reads noaccounts or sign-ups required.',
    languages: ['CSS', 'Javascript', 'HTML'],
    desktopLanguages: ['CSS', 'Javascript', 'HTML'],
    link1: 'see live',
    link2: 'see source',
  },
  {
    projectName: 'Tonic',
    projectDesktop: 'Tonic',
    technology: 'Back End Dev',
    year: 2021,
    image: '/images/card2-image.png',
    desktopImage: '/images/popdesktimage.png',
    description: 'A daily selection of privately personalized reads noaccounts or sign-ups required.',
    languages: ['CSS', 'Javascript', 'HTML'],
    desktopLanguages: ['CSS', 'Javascript', 'HTML'],
    link1: 'see live',
    link2: 'see source',
  },
];
const projectsDetailsBtns = document.querySelectorAll('.btn');
const bodyScroll = document.querySelector('body');
for (let i = 0; i < projectsDetailsBtns.length; i += 1) {
  projectsDetailsBtns[i].addEventListener('click', () => {
    bodyScroll.style.overflow = 'hidden';
    if (window.screen.width < 992) {
      const mobileProjectPopupWindow = document.querySelector('#mobile-popup-container');
      const mobileProjectPopupWindowTechnologies = document.querySelector('#mobile-popup-container .modal-first-ul .modal-first-li');
      const mobileProjectPopupWindowDescription = document.querySelector('#mobile-popup-container p');
      const mobileProjectPopupWindowSeeLive = document.querySelector('#mobile-popup-container .modal-btn-seelive');
      const mobileProjectPopupWindowSeeSource = document.querySelector('#mobile-popup-container .modal-btn-seesource');
      const mobileProjectPopupWindowCloseBtn = document.querySelector('#mobile-popup-container .modal-close-button');
      mobileProjectPopupWindowTechnologies.innerHTML = '';
      for (let j = 0; j < data[i].languages.length; j += 1) {
        const technology = document.createElement('li');
        technology.textContent = data[i].languages[j];
        mobileProjectPopupWindowTechnologies.appendChild(technology);
      }
      mobileProjectPopupWindowDescription.textContent = data[i].description;
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
      const desktopProjectPopupWindowDescription = document.querySelector('#desktop-popup-container p');
      const desktopProjectPopupWindowSeeLive = document.querySelector('#desktop-popup-container .modal-btn-seelive');
      const desktopProjectPopupWindowSeeSource = document.querySelector('#desktop-popup-container .modal-btn-seesource');
      const desktopProjectPopupWindowCloseBtn = document.querySelector('#desktop-popup-container .modal-close-button');
      desktopProjectPopupWindowTechnologies.innerHTML = '';
      for (let j = 0; j < data[i].desktopLanguages.length; j += 1) {
        const technology = document.createElement('li');
        technology.textContent = data[i].desktopLanguages[j];
        desktopProjectPopupWindowTechnologies.appendChild(technology);
      }
      desktopProjectPopupWindowDescription.textContent = data[i].description;
      desktopProjectPopupWindowSeeLive.href = data[i].link1;
      desktopProjectPopupWindowSeeSource.href = data[i].link2;
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
