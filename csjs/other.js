document.addEventListener('DOMContentLoaded', function() {
    var quill = new Quill('#description-container', {
        theme: 'snow'
    });
    const pageKey = location.pathname.split('/').pop(); // Extracts the current page name (e.g., '1.html')

    function updateMaterialCount() {
        // Учитываем только видимые материалы
        const visibleMaterials = document.querySelectorAll('.info-card:not([style*="display: none"])');
        document.querySelector('.material-count').textContent = `${visibleMaterials.length} materials`;
    }

    updateMaterialCount();

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

    const form = document.getElementById('material-form');

    form.addEventListener('submit', submitHandler);

    function submitHandler(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = quill.root.innerHTML; // Получение контента из Quill
        const format = document.getElementById('format').value;
        const freepaid = document.getElementById('freepaid').value;
let image = document.getElementById('image').value; // (Я ТУТ ДОБАВИЛ В КОД) Заменил const на let для возможности изменения значения
        const link = document.getElementById('link').value;
        const linkType = document.getElementById('link-type').value;

 // (Я ТУТ ДОБАВИЛ В КОД) Проверка на пустой путь к изображению
        if (!image) {
            image = '../csjs/mirth.png'; // (Я ТУТ ДОБАВИЛ В КОД) Автоматически добавляем путь csjs/mirth.png
        }
        
        const newMaterial = createMaterialElement({
            title, description, format, freepaid, image, link, linkType
        });

        document.querySelector('.info-cards-grid').appendChild(newMaterial);

        updateMaterialCount();
        saveMaterialsToLocalStorage();

        popup.style.display = "none";
    }

    function createMaterialElement(material) {
        const newMaterial = document.createElement('div');
        newMaterial.className = 'info-card dynamic';
        newMaterial.innerHTML = `
            <div class="info-card-label">
                <a href="${material.link}" class="ttc" target="${material.linkType === 'target_blank' ? '_blank' : ''}" rel="${material.linkType === 'target_blank' ? 'nofollow' : ''}">
                    <img src="${material.image}" alt="#" class="ggh"/>
                </a>
            </div>
            <div class="info-card-content">
                <div class="info-card-title">
                    <a href="${material.link}" class="ttb" target="${material.linkType === 'target_blank' ? '_blank' : ''}" rel="${material.linkType === 'target_blank' ? 'nofollow' : ''}">
                        ${material.title}
                    </a>
                </div>
                <div class="info-card-desc2">${material.description}</div>
                <div class="info-card-format">
                    <span class="format">${material.format}</span>
                    <span class="freepaid">${material.freepaid}</span>
                 <div class="bl3"><a class="button-link3"></a></div>
                </div>
            </div>
            <button class="delete-material">&times;</button>
            <button class="copy-html">Copy HTML</button>
            <button class="edit-material">Edit</button>
        `;

        newMaterial.querySelector('.delete-material').addEventListener('click', function() {
            newMaterial.remove();
            updateMaterialCount();
            saveMaterialsToLocalStorage();
        });

        newMaterial.querySelector('.copy-html').addEventListener('click', function() {
            const materialHTML = newMaterial.outerHTML
                .replace('info-card dynamic', 'info-card static')
                .replace('info-card-desc2', 'info-card-desc')
                .replace(/delete-material/g, 'delete-material2')
                .replace(/copy-html/g, 'copy-html2')
                .replace(/edit-material/g, 'edit-material2')
                .replace(/<div class="info-card static"/g, `<div class="info-card static" data-title="${material.title.toLowerCase()}"`) // Изменение: добавлено приведение заголовка к нижнему регистру
                .replace(/<div class="info-card-desc">[\s\S]*?<\/div>/, `<div class="info-card-desc"><a class="button-link2"></a>${material.description}</div>`);
            navigator.clipboard.writeText(materialHTML);
        });

        newMaterial.querySelector('.edit-material').addEventListener('click', function() {
            editMaterial(newMaterial, material);
        });

        return newMaterial;
    }

    function saveMaterialsToLocalStorage() {
        const materials = document.querySelectorAll('.info-card.dynamic');
        const materialsData = Array.from(materials).map(material => {
            return {
                title: material.querySelector('.info-card-title a').textContent,
                description: material.querySelector('.info-card-desc2').innerHTML, // Исправлено: получение HTML контента
                format: material.querySelector('.info-card-format .format').textContent,
                freepaid: material.querySelector('.info-card-format .freepaid').textContent,
                image: material.querySelector('.info-card-label img').src,
                link: material.querySelector('.info-card-title a').href,
                linkType: material.querySelector('.info-card-title a').target === '_blank' ? 'target_blank' : 'direct_link'
            };
        });
        localStorage.setItem(`materials_${pageKey}`, JSON.stringify(materialsData));
    }

    function loadMaterialsFromLocalStorage() {
        const materialsData = JSON.parse(localStorage.getItem(`materials_${pageKey}`)) || [];
        materialsData.forEach(material => {
            const newMaterial = createMaterialElement(material);
            document.querySelector('.info-cards-grid').appendChild(newMaterial);
        });
        updateMaterialCount();
    }

    function editMaterial(materialElement, material) {
        document.getElementById('title').value = material.title;
        quill.root.innerHTML = material.description; // Исправлено: установка контента в Quill редактор
        document.getElementById('format').value = material.format;
        document.getElementById('freepaid').value = material.freepaid;
        document.getElementById('image').value = material.image;
        document.getElementById('link').value = material.link;
        document.getElementById('link-type').value = material.linkType;

        popup.style.display = "block";

        form.removeEventListener('submit', submitHandler);
        form.addEventListener('submit', function updateHandler(event) {
            event.preventDefault();

            material.title = document.getElementById('title').value;
            material.description = quill.root.innerHTML; // Исправлено: получение контента из Quill редактора
            material.format = document.getElementById('format').value;
            material.freepaid = document.getElementById('freepaid').value;
            material.image = document.getElementById('image').value;
            material.link = document.getElementById('link').value;
            material.linkType = document.getElementById('link-type').value;

  // (Я ТУТ ДОБАВИЛ В КОД) Проверка на пустой путь к изображению в режиме редактирования
            if (!material.image) {
                material.image = '../csjs/mirth.png'; // (Я ТУТ ДОБАВИЛ В КОД) Автоматически добавляем путь csjs/mirth.png
            }
            
            materialElement.innerHTML = `
                <div class="info-card-label">
                    <a href="${material.link}" class="ttc" target="${material.linkType === 'target_blank' ? '_blank' : ''}" rel="${material.linkType === 'target_blank' ? 'nofollow' : ''}">
                        <img src="${material.image}" alt="#" class="ggh"/>
                    </a>
                </div>
                <div class="info-card-content">
                    <div class="info-card-title">
                        <a href="${material.link}" class="ttb" target="${material.linkType === 'target_blank' ? '_blank' : ''}" rel="${material.linkType === 'target_blank' ? 'nofollow' : ''}">
                            ${material.title}
                        </a>
                    </div>
                    <div class="info-card-desc2">${material.description}</div>
                    <div class="info-card-format">
                        <span class="format">${material.format}</span>
                        <span class="freepaid">${material.freepaid}</span>
                   <div class="bl3"><a class="button-link3"></a></div>
                    </div>
                </div>
                <button class="delete-material">&times;</button>
                <button class="copy-html">Copy HTML</button>
                <button class="edit-material">Edit</button>
            `;

            materialElement.querySelector('.delete-material').addEventListener('click', function() {
                materialElement.remove();
                updateMaterialCount();
                saveMaterialsToLocalStorage();
            });

            materialElement.querySelector('.copy-html').addEventListener('click', function() {
                const materialHTML = materialElement.outerHTML
                    .replace('info-card dynamic', 'info-card static')
                    .replace('info-card-desc2', 'info-card-desc')
                    .replace(/delete-material/g, 'delete-material2')
                    .replace(/copy-html/g, 'copy-html2')
                    .replace(/edit-material/g, 'edit-material2')
                    .replace(/<div class="info-card static"/g, `<div class="info-card static" data-title="${material.title.toLowerCase()}"`) // Изменение: добавлено приведение заголовка к нижнему регистру
                    .replace(/<div class="info-card-desc">[\s\S]*?<\/div>/, `<div class="info-card-desc"><a class="button-link2"></a>${material.description}</div>`);
                navigator.clipboard.writeText(materialHTML);
            });

            materialElement.querySelector('.edit-material').addEventListener('click', function() {
                editMaterial(materialElement, material);
            });

            saveMaterialsToLocalStorage();
            popup.style.display = "none";

            form.removeEventListener('submit', updateHandler);
            form.addEventListener('submit', submitHandler);
        });
    }

    loadMaterialsFromLocalStorage();

    // Вызов updateMaterialCount после каждого изменения фильтров
    const filters = document.querySelectorAll('.filter'); // Предположим, что у фильтров есть класс 'filter'
    filters.forEach(filter => {
        filter.addEventListener('change', updateMaterialCount);
    });

    updateMaterialCount(); // Обновление счётчика материалов при загрузке страницы
});


