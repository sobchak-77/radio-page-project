// --- SEARCH FORM ---

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form--show');
  });

  document.getElementById('close-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form--show');
  });

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
});

// --- PODCASTS MORE ---

const btnMore = document.querySelector('.podcasts__btn');
const podcastsItems = document.querySelectorAll('.podcasts__item');

btnMore.addEventListener('click', () => {
  podcastsItems.forEach(el => { el.classList.add('podcasts__item--visible') });
  btnMore.closest('.podcasts__center').classList.add('podcasts__center--hidden');
});

// --- BROADCASTS SELECT ---

const element = document.querySelector('#select');

const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  position: 'bottom',
});

// --- GUESTS ACCORDION ---

$('.accordion').accordion({
  heightStyle: 'content',
  active: 0,
  animate: 600,
});

// --- GUESTS TABS ---

document.querySelectorAll('.guests__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.guests__btn').forEach(function (btn) {
      btn.classList.remove('guests__btn--active');
    });
    e.currentTarget.classList.add('guests__btn--active');
    document.querySelectorAll('.guests-profile').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('guests-profile--active');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('guests-profile--active');
  });
});

// --- SWIPER ---

const swiper = new Swiper('.swiper-container', {
  slidesPerGroup: 1,
  slidesPerView: 2.3,
  spaceBetween: 40,
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    730: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1320: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// --- BURGER MENU ---

let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu__nav');
let subMenu = document.querySelector('.sub-menu__nav');
let menuLinks = menu.querySelectorAll('.menu__link');
let subMenuLinks = subMenu.querySelectorAll('.sub-menu__link');
let page = document.querySelector('.page');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('menu__nav--active');
    subMenu.classList.toggle('sub-menu__nav--active');
    page.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click',

    function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('menu__nav--active');
      subMenu.classList.remove('sub-menu__nav--active');
      page.classList.remove('stop-scroll');
    });
});

subMenuLinks.forEach(function (el) {
  el.addEventListener('click',
    function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('menu__nav--active');
      subMenu.classList.remove('sub-menu__nav--active');
      page.classList.remove('stop-scroll');
    });
});

// --- LIVE BUTTONS ---

let live = document.querySelector('.live');
let onAir = document.querySelector('.on-air');
let onAirButton = onAir.querySelectorAll('.on-air__btn');

live.addEventListener('click',
  function () {
    live.classList.toggle('live--active');
    onAir.classList.toggle('on-air--active');
  });

// --- MODAL WINDOW ---

document.getElementById('open-login-modal').addEventListener('click', function() {
  document.getElementById('login-modal').classList.add('open');
  document.querySelector('.page').classList.add('stop-scroll');
});

document.getElementById('close-login-modal').addEventListener('click', function() {
  document.getElementById('login-modal').classList.remove('open');
  document.querySelector('.page').classList.remove('stop-scroll');
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('login-modal').classList.remove('open');
  };
});

document.querySelector('#login-modal .modal__card').addEventListener('click', event => {
  event._isClickWithInModal = true;
});

document.getElementById('login-modal').addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

// --- INPUT FORM ---

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Слишком короткое имя'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное'
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели email',
    },
    {
      rule: 'email',
      errorMessage: 'Email не корректный',
    },
  ])
  .addField('#message', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели сообщение',
    },
  ])
  .addField('#checkbox', [
    {
      rule: 'required',
      errorMessage: 'Вы не поставили галочку',
    },
  ]);

document.addEventListener('DOMContentLoaded', function () {
  const validation = new JustValidate('#login-form');

  validation.addField('#login-name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Слишком короткое имя'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное'
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
    .addField('#login-password', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели пароль',
      },
    ])
});