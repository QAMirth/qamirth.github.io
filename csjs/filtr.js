document.addEventListener("DOMContentLoaded", function() {
    populateFilters();
});

function sortMaterials() {
    const sortValue = document.getElementById('sort-filter').value;
    const [type, order] = sortValue.split('-');
    const materialsContainer = document.getElementById('materials');
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
}

function populateFilters() {
    const formatFilter = document.getElementById('format-filter');
    const freepaidFilter = document.getElementById('freepaid-filter');
    const materials = Array.from(document.getElementsByClassName('info-card'));

    const formats = new Set();
    const freepaids = new Set();

    materials.forEach(material => {
        formats.add(material.querySelector('.format').textContent.trim());
        freepaids.add(material.querySelector('.freepaid').textContent.trim());
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
        const format = material.querySelector('.format').textContent.trim();
        const freepaid = material.querySelector('.freepaid').textContent.trim();
        
        if ((formatFilter === '' || format === formatFilter) && 
            (freepaidFilter === '' || freepaid === freepaidFilter)) {
            material.style.display = '';
        } else {
            material.style.display = 'none';
        }
    });
}
