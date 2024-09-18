document.addEventListener("DOMContentLoaded", function() {
    populateFilters();

    // Обработчики событий для фильтров
    document.getElementById('format-filter').addEventListener('change', function() {
        filterMaterials();
    });

    document.getElementById('freepaid-filter').addEventListener('change', function() {
        filterMaterials();
    });

    // Обновление счетчика при загрузке страницы
    updateMaterialCount();
});

function sortMaterials() {
    const sortValue = document.getElementById('sort-filter').value;
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

function populateFilters() {
    const formatFilter = document.getElementById('format-filter');
    const freepaidFilter = document.getElementById('freepaid-filter');
    const materials = Array.from(document.getElementsByClassName('info-card'));

    const formats = new Set();
    const freepaids = new Set();

    materials.forEach(material => {
        const formatLinks = material.querySelectorAll('.format a'); // YAHU: Изменено
        const freepaidLinks = material.querySelectorAll('.freepaid a'); // YAHU: Изменено

        formatLinks.forEach(link => {
            const text = link.textContent.trim();
            if (text) {
                text.split(' ').forEach(part => formats.add(part)); // YAHU: Изменено
            }
        });

        freepaidLinks.forEach(link => {
            const text = link.textContent.trim();
            if (text) {
                text.split(' ').forEach(part => freepaids.add(part)); // YAHU: Изменено
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

function filterMaterials() {
    const formatFilter = document.getElementById('format-filter').value;
    const freepaidFilter = document.getElementById('freepaid-filter').value;
    const materials = Array.from(document.getElementsByClassName('info-card'));

    materials.forEach(material => {
        const formatArray = Array.from(material.querySelectorAll('.format a')).map(link => link.textContent.trim().split(' ')).flat(); // YAHU: Изменено
        const freepaidArray = Array.from(material.querySelectorAll('.freepaid a')).map(link => link.textContent.trim().split(' ')).flat(); // YAHU: Изменено

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



















document.addEventListener("DOMContentLoaded", function() {
    populateFilters();

    // Обработчики событий для фильтров
    document.getElementById('format-filter-r').addEventListener('change', function() {
        filterMaterials();
    });

    document.getElementById('freepaid-filter-r').addEventListener('change', function() {
        filterMaterials();
    });

    // Обновление счетчика при загрузке страницы
    updateMaterialCount();
});

function sortMaterials() {
    const sortValue = document.getElementById('sort-filter-r').value;
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

function populateFilters() {
    const formatFilter = document.getElementById('format-filter-r');
    const freepaidFilter = document.getElementById('freepaid-filter-r');
    const materials = Array.from(document.getElementsByClassName('info-card'));

    const formats = new Set();
    const freepaids = new Set();

    materials.forEach(material => {
        const formatLinks = material.querySelectorAll('.format a'); // YAHU: Изменено
        const freepaidLinks = material.querySelectorAll('.freepaid a'); // YAHU: Изменено

        formatLinks.forEach(link => {
            const text = link.textContent.trim();
            if (text) {
                text.split(' ').forEach(part => formats.add(part)); // YAHU: Изменено
            }
        });

        freepaidLinks.forEach(link => {
            const text = link.textContent.trim();
            if (text) {
                text.split(' ').forEach(part => freepaids.add(part)); // YAHU: Изменено
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

function filterMaterials() {
    const formatFilter = document.getElementById('format-filter-r').value;
    const freepaidFilter = document.getElementById('freepaid-filter-r').value;
    const materials = Array.from(document.getElementsByClassName('info-card'));

    materials.forEach(material => {
        const formatArray = Array.from(material.querySelectorAll('.format a')).map(link => link.textContent.trim().split(' ')).flat(); // YAHU: Изменено
        const freepaidArray = Array.from(material.querySelectorAll('.freepaid a')).map(link => link.textContent.trim().split(' ')).flat(); // YAHU: Изменено

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
