 const jsonFilePath = '/csjs/pages.json';  // путь к JSON файлу
    const tagCloudLimit = 24;
    const tagCounts = {};

    // Функция для парсинга и получения тегов с каждой страницы
    function extractTagsFromHTML(html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const tags = doc.querySelectorAll('.tg2');
        tags.forEach(tag => {
            const tagText = tag.textContent.trim();
            if (tagCounts[tagText]) {
                tagCounts[tagText].count++;
            } else {
                tagCounts[tagText] = {
                    count: 1,
                    url: tag.href  // Сохраняем URL ссылки тега
                };
            }
        });
    }

    // Функция для получения страницы и обработки тегов
    async function fetchAndProcessPage(pageUrl) {
        try {
            const response = await fetch(pageUrl);
            const html = await response.text();
            extractTagsFromHTML(html);
        } catch (error) {
            console.error(`Ошибка загрузки страницы ${pageUrl}:`, error);
        }
    }

    // Функция для загрузки JSON файла со страницами
    async function fetchPages() {
        try {
            const response = await fetch(jsonFilePath);
            const json = await response.json();
            return json.pages;
        } catch (error) {
            console.error('Ошибка загрузки JSON файла:', error);
            return [];
        }
    }

    // Главная функция, которая загружает страницы и создает облако тегов
    async function createTagCloud() {
        // Загружаем список страниц из JSON файла
        const pages = await fetchPages();

        // Загружаем все страницы и обрабатываем теги
        await Promise.all(pages.map(page => fetchAndProcessPage(page)));

        // Сортируем теги по частоте использования и выбираем топ 24
        const sortedTags = Object.entries(tagCounts)
            .sort((a, b) => b[1].count - a[1].count)
            .slice(0, tagCloudLimit);

        // Отображаем теги
        const tagCloudElement = document.getElementById('tagCloud');
        sortedTags.forEach(([tag, data]) => {
            const tagElement = document.createElement('span');
            tagElement.classList.add('tag');

            const tagLink = document.createElement('a');
            tagLink.href = data.url;
            tagLink.classList.add('tag2');
            tagLink.textContent = tag;

            const tagCount = document.createElement('span');
            tagCount.classList.add('num');
            tagCount.textContent = `(${data.count})`;

            tagElement.appendChild(tagLink);
            tagElement.appendChild(tagCount);
            tagCloudElement.appendChild(tagElement);
        });
    }

    // Запускаем создание облака тегов
    createTagCloud();



        // Получаем текущий год
        const currentYear = new Date().getFullYear();
        
        // Выводим текущий год в span с id 'currentYear'
        document.getElementById('currentYear').textContent = currentYear;
   