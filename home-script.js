document.addEventListener("DOMContentLoaded", function () {
  const qrCodeInstagram = document.getElementById("qr-code-instagram");
  const qrCodeTelegram = document.getElementById("qr-code-telegram");
  const emailLink = document.getElementById("email-link");
  const textOverlay = document.querySelector('.text-overlay');
  const navigationHeader = document.querySelector('.navigation-header');

  qrCodeInstagram.addEventListener("mouseover", highlightQRCode);
  qrCodeTelegram.addEventListener("mouseover", highlightQRCode);

  qrCodeInstagram.addEventListener("mouseout", unhighlightQRCode);
  qrCodeTelegram.addEventListener("mouseout", unhighlightQRCode);

  emailLink.addEventListener("click", copyEmailToClipboard);

  // обробник події для кліку на заголовок навігації
  navigationHeader.addEventListener("click", function () {
      //  клас 'active' для вилізання блоку навігації
      document.querySelector('.navigation-list').classList.toggle('active');
  });

  function highlightQRCode(event) {
      const qrCode = event.currentTarget;
      qrCode.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.7)";
      qrCode.style.transform = "scale(1.1)";
      document.body.style.backgroundColor = "transparent";
  }

  function unhighlightQRCode(event) {
      const qrCode = event.currentTarget;
      qrCode.style.boxShadow = "";
      qrCode.style.transform = "scale(1)";
      document.body.style.backgroundColor = "";
  }

  function copyEmailToClipboard() {
      const emailText = "bodya.cyberpc@gmail.com";
      const tempInput = document.createElement("input");
      tempInput.value = emailText;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("Пошта скопійована в буфер обміну: " + emailText);
  }
});
const translations = {
    'Мій тестовий сайт': {
      en: 'My Test Site',
      uk: 'Мій тестовий сайт'
    },
    'Людина, що змінила хід історії': {
      en: 'The person who changed the course of history',
      uk: 'Людина, що змінила хід історії'
    },
    'Україна починається з тебе!': {
      en: 'Ukraine begins with you!',
      uk: 'Україна починається з тебе!'
    },
    'Україна - моя Батьківщина': {
        en: 'Ukraine is my motherland',
        uk: 'Україна - моя Батьківщина'
    },
    'Маленьки Герої України': {
      en: 'Little Heroes of Ukraine',
      uk: 'Маленьки Герої України'
    },
    'Ніхто Крім Нас': {
      en: 'Nobody But Us',
      uk: 'Ніхто Крім Нас'
    },
    'Пошта: bodya.cyberpc@gmail.com': {
      en: 'Mail: bodya.cyberpc@gmail.com',
      uk: 'Пошта: bodya.cyberpc@gmail.com'
    },
    'Ваша компанія. Всі права захищені.': {
      en: 'Your company.All rights are protected.',
      uk: 'Ваша компанія. Всі права захищені.'
    },
    'Навігація': {
      en: 'Navigation',
      uk: 'Навігація'
    },
    'Головне': {
      en: 'The main thing',
      uk: 'Головне'
    },
    'Слайдер': {
      en: 'Slider',
      uk: 'Слайдер'
    },
    'Контакти': {
      en: 'Contacts',
      uk: 'Контакти'
    },
    'Про нас': {
      en: 'About us',
      uk: 'Про нас'
    }
    // Ще переклади
  };
  function toggleNavigation() {
    var navigationHeader = document.querySelector('.navigation-header');
    var navigationList = document.querySelector('.navigation-list');
    if (navigationList.style.maxHeight) {
        navigationHeader.classList.remove('active');
        navigationList.style.maxHeight = null;
    } else {
        navigationHeader.classList.add('active');
        navigationList.style.maxHeight = navigationList.scrollHeight + 'px';
    }
}

// Функція для зміни мови
function changeLanguage(language) {
    const translatableElements = document.querySelectorAll('.translatable');
  
    translatableElements.forEach(element => {
        const originalText = element.dataset.originalText;
  
        if (translations[originalText] && translations[originalText][language]) {
            element.textContent = translations[originalText][language];
        }
    });
}
  function playVideo() {
            var video = document.getElementById('video-player');
            video.style.display = 'block';
            video.play();
        }
var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('video-player', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        // This function is called when the video is ready to play
        console.log('Player is ready');
    }

    function onPlayerStateChange(event) {
        // This function is called when the video's state changes (play, pause, end, etc.)
        console.log('Player state has changed:', event.data);
    }

    function playVideo() {
        player.playVideo();
    }
		
