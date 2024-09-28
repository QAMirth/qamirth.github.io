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



 document.querySelectorAll('.info-card-desc img').forEach(function(img) {
    img.style.width = '100%';    
    img.style.height = 'auto';  
    img.removeAttribute('width');  
    img.removeAttribute('height'); 
});
    

