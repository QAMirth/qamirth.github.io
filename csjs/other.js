document.addEventListener('DOMContentLoaded', function() {
    // Подсчет количества блоков с классом info-block
    const materialCount = document.querySelectorAll('.info-block').length;
    // Обновление текста в элементе с классом material-count
    document.querySelector('.material-count').textContent = `(${materialCount} materials)`;
});

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

