document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var quill = new Quill('#description-container', {
        theme: 'snow'
    });
    const pageKey = location.pathname.split('/').pop(); // Extracts the current page name (e.g., '1.html')

    function updateMaterialCount() {
        const materialCount = document.querySelectorAll('.info-card').length;
        document.querySelector('.material-count').textContent = `${materialCount} materials`;
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
        const description = quill.root.innerHTML; // Get description from Quill
        const format = document.getElementById('format').value;
        const freepaid = document.getElementById('freepaid').value;
        const image = document.getElementById('image').value;
        const link = document.getElementById('link').value;
        const linkType = document.getElementById('link-type').value;

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
                    <img src="${material.image}" alt="#" class="ggh">
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
            const materialHTML = removeEmojiFromHTML(newMaterial.outerHTML) // ИЗМЕНЕНИЕ: Удаление эмодзи перед копированием
                .replace('info-card dynamic', 'info-card static')
                .replace('info-card-desc2', 'info-card-desc')
                .replace(/delete-material/g, 'delete-material2')
                .replace(/copy-html/g, 'copy-html2')
                .replace(/edit-material/g, 'edit-material2')
                .replace(/<div class="info-card static"/g, `<div class="info-card static" data-title="${material.title}"`)
                .replace(/<div class="info-card-desc">[\s\S]*?<\/div>/, `<div class="info-card-desc"><a class="button-link2"></a>${material.description}</div>`);
            navigator.clipboard.writeText(materialHTML);
        });

        newMaterial.querySelector('.edit-material').addEventListener('click', function() {
            editMaterial(newMaterial, material);
        });



        addEmoji(newMaterial); // ИЗМЕНЕНИЕ: Добавление эмодзи при создании элемента

        return newMaterial;
    }

    function saveMaterialsToLocalStorage() {
        const materials = document.querySelectorAll('.info-card.dynamic');
        const materialsData = Array.from(materials).map(material => {
            return {
                title: material.querySelector('.info-card-title a').textContent,
                description: material.querySelector('.info-card-desc2').innerHTML, // Fix to get HTML content
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
        quill.root.innerHTML = material.description; // Update this line to set content to Quill editor
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
            material.description = quill.root.innerHTML; // Update this line to get content from Quill editor
            material.format = document.getElementById('format').value;
            material.format = document.getElementById('format').value;
            material.freepaid = document.getElementById('freepaid').value;
            material.image = document.getElementById('image').value;
            material.link = document.getElementById('link').value;
            material.linkType = document.getElementById('link-type').value;

            materialElement.innerHTML = `
                <div class="info-card-label">
                    <a href="${material.link}" class="ttc" target="${material.linkType === 'target_blank' ? '_blank' : ''}" rel="${material.linkType === 'target_blank' ? 'nofollow' : ''}">
                        <img src="${material.image}" alt="#" class="ggh">
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
                const materialHTML = removeEmojiFromHTML(materialElement.outerHTML) // ИЗМЕНЕНИЕ: Удаление эмодзи перед копированием
                    .replace('info-card dynamic', 'info-card static')
                    .replace('info-card-desc2', 'info-card-desc')
                    .replace(/delete-material/g, 'delete-material2')
                    .replace(/copy-html/g, 'copy-html2')
                    .replace(/edit-material/g, 'edit-material2')
                    .replace(/<div class="info-card static"/g, `<div class="info-card static" data-title="${material.title}"`)
                    .replace(/<div class="info-card-desc">[\s\S]*?<\/div>/, `<div class="info-card-desc"><a class="button-link2"></a>${material.description}</div>`);
                navigator.clipboard.writeText(materialHTML);
            });

            materialElement.querySelector('.edit-material').addEventListener('click', function() {
                editMaterial(materialElement, material);
            });


            addEmoji(materialElement); // ИЗМЕНЕНИЕ: Добавление эмодзи при редактировании элемента

            updateMaterialCount();
            saveMaterialsToLocalStorage();
            form.removeEventListener('submit', updateHandler);
            form.addEventListener('submit', submitHandler);
            popup.style.display = "none";
        });
    }

   // ИЗМЕНЕНИЕ: Функция для добавления эмодзи
    function addEmoji(materialElement) {
        const formatElement = materialElement.querySelector('.format');
        const freePaidElement = materialElement.querySelector('.freepaid');

        if (formatElement && formatElement.textContent.trim() === 'Online2') {
            formatElement.textContent = ' ' + formatElement.textContent;
        }

        if (freePaidElement && freePaidElement.textContent.trim() === 'Free2') {
            freePaidElement.textContent = ' ' + freePaidElement.textContent;
        }
    }

    // ИЗМЕНЕНИЕ: Функция для удаления эмодзи из HTML кода
    function removeEmojiFromHTML(html) {
        return html.replace(' ', '').replace(' ', '');
    }

    // Загрузка сохраненных материалов
    loadMaterialsFromLocalStorage();
});

document.addEventListener('DOMContentLoaded', function() {
    const formatElements = document.querySelectorAll('.format');
    const freePaidElements = document.querySelectorAll('.freepaid');

    formatElements.forEach(element => {
        if (element.textContent.trim() === 'Online2') {
            element.textContent = ' ' + element.textContent;
        }
    });

    freePaidElements.forEach(element => {
        if (element.textContent.trim() === 'Free2') {
            element.textContent = ' ' + element.textContent;
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const pages = [
        '/8/8.html',
        '/index.html',
        '3.html',
        // ... добавьте все страницы вашего сайта
        '16.html'
    ];

    let siteIndex = {};

    function fetchAndIndexPages() {
        const fetchPromises = pages.map(page => {
            return fetch(page)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const textContent = doc.body.innerText.toLowerCase();
                    siteIndex[page] = textContent;
                });
        });

        return Promise.all(fetchPromises);
    }

    function search(query) {
        const results = [];
        query = query.toLowerCase();

        for (const [page, content] of Object.entries(siteIndex)) {
            if (content.includes(query)) {
                results.push(page);
            }
        }

        return results;
    }

    function displayResults(results) {
        const resultsContainer = document.querySelector('#search-results');
        resultsContainer.innerHTML = '';  // Очистка предыдущих результатов
        if (results.length === 0) {
            resultsContainer.textContent = 'No results found';
        } else {
            results.forEach(result => {
                const link = document.createElement('a');
                link.href = result;
                link.textContent = `Found in: ${result}`;
                resultsContainer.appendChild(link);
                resultsContainer.appendChild(document.createElement('br'));
            });
        }
    }

    fetchAndIndexPages().then(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get('q');
        
        if (query) {
            const results = search(query);
            displayResults(results);
        }
    });
});

