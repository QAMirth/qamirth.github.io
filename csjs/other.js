document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});


 document.addEventListener('DOMContentLoaded', function() {
    const pageKey = location.pathname.split('/').pop(); // Extracts the current page name (e.g., '1.html')

    function updateMaterialCount() {
        const materialCount = document.querySelectorAll('.info-card').length;
        document.querySelector('.material-count').textContent = `(${materialCount} materials)`;
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
        const description = document.getElementById('description').value;
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
                <p class="info-card-desc">${material.description}</p>
                <p class="info-card-format">
                    <span class="format">${material.format}</span>
                    <span class="freepaid">${material.freepaid}</span>
                </p>
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
                .replace(/delete-material/g, 'delete-material2')
                .replace(/copy-html/g, 'copy-html2')
                .replace(/edit-material/g, 'edit-material2');
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
                description: material.querySelector('.info-card-desc').textContent,
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
        document.getElementById('description').value = material.description;
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
            material.description = document.getElementById('description').value;
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
                    <p class="info-card-desc">${material.description}</p>
                    <p class="info-card-format">
                        <span class="format">${material.format}</span>
                        <span class="freepaid">${material.freepaid}</span>
                    </p>
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
                    .replace(/delete-material/g, 'delete-material2')
                    .replace(/copy-html/g, 'copy-html2')
                    .replace(/edit-material/g, 'edit-material2');
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

        if (formatElement && formatElement.textContent.trim() === 'Download') {
            formatElement.textContent = '🌐 ' + formatElement.textContent;
        }

        if (freePaidElement && freePaidElement.textContent.trim() === 'Trial') {
            freePaidElement.textContent = '❤️ ' + freePaidElement.textContent;
        }
    }

    // ИЗМЕНЕНИЕ: Функция для удаления эмодзи из HTML кода
    function removeEmojiFromHTML(html) {
        return html.replace('🌐 ', '').replace('❤️ ', '');
    }

    // Загрузка сохраненных материалов
    loadMaterialsFromLocalStorage();
});

document.addEventListener('DOMContentLoaded', function() {
    const formatElements = document.querySelectorAll('.format');
    const freePaidElements = document.querySelectorAll('.freepaid');

    formatElements.forEach(element => {
        if (element.textContent.trim() === 'Download') {
            element.textContent = '🌐 ' + element.textContent;
        }
    });

    freePaidElements.forEach(element => {
        if (element.textContent.trim() === 'Trial') {
            element.textContent = '❤️ ' + element.textContent;
        }
    });
});
