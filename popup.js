const data = [
    {
        projectName: 'Tonic',
        technology: 'Back End Dev',
        year: 2021,
        image: '/images/card2-image.png',
        description: 'A daily selection of privately personalized reads noaccounts or sign-ups required.',
        languages: ['CSS', 'Javascript', 'HTML'],
        link1: 'see live',
        link2: 'see source',
    },
    {
        projectName: 'Multi-post-stories',
        technology: 'Back End Dev',
        year: 2021,
        image: '/images/multipost.png',
        description: 'A daily selection of privately personalized reads noaccounts or sign-ups required.',
        languages: ['CSS', 'Javascript', 'Ruby',],
        link1: 'see live',
        link2: 'see source',
    },
    {
        projectName: 'Tonic',
        technology: 'Back End Dev',
        year: 2021,
        image: '/images/card2-image.png',
        description: 'A daily selection of privately personalized reads noaccounts or sign-ups required.',
        languages: ['CSS', 'Javascript', 'HTML'],
        link1: 'see live',
        link2: 'see source',
    },
    {
        projectName: 'Multi-post-stories',
        technology: 'Back End Dev',
        year: 2021,
        image: '/images/multipost.png',
        description: 'A daily selection of privately personalized reads noaccounts or sign-ups required.',
        languages: ['CSS', 'Javascript', 'Ruby',],
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
       const mobileProjectPopupWindowImage = document.querySelector('#mobile-popup-container img');
       const mobileProjectPopupWindowName = document.querySelector('#mobile-popup-container .modal-head .modal-h2-ul .modal-h2 h2');
       const mobileProjectPopupWindowTechnologies = document.querySelector('#mobile-popup-container .modal-first-ul .modal-first-li');
       const mobileProjectPopupWindowDescription = document.querySelector('#mobile-popup-container p');
       const mobileProjectPopupWindowSeeLive = document.querySelector('#mobile-popup-container .modal-btn-seelive');
       const mobileProjectPopupWindowSeeSource = document.querySelector('#mobile-popup-container .modal-btn-seesource');
       const mobileProjectPopupWindowCloseBtn = document.querySelector('#mobile-popup-container .modal-close-button');
      
    //    mobileProjectPopupWindowImage.src = data[i].image;
    //    mobileProjectPopupWindowName.textContent = data[i].projectName;
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
    }
});
}
