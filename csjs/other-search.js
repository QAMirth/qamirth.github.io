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

// Привязываем функцию валидации ко всем формам, кроме основной
document.querySelectorAll('form').forEach(form => {
    if (form.id !== 'main-search-form') {  // Пропустить форму на главной странице
        form.onsubmit = validateSearch;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get("q");
    const searchResultsContainer = document.getElementById("search-results");

    if (query && query.trim() !== "") {
        searchResultsContainer.innerHTML = "Searching...";

        // HERE 1: Загрузка списка страниц из внешнего JSON файла
        fetch('/csjs/pages.json')  // Убедитесь, что путь к файлу правильный
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();  // Парсинг JSON
            })
            .then(data => {
                const pages = data.pages;  // HERE 2: Используем данные из JSON

                // Функция для поиска на всех страницах
                function performSearchOnPage(pageUrl) {
                    return fetch(pageUrl)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Failed to fetch ${pageUrl}`);
                            }
                            return response.text();
                        })
                        .then(html => {
                            const parser = new DOMParser();
                            const doc = parser.parseFromString(html, 'text/html');
                            const infoCards = doc.querySelectorAll('.info-card');
                            let results = '';

                            infoCards.forEach(card => {
                                if (card.innerText.toLowerCase().includes(query.toLowerCase())) {
                                    const link = `<a href="${pageUrl}" class="sltyt" aria-label="#Link"></a>`;
                                    const bl3Element = card.querySelector('.info-card-format .bl3');
                                    if (bl3Element) {
                                        // HERE 3: Вставка ссылки перед элементом .bl3
                                        bl3Element.insertAdjacentHTML('beforebegin', link);
                                    }
                                    results += card.outerHTML;
                                }
                            });

                            return results;
                        });
                }

                // HERE 4: Выполнение поиска по всем страницам после загрузки списка
                Promise.all(pages.map(performSearchOnPage))
                    .then(results => {
                        const mergedResults = results.join('');
                        if (mergedResults) {
                            searchResultsContainer.innerHTML = mergedResults;
                        } else {
                            searchResultsContainer.innerHTML = 'No results';
                        }
                    })
                    .catch(error => {
                        console.error('Search error:', error);
                        searchResultsContainer.innerHTML = 'An error occurred while searching.';
                    });
            })
            .catch(error => {  // HERE 5: Обработка ошибок при загрузке JSON
                console.error('Failed to load pages JSON:', error);
                searchResultsContainer.innerHTML = 'Failed to load search data.';
            });
    } else {
        searchResultsContainer.innerHTML = 'No results found.';
    }
});