// Функция для валидации поля поиска
function validateSearch() {
    var input = document.querySelector('.header-search-input');
    
    // Проверяем, пусто ли поле
    if (input.value.trim() === "") {
        // Меняем плейсхолдер на новый текст
        input.placeholder = "So what should we look for?";
        
        
        // Предотвращаем отправку формы
        return false;
    }
    
    // Если поле не пустое, форма отправляется нормально
    return true;
}
document.querySelectorAll('form').forEach(form => {
    if (form.id !== 'main-search-form') {  // Пропустить форму на главной странице
        form.onsubmit = validateSearch;
    }
});

 document.addEventListener("DOMContentLoaded", function() {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get("q");
    const searchResultsContainer = document.getElementById("search-results");

    if (query) {
      searchResultsContainer.innerHTML = "Searching...";
      
      // Загрузка списка страниц из JSON файла
        fetch('../csjs/pages.json')
            .then(response => response.json())
            .then(data => {
            const pages = data.pages;

      // Функция для поиска на всех страницах
      function performSearchOnPage(pageUrl) {
        return fetch(pageUrl)
          .then(response => response.text())
          .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const infoCards = doc.querySelectorAll('.info-card');
            let results = '';

            infoCards.forEach(card => {
              if (card.innerText.toLowerCase().includes(query.toLowerCase())) {
                // Добавление ссылки на оригинальную страницу
               const link = `<a href="${pageUrl}" class="sltyt"></a>`;
            // ТУТ ПОМЕНЯЙ
            const bl3Element = card.querySelector('.info-card-format .bl3');
            if (bl3Element) {
              bl3Element.insertAdjacentHTML('beforebegin', link);
            }
                results += card.outerHTML;
              }
            });

            return results;
          });
      }

      // Выполнение поиска по всем страницам
      Promise.all(pages.map(performSearchOnPage))
        .then(results => {
          const mergedResults = results.join('');
          if (mergedResults) {
            searchResultsContainer.innerHTML = mergedResults;
          } else {
            searchResultsContainer.innerHTML = 'No results found.';
          }
        })
        .catch(error => {
          console.error('Search error:', error);
          searchResultsContainer.innerHTML = 'An error occurred while searching.';
        });
    }
  });
