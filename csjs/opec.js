document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.info-card').forEach(card => {
        const desc = card.querySelector('.info-card-desc');
        const content = card.querySelector('.info-card-content');
        const buttonLink2 = card.querySelector('.button-link2');
        const buttonLink3 = card.querySelector('.button-link3');

        // Инициализация
        buttonLink2.style.display = 'flex';
        buttonLink3.style.display = 'none';
        buttonLink2.innerHTML = '<svg class="open1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path class="open11" fill-rule="evenodd" clip-rule="evenodd" d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6Zm3 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>';

        // При нажатии на .button-link2
        buttonLink2.addEventListener('click', function() {
            if (!desc.classList.contains('expanded')) {
                desc.classList.add('expanded'); // Разворачиваем текст
                content.classList.add('expanded'); // Разворачиваем контент
                buttonLink2.innerHTML = '<svg   class="close1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="close11" fill-rule="evenodd" clip-rule="evenodd" d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6Zm13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>';
                buttonLink3.style.display = 'inline';
                buttonLink3.textContent = '';
            } else {
                collapseText(); // Если текст уже развернут, сворачиваем
            }
        });

        // При нажатии на .button-link3
        buttonLink3.addEventListener('click', collapseText);

        function collapseText() {
            desc.classList.remove('expanded'); // Сворачиваем текст
            content.classList.remove('expanded'); // Сворачиваем контент
            buttonLink2.innerHTML = '<svg class="open1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path class="open11" fill-rule="evenodd" clip-rule="evenodd" d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6Zm3 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>';
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
  let anchor = window.location.hash; // Изменили на let
  if (anchor) {
    anchor = decodeURIComponent(anchor); // Декодируем якорь
    const card = document.querySelector(`[id="${anchor.slice(1)}"]`); // Убираем символ #
    if (card) {
      const desc = card.querySelector('.info-card-desc');
       const content = card.querySelector('.info-card-content'); // Добавляем выбор элемента .info-card-content
      desc.classList.add('expanded');
      content.classList.add('expanded'); // Разворачиваем контент
    }
  }
});


