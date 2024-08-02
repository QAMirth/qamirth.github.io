document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

  document.addEventListener('DOMContentLoaded', function() {
            // Подсчет количества блоков с классом info-card4
            function updateMaterialCount() {
                const materialCount = document.querySelectorAll('.info-card').length;
                document.querySelector('.material-count').textContent = `(${materialCount} materials)`;
            }

            updateMaterialCount();

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
                const linkType = document.getElementById('link-type').value;

                const newMaterial = createMaterialElement({
                    title, description, format, freepaid, image, link, linkType
                });

                // Добавление нового материала на страницу
                document.querySelector('.info-cards-grid').appendChild(newMaterial);

                // Обновление количества материалов
                updateMaterialCount();

                // Сохранение данных в localStorage
                saveMaterialsToLocalStorage();

                // Скрытие формы
                popup.style.display = "none";
            });

            function createMaterialElement(material) {
                const newMaterial = document.createElement('div');
                newMaterial.className = 'info-card';
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
                    <button class="delete-material" style="color:red; cursor:pointer;">&times;</button>
                    <button class="copy-html" style="color:blue; cursor:pointer;">Copy HTML</button>
                    <button class="edit-material" style="color:green; cursor:pointer;">Edit</button>
                `;

                newMaterial.querySelector('.delete-material').addEventListener('click', function() {
                    newMaterial.remove();
                    updateMaterialCount();
                    saveMaterialsToLocalStorage();
                });

                newMaterial.querySelector('.copy-html').addEventListener('click', function() {
                    const materialHTML = newMaterial.outerHTML.replace(/delete-material/g, 'delete-material2').replace(/copy-html/g, 'copy-html2');
                    navigator.clipboard.writeText(materialHTML);
                });

                newMaterial.querySelector('.edit-material').addEventListener('click', function() {
                    editMaterial(newMaterial, material);
                });

                return newMaterial;
            }

            function saveMaterialsToLocalStorage() {
                const materials = document.querySelectorAll('.info-card');
                const materialsData = Array.from(materials).map(material => {
                    return {
                        link: material.querySelector('a.ttb').href,
                        title: material.querySelector('.info-card-title').textContent.trim(),
                        description: material.querySelector('.info-card-desc').textContent,
                        format: material.querySelector('.format').textContent,
                        freepaid: material.querySelector('.freepaid').textContent,
                        image: material.querySelector('img').src,
                        linkType: material.querySelector('a.ttb').getAttribute('target') ? 'target_blank' : 'direct_link'
                    };
                });
                localStorage.setItem('materials', JSON.stringify(materialsData));
            }

            function loadMaterialsFromLocalStorage() {
                const materialsData = JSON.parse(localStorage.getItem('materials'));
                if (materialsData) {
                    materialsData.forEach(material => {
                        const newMaterial = createMaterialElement(material);
                        document.querySelector('.info-cards-grid').appendChild(newMaterial);
                    });

                    // Обновление количества материалов
                    updateMaterialCount();
                }
            }

            function editMaterial(materialElement, materialData) {
                document.getElementById('title').value = materialData.title;
                document.getElementById('description').value = materialData.description;
                document.getElementById('format').value = materialData.format;
                document.getElementById('freepaid').value = materialData.freepaid;
                document.getElementById('image').value = materialData.image;
                document.getElementById('link').value = materialData.link;
                document.getElementById('link-type').value = materialData.linkType;

                popup.style.display = "block";

                form.onsubmit = function(event) {
                    event.preventDefault();

                    const updatedMaterial = {
                        title: document.getElementById('title').value,
                        description: document.getElementById('description').value,
                        format: document.getElementById('format').value,
                        freepaid: document.getElementById('freepaid').value,
                        image: document.getElementById('image').value,
                        link: document.getElementById('link').value,
                        linkType: document.getElementById('link-type').value
                    };

                    materialElement.innerHTML = createMaterialElement(updatedMaterial).innerHTML;

                    updateMaterialCount();
                    saveMaterialsToLocalStorage();

                    popup.style.display = "none";
                    form.onsubmit = null; // Remove the custom submit handler
                };
            }

            // Загрузка материалов из localStorage при загрузке страницы
            loadMaterialsFromLocalStorage();
        });

