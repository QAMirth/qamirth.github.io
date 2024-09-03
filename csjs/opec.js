document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.info-card').forEach(card => {
        const desc = card.querySelector('.info-card-desc');
        const buttonLink2 = card.querySelector('.button-link2');
        const buttonLink3 = card.querySelector('.button-link3');

        // Инициализация
        buttonLink2.style.display = 'block';
        buttonLink3.style.display = 'none';
        buttonLink2.textContent = 'Open';

        // При нажатии на .button-link2
        buttonLink2.addEventListener('click', function() {
            if (!desc.classList.contains('expanded')) {
                desc.classList.add('expanded'); // Разворачиваем текст
                buttonLink2.textContent = 'Close';
                buttonLink3.style.display = 'inline';
                buttonLink3.textContent = 'Close block';
            } else {
                collapseText(); // Если текст уже развернут, сворачиваем
            }
        });

        // При нажатии на .button-link3
        buttonLink3.addEventListener('click', collapseText);

        function collapseText() {
            desc.classList.remove('expanded'); // Сворачиваем текст
            buttonLink2.textContent = 'Open';
            buttonLink3.style.display = 'none';
        }
    });
});
