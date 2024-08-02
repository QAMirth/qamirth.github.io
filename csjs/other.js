document.addEventListener('DOMContentLoaded', function() {
    // Подсчет количества блоков с классом info-card
    const materialCount = document.querySelectorAll('.info-card').length;
    // Обновление текста в элементе с классом material-count
    document.querySelector('.material-count').textContent = `${materialCount}`;
});

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Подсчет количества блоков с классом info-block
    const materialCount = document.querySelectorAll('.info-block').length;
    // Обновление текста в элементе с классом material-count
    document.querySelector('.material-count').textContent = `(${materialCount} materials)`;

    // Открытие и закрытие popup формы
    const popup = document.getElementById('popup-form');
    const addBtn = document.getElementById('add-material-btn');
    const closeBtn = document.querySelector('.close');

    addBtn.onclick = function() {
        popup.style.display = "block";
    }

    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

    // Обработка формы
    const form = document.getElementById('material-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const format = document.getElementById('format').value;
        const freepaid = document.getElementById('freepaid').value;
        const image = document.getElementById('image').value;
        const link = document.getElementById('link').value;

        // Создание нового материала
        const newMaterial = document.createElement('a');
        newMaterial.href = link;
        newMaterial.className = 'ttb';
        newMaterial.target = '_blank';
        newMaterial.rel = 'nofollow';

        newMaterial.innerHTML = `
            <div class="info-card">
                <div class="info-card-label">
                    <img src="${image}" alt="#" class="ggh">
                </div>
                <div class="info-card-content">
                    <div class="info-card-title">${title}</div>
                    <p class="info-card-desc">${description}</p>
                    <p class="info-card-format"><span class="format">${format}</span><span class="freepaid">${freepaid}</span></p>
                </div>
            </div>
        `;

        // Добавление нового материала на страницу
        document.querySelector('.info-cards-grid').appendChild(newMaterial);

        // Обновление количества материалов
        const updatedMaterialCount = document.querySelectorAll('.info-block').length;
        document.querySelector('.material-count').textContent = `(${updatedMaterialCount} materials)`;

        // Скрытие формы
        popup.style.display = "none";

        // Сохранение данных в localStorage (для дальнейшего использования)
        saveMaterialsToLocalStorage();
    });

    function saveMaterialsToLocalStorage() {
        const materials = document.querySelectorAll('.ttb');
        const materialsData = Array.from(materials).map(material => {
            return {
                link: material.href,
                title: material.querySelector('.info-card-title').textContent,
                description: material.querySelector('.info-card-desc').textContent,
                format: material.querySelector('.format').textContent,
                freepaid: material.querySelector('.freepaid').textContent,
                image: material.querySelector('img').src
            };
        });
        localStorage.setItem('materials', JSON.stringify(materialsData));
    }

    function loadMaterialsFromLocalStorage() {
        const materialsData = JSON.parse(localStorage.getItem('materials'));
        if (materialsData) {
            materialsData.forEach(material => {
                const newMaterial = document.createElement('a');
                newMaterial.href = material.link;
                newMaterial.className = 'ttb';
                newMaterial.target = '_blank';
                newMaterial.rel = 'nofollow';

                newMaterial.innerHTML = `
                    <div class="info-card">
                        <div class="info-card-label">
                            <img src="${material.image}" alt="#" class="ggh">
                        </div>
                        <div class="info-card-content">
                            <div class="info-card-title">${material.title}</div>
                            <p class="info-card-desc">${material.description}</p>
                            <p class="info-card-format"><span class="format">${material.format}</span><span class="freepaid">${material.freepaid}</span></p>
                        </div>
                    </div>
                `;

                document.querySelector('.info-cards-grid').appendChild(newMaterial);
            });
        }
    }

    loadMaterialsFromLocalStorage();
});

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
