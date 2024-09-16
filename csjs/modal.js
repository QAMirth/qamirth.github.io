// Получаем все модальные окна
var modals = document.querySelectorAll('.modal');

// Получаем все ссылки с классом footer-link
var links = document.querySelectorAll('.footer-link');

// Добавляем события на каждую ссылку
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        var modalId = this.getAttribute('data-modal'); // Получаем id модального окна
        console.log("Opening modal: " + modalId); // Отладка - проверяем, какая модалка открывается
        var modal = document.getElementById(modalId); // Находим соответствующее модальное окно
        modal.classList.add('active'); // ЛЯЛЯ - Добавляем класс active для модального окна
        modal.style.display = "flex"; // Показываем модальное окно (устанавливаем display: flex для выравнивания)
        document.body.classList.add('popup-active'); // Блокируем прокрутку страницы
    });
});

// Получаем все крестики для закрытия модального окна
var closeButtons = document.querySelectorAll('.close');

// Добавляем событие на каждый крестик для закрытия окон
closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        modals.forEach(function(modal) {
            console.log("Closing modal: " + modal.id); // Отладка - проверяем, какая модалка закрывается
            modal.classList.remove('active'); // ЛЯЛЯ - Удаляем класс active
            modal.style.display = "none"; // Закрываем все открытые модальные окна
        });
        document.body.classList.remove('popup-active'); // Включаем прокрутку страницы
    });
});

// Закрываем модальные окна при клике вне их содержимого
window.addEventListener('click', function(event) {
    modals.forEach(function(modal) {
        if (event.target === modal) {
            console.log("Closing modal by clicking outside: " + modal.id); // Отладка
            modal.classList.remove('active'); // ЛЯЛЯ - Удаляем класс active
            modal.style.display = "none"; // Закрываем окно
            document.body.classList.remove('popup-active'); // Включаем прокрутку страницы
        }
    });
});
