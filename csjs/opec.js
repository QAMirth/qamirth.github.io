
 // ID1
document.addEventListener('DOMContentLoaded', () => {
 const parentElement = document.body;
 
    document.querySelectorAll('.info-card').forEach(card => {
        const desc = card.querySelector('.info-card-desc');
        const content = card.querySelector('.info-card-content');
        const buttonLink2 = card.querySelector('.button-link2');
        const buttonLink3 = card.querySelector('.button-link3');

        // Инициализация
        buttonLink2.style.display = 'flex';
        buttonLink3.style.display = 'none';
        buttonLink2.innerHTML = '';



           // For checking the number of lines
     function checkTextLength() {
    const lineHeight = parseFloat(getComputedStyle(desc).lineHeight);
    const blockHeight = desc.scrollHeight;

    const lineCount = Math.floor(blockHeight / lineHeight);

    if (lineCount > 7) {
        buttonLink2.style.display = 'block';
    } else {
        buttonLink2.style.display = 'none';
    }
}

        checkTextLength();



        
        // При нажатии на .button-link2
        buttonLink2.addEventListener('click', function() {
            if (!desc.classList.contains('expanded')) {
                buttonLink2.classList.add('expanded'); // button = expanded
                desc.classList.add('expanded'); // Разворачиваем текст
                content.classList.add('expanded'); // Разворачиваем контент
                buttonLink2.innerHTML = '';
                buttonLink3.style.display = 'inline';
                buttonLink3.textContent = '';
            } else {
                collapseText(); // Если текст уже развернут, сворачиваем
            }
        });

        // При нажатии на .button-link3
        buttonLink3.addEventListener('click', collapseText);

        function collapseText() {
            buttonLink2.classList.remove('expanded'); // button - expanded
            desc.classList.remove('expanded'); // Сворачиваем текст
            content.classList.remove('expanded'); // Сворачиваем контент
            buttonLink2.innerHTML = '';
            buttonLink3.style.display = 'none';
        }
    });
});



// KURY: Добавляем поддержку открытия якоря с развернутым текстом и правильной иконкой
window.addEventListener('DOMContentLoaded', (event) => {
    const anchor = window.location.hash;
    if (anchor) {
        const decodedAnchor = decodeURIComponent(anchor);
        const card = document.querySelector(decodedAnchor);
        if (card) {
            const desc = card.querySelector('.info-card-desc');
            const content = card.querySelector('.info-card-content');
            const buttonLink2 = card.querySelector('.button-link2');
            const buttonLink3 = card.querySelector('.button-link3');

            desc.classList.add('expanded'); // Разворачиваем текст по умолчанию
            content.classList.add('expanded'); // Разворачиваем контент по умолчанию
            buttonLink2.innerHTML = '<svg class="close1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="close11" fill-rule="evenodd" clip-rule="evenodd" d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6Zm13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>'; // KURY: Меняем иконку на close1
            buttonLink3.style.display = 'inline'; // Показываем кнопку "Show Less"
        }
    }
});


document.querySelectorAll('.cp1').forEach(icon => {
  icon.addEventListener('click', function(event) {
    const card = this.closest('.info-card');
    const id = card.id;
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    
    // Копируем ссылку в буфер обмена
    navigator.clipboard.writeText(url).then(() => {
      // Показываем уведомление
      showToast('Link copied to clipboard \u{270C}');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  });
});

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  
  // Скрыть уведомление через 3 секунды
  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hidden');
  }, 4000);
}


window.addEventListener('DOMContentLoaded', (event) => {
  let anchor = window.location.hash; 
  if (anchor) {
    anchor = decodeURIComponent(anchor); 
    const card = document.querySelector(`[id="${anchor.slice(1)}"]`); 
    if (card) {
      const desc = card.querySelector('.info-card-desc');
       const content = card.querySelector('.info-card-content'); 
      desc.classList.add('expanded');
      content.classList.add('expanded'); 
    }
  }
});








 // ID2
function setCSS(size) {
    let root = document.documentElement;

    if (size === 'maximum') {
                root.style.setProperty('--mp-top', 'var(--20)');
                root.style.setProperty('--mp-left', 'var(--pad)');
                root.style.setProperty('--mp-bottom', 'var(--7a5)');
                root.style.setProperty('--mp-right', 'var(--pad)');
                root.style.setProperty('--mp-border-radius', 'var(--border-radius)');
                root.style.setProperty('--mp-margin-bottom', 'var(--pad-small)');
                root.style.setProperty('--icc-display', 'flex');
                root.style.setProperty('--icc-display-expanded', 'flex');
              
       
            } else if (size === 'minimum') {
                root.style.setProperty('--mp-top', 'var(--15)');
                root.style.setProperty('--mp-left', 'var(--20)');
                root.style.setProperty('--mp-bottom', 'var(--15)');
                root.style.setProperty('--mp-right', 'var(--20)');
                root.style.setProperty('--mp-border-radius', 'var(--0)');
                root.style.setProperty('--mp-margin-bottom', '-1px');
                root.style.setProperty('--icc-display', 'none');
                root.style.setProperty('--icc-display-expanded', 'flex');


            }
        }


// Функция для управления кнопкой button-link2
function toggleButtonLink2(state) {
    const buttons = document.querySelectorAll('.button-link2');
    buttons.forEach(button => {
        if (state === 'active') {
            // Показываем кнопку во всех блоках в состоянии active
            button.style.display = 'block';
        } else {
            // Показываем кнопку только для блоков с длинным текстом в состоянии passive
            const content2 = button.closest('.info-card').querySelector('.info-card-desc');

            if (content2) { // Проверяем, существует ли элемент
                const lineHeight = parseFloat(getComputedStyle(content2).lineHeight);
                const blockHeight = content2.scrollHeight;
                const lineCount = Math.floor(blockHeight / lineHeight);

                // Проверяем количество строк
                if (lineCount > 7) {
                    button.style.display = 'block';
                } else {
                    button.style.display = 'none';
                }
            } else {
                button.style.display = 'none'; // Если контент не найден, скрываем кнопку
            }
        }
    });
}


// Инициализация значений при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Устанавливаем начальное состояние из куки или по умолчанию
    let savedState = getCookie('iconState') || 'active';
    setState(savedState);
});

// Функция для установки состояния и сохранения его в куки
function setState(state) {
    const iconElement = document.getElementById('toggleIconm');

    if (state === 'active') {
        // Состояние active (только иконка, название, ссылка)
        iconElement.classList.remove('passive');
        iconElement.classList.add('active');
        setCSS('minimum');
        toggleButtonLink2('active');
        document.cookie = `iconState=active; path=/; max-age=31536000;`;
    } else {
        // Состояние passive (полное отображение материалов)
        iconElement.classList.remove('active');
        iconElement.classList.add('passive');
        setCSS('maximum');
        toggleButtonLink2('passive');
        document.cookie = `iconState=passive; path=/; max-age=31536000;`;
    }
}

// Получение значения куки
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Переключение состояния при клике на иконку
document.getElementById('toggleIconm').addEventListener('click', () => {
    const iconElement = document.getElementById('toggleIconm');
    const currentState = iconElement.classList.contains('active') ? 'active' : 'passive';
    
    // Переключение между состояниями passive и active
    setState(currentState === 'passive' ? 'active' : 'passive');
});
