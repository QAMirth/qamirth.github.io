const setIcon = document.getElementById('setIcon');
const slideoutMenu = document.getElementById('slideoutMenu');
const sidebarBlock = document.querySelector('.sidebar-block');
const sidebarFooter = document.querySelector('.sidebar-block-footer');
const innerSlideout = document.querySelector('.inner-slideout');
const sidebarContainer = document.querySelector('.sidebar-container');
const closeMenu = document.getElementById('closeMenu');

let isMovedToSlideout = false; 


function moveSidebarBlock() {
  const screenWidth = window.innerWidth;

  if (slideoutMenu.classList.contains('active')) {
    // Перемещаем блок в слайд-меню для мобильной версии, если меню открыто
    if (!innerSlideout.contains(sidebarBlock)) {
      innerSlideout.appendChild(sidebarBlock);
    }
    isMovedToSlideout = true;
  } else if (screenWidth > 1024) {
    // Возвращаем блок в aside для ПК версии
    if (isMovedToSlideout && !sidebarContainer.contains(sidebarBlock)) {
      sidebarContainer.insertBefore(sidebarBlock, sidebarFooter); // Возвращаем перед футером
      isMovedToSlideout = false; // Сбрасываем флаг, так как блок вернулся
    }
  }
}

setIcon.addEventListener('click', () => {
  slideoutMenu.classList.toggle('active');
  moveSidebarBlock(); // Перемещаем блок при открытии/закрытии меню
});


closeMenu.addEventListener('click', () => {
  slideoutMenu.classList.remove('active');
  moveSidebarBlock(); // Перемещаем блок при закрытии меню
});


window.addEventListener('resize', moveSidebarBlock);
window.addEventListener('load', moveSidebarBlock);







 const header = document.getElementById('header');
        const searchPanel = document.getElementById('header_mb_search_panel');

        // Функция для обновления класса в header
        function updateHeader() {
            if (searchPanel.classList.contains('open')) {
                header.classList.add('open');
            } else {
                header.classList.remove('open');
            }
        }

        // Настройка MutationObserver для отслеживания изменений классов
        const observer = new MutationObserver(() => {
            updateHeader();
        });

        observer.observe(searchPanel, { attributes: true });

        // Пример изменения класса (удалить, если не нужно)
        // setTimeout(() => {
        //     searchPanel.classList.toggle('open'); // Для тестирования
        // }, 1000);
    

