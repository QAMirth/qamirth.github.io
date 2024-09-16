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
        let image = document.getElementById('image').value; // Заменил const на let для возможности изменения значения
        const link = document.getElementById('link').value;
        const linkType = document.getElementById('link-type').value;
        const tagsInput = document.getElementById('tags').value; // Получение значения поля Tags

        // Собираем выбранные значения format
        const formatSelect = document.getElementById('format');
        const selectedFormats = Array.from(formatSelect.selectedOptions).map(option => option.value);

        // Собираем выбранные значения freepaid
        const freepaidSelect = document.getElementById('freepaid');
        const selectedFreepaid = Array.from(freepaidSelect.selectedOptions).map(option => option.value);

        if (!image) {
            image = '../csjs/mirth.svg'; 
        }

        // Преобразование тегов в HTML ссылки
        const tagsHTML = tagsInput.split(',').map(tag => {
            tag = tag.trim(); // Убираем пробелы
            return `<a href="/99/search.html?t=0&q=${encodeURIComponent(tag)}" class="tg2">${tag}</a>`;
        }).join(' ');

        const newMaterial = createMaterialElement({
            title,
            description,
            format: selectedFormats.join(', '), // Используем выбранные значения format
            freepaid: selectedFreepaid.join(', '), // Используем выбранные значения freepaid
            image,
            link,
            linkType,
            tagsHTML
        });

        document.querySelector('.info-cards-grid').appendChild(newMaterial);

        updateMaterialCount();
        saveMaterialsToLocalStorage();

        form.reset();
        quill.root.innerHTML = '';
        popup.style.display = "none";
    }

    function createMaterialElement(material) {

        //ЫТЬ Преобразование значений format в HTML-ссылки ЫТЬ
    const formatLinks = material.format.split(', ').map(format => {
        return `<a href="/99/search.html?t=0&q=${encodeURIComponent(format)}" class="ft2">${format}</a>`;
    }).join(' ');

    // ЫТЬ Преобразование значений freepaid в HTML-ссылки ЫТЬ
    const freepaidLinks = material.freepaid.split(', ').map(freepaid => {
        return `<a href="/99/search.html?t=0&q=${encodeURIComponent(freepaid)}" class="fp2">${freepaid}</a>`;
    }).join(' ');
        const newMaterial = document.createElement('div');
        newMaterial.className = 'info-card dynamic';

        // HERE ID: Замена пробелов на дефисы в атрибуте id

const materialId = material.title.toLowerCase().replace(/\s+/g, '-').trim();
const dataTitle = material.title.toLowerCase().trim();
const linkOrigin = new URL(material.link).origin;

        newMaterial.innerHTML = `
        <div class="info-who">
            <div class="info-card-label">
                <span class="flog1">
                    <div class="flog11">
                        <a href="${material.link}" class="ttc" target="${material.linkType === 'target_blank' ? '_blank' : ''}" rel="${material.linkType === 'target_blank' ? 'nofollow' : ''}"><img src="${material.image}" alt="#" class="ggh"/></a>
                    </div>
                </span>
                <div class="fwho1">
                    <div class="fwho11">
                        <div class="info-card-title">
                            <a href="${material.link}" class="ttb" target="${material.linkType === 'target_blank' ? '_blank' : ''}" rel="${material.linkType === 'target_blank' ? 'nofollow' : ''}">${material.title}</a>
                        </div>
                    </div>
                    <div class="fwho12">
                        <cite class="fwho121" role="text">${linkOrigin}</cite>
                    </div>
                </div>
                <div class="fwho13">
                    <span class="cp1"></span>
                </div>
            </div>
            <div class="ex1">
                <a class="button-link2"></a> 
            </div>
        </div>
        <div class="info-card-content">
            <div class="info-card-desc2">
                ${material.description}
            </div>
            <div class="info-card-format">
                <span class="format">${formatLinks}</span>
                <span class="freepaid">${freepaidLinks}</span>
                <span class="tags">
                    <span class="tg">${material.tagsHTML}</span>
                </span>
                <div class="bl3"><a class="button-link3"></a></div>
            </div>
        </div>
            <button class="delete-material">&times;</button>
            <button class="copy-html">Copy HTML</button>
            <button class="edit-material">Edit</button>
        `;

        // Обработчик удаления материала
        newMaterial.querySelector('.delete-material').addEventListener('click', function() {
            newMaterial.remove();
            updateMaterialCount();
            saveMaterialsToLocalStorage();
        });

        // Обработчик копирования HTML
        newMaterial.querySelector('.copy-html').addEventListener('click', function() {
            const materialHTML = newMaterial.outerHTML
                .replace('info-card dynamic', 'info-card static')
                .replace('info-card-desc2', 'info-card-desc')
                .replace(/delete-material/g, 'delete-material2')
                .replace(/copy-html/g, 'copy-html2')
                .replace(/edit-material/g, 'edit-material2')
                .replace(/<div class="info-card static"[^>]*>/, function(match) {

// Убедимся, что 'data-title' добавляется только если его ещё нет в div

if (!match.includes('data-title="')) {

return `<div class="info-card static" data-title="${dataTitle}" id="${materialId}">`;

}

return match; // Оставляем без изменений, если 'data-title' уже есть

})

.replace('<div class="info-card-desc">', `<div class="info-card-desc">`);


// Копируем результат в буфер обмена

navigator.clipboard.writeText(materialHTML);

});

      // Обработчик редактирования материала
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
                description: material.querySelector('.info-card-desc2').innerHTML,
                format: Array.from(material.querySelectorAll('.info-card-format .format a')).map(link => link.textContent).join(', '), // YAHU
                freepaid: Array.from(material.querySelectorAll('.info-card-format .freepaid a')).map(link => link.textContent).join(', '), // YAHU
                image: material.querySelector('.info-card-label img').src,
                link: material.querySelector('.info-card-title a').href,
                linkType: material.querySelector('.info-card-title a').target === '_blank' ? 'target_blank' : 'direct_link',
                tagsHTML: material.querySelector('.info-card-format .tags .tg').innerHTML
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
        quill.root.innerHTML = material.description;
        restoreMultiSelectValues('format', material.format.split(', '));
        restoreMultiSelectValues('freepaid', material.freepaid.split(', '));
        document.getElementById('image').value = material.image;
        document.getElementById('link').value = material.link;
        document.getElementById('link-type').value = material.linkType;
        document.getElementById('tags').value = material.tagsHTML.replace(/<a href="[^"]+" class="tg2">([^<]+)<\/a>/g, '$1').split(' ').join(', ');

        popup.style.display = "block";

        // Обновление блока материала
        form.removeEventListener('submit', submitHandler);
        form.addEventListener('submit', function updateHandler(event) {
            event.preventDefault();

            material.title = document.getElementById('title').value;
            material.description = quill.root.innerHTML;
            material.format = Array.from(document.getElementById('format').selectedOptions).map(option => option.value).join(', ');
            material.freepaid = Array.from(document.getElementById('freepaid').selectedOptions).map(option => option.value).join(', ');
            material.image = document.getElementById('image').value;
            material.link = document.getElementById('link').value;
            material.linkType = document.getElementById('link-type').value;
            const tagsInput = document.getElementById('tags').value;

            // Проверка на пустой путь к изображению в режиме редактирования
            if (!material.image) {
                material.image = '../csjs/mirth.png';
            }

            // Преобразование тегов в HTML ссылки
            material.tagsHTML = tagsInput.split(',').map(tag => {
                tag = tag.trim();
                return `<a href="/99/search.html?t=0&q=${encodeURIComponent(tag)}" class="tg2">${tag}</a>`;
            }).join(' ');

            // Обновление HTML материала
            materialElement.querySelector('.info-card-title a').textContent = material.title;
            materialElement.querySelector('.info-card-desc2').innerHTML = material.description;
            materialElement.querySelector('.info-card-format .format').innerHTML = Array.from(document.getElementById('format').selectedOptions).map(option => `<a href="/99/search.html?t=0&amp;q=${encodeURIComponent(option.value)}" class="ft2">${option.value}</a>`).join(' '); // YAHU
            materialElement.querySelector('.info-card-format .freepaid').innerHTML = Array.from(document.getElementById('freepaid').selectedOptions).map(option => `<a href="/99/search.html?t=0&amp;q=${encodeURIComponent(option.value)}" class="fp2">${option.value}</a>`).join(' '); // YAHU
            materialElement.querySelector('.info-card-label img').src = material.image;
            materialElement.querySelector('.info-card-title a').href = material.link;
            materialElement.querySelector('.info-card-title a').target = material.linkType === 'target_blank' ? '_blank' : '';
            materialElement.querySelector('.info-card-format .tags .tg').innerHTML = material.tagsHTML;

            popup.style.display = "none";
            saveMaterialsToLocalStorage();

            form.removeEventListener('submit', updateHandler);
            form.addEventListener('submit', submitHandler);
        });
    }

    function restoreMultiSelectValues(elementId, values) {
        const select = document.getElementById(elementId);
        Array.from(select.options).forEach(option => {
            option.selected = values.includes(option.value);
        });
    }

    loadMaterialsFromLocalStorage();

    // Вызов updateMaterialCount после каждого изменения фильтров
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('change', updateMaterialCount);
    });

    updateMaterialCount(); // Обновление счётчика материалов при загрузке страницы

    // Функция для валидации поля поиска
    function validateSearch() {
        var input = document.querySelector('.header-search-input');

        if (input.value.trim() === "") {
            input.placeholder = "So what should we look for?";
            return false;
        }

        return true;
    }

    document.querySelectorAll('form').forEach(form => {
        if (form.id !== 'main-search-form') {
            form.onsubmit = validateSearch;
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get("q");
        const searchResultsContainer = document.getElementById("search-results");

        if (query) {
            searchResultsContainer.innerHTML = "Searching...";

            fetch('/csjs/pages.json')
                .then(response => response.json())
                .then(pages => {
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
                                        const link = `<a href="${pageUrl}" class="sltyt"></a>`;
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
                })
                .catch(error => {
                    console.error('Error loading pages:', error);
                    searchResultsContainer.innerHTML = 'An error occurred while loading pages.';
                });
        }
    });
});
