document.addEventListener("DOMContentLoaded", function() {
    populateFilters('format-filter', 'freepaid-filter'); // for 1st block
    populateFilters('format-filter-r', 'freepaid-filter-r'); // for 2st block

    // Обработчики событий для фильтров
    document.getElementById('format-filter').addEventListener('change', function() {
        filterMaterials('format-filter', 'freepaid-filter');
    });

    document.getElementById('freepaid-filter').addEventListener('change', function() {
        filterMaterials('format-filter', 'freepaid-filter');
    });

    document.getElementById('format-filter-r').addEventListener('change', function() {
        filterMaterials('format-filter-r', 'freepaid-filter-r');
    });

    document.getElementById('freepaid-filter-r').addEventListener('change', function() {
        filterMaterials('format-filter-r', 'freepaid-filter-r');
    });

    // Обновление счетчика при загрузке страницы
    updateMaterialCount();
});

function sortMaterials() {
    const sortValue = document.getElementById('sort-filter').value || document.getElementById('sort-filter-r').value; // Добавляем поддержку второго блока
    const [type, order] = sortValue.split('-');
    const materialsContainer = document.querySelector('.info-cards-grid');
    const materials = Array.from(materialsContainer.getElementsByClassName('info-card'));

    materials.sort((a, b) => {
        let valueA, valueB;

        if (type === 'title') {
            valueA = a.getAttribute('data-title').toLowerCase();
            valueB = b.getAttribute('data-title').toLowerCase();
        }

        if (order === 'asc') {
            return valueA > valueB ? 1 : -1;
        } else {
            return valueA < valueB ? 1 : -1;
        }
    });

    materialsContainer.innerHTML = '';
    materials.forEach(material => materialsContainer.appendChild(material));

    // Обновляем счетчик после сортировки
    updateMaterialCount();
}

function populateFilters(formatFilterId, freepaidFilterId) {
    const formatFilter = document.getElementById(formatFilterId);
    const freepaidFilter = document.getElementById(freepaidFilterId);
    const materials = Array.from(document.getElementsByClassName('info-card'));

    const formats = new Set();
    const freepaids = new Set();

    materials.forEach(material => {
        const formatLinks = material.querySelectorAll('.format a');
        const freepaidLinks = material.querySelectorAll('.freepaid a');

        formatLinks.forEach(link => {
            const text = link.textContent.trim();
            if (text) {
                text.split(' ').forEach(part => formats.add(part));
            }
        });

        freepaidLinks.forEach(link => {
            const text = link.textContent.trim();
            if (text) {
                text.split(' ').forEach(part => freepaids.add(part));
            }
        });
    });

    formats.forEach(format => {
        const option = document.createElement('option');
        option.value = format;
        option.textContent = format;
        formatFilter.appendChild(option);
    });

    freepaids.forEach(freepaid => {
        const option = document.createElement('option');
        option.value = freepaid;
        option.textContent = freepaid;
        freepaidFilter.appendChild(option);
    });
}

function filterMaterials(formatFilterId, freepaidFilterId) {
    const formatFilter = document.getElementById(formatFilterId).value;
    const freepaidFilter = document.getElementById(freepaidFilterId).value;
    const materials = Array.from(document.getElementsByClassName('info-card'));

    materials.forEach(material => {
        const formatArray = Array.from(material.querySelectorAll('.format a')).map(link => link.textContent.trim().split(' ')).flat();
        const freepaidArray = Array.from(material.querySelectorAll('.freepaid a')).map(link => link.textContent.trim().split(' ')).flat();

        const formatMatch = formatFilter === '' || formatArray.includes(formatFilter);
        const freepaidMatch = freepaidFilter === '' || freepaidArray.includes(freepaidFilter);

        if (formatMatch && freepaidMatch) {
            material.style.display = '';
        } else {
            material.style.display = 'none';
        }
    });

    // Обновляем счетчик после фильтрации
    updateMaterialCount();
}

function updateMaterialCount() {
    const materials = Array.from(document.getElementsByClassName('info-card'));
    const visibleMaterials = materials.filter(material => material.style.display !== 'none').length;
    const totalMaterials = materials.length;

    const materialCountSpan = document.querySelector('.material-count');
    if (materialCountSpan) {
        materialCountSpan.textContent = visibleMaterials === totalMaterials ? `(${totalMaterials})` : `(${visibleMaterials}/${totalMaterials})`;
    }
}
