// Функция для валидации поля поиска
function validateSearch() {
    var input = document.querySelector('.header-search-input2');
    
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
    const h1Title = document.querySelector('h1');
    const resultsCountSpan = document.querySelector('.results-count');

    if (query && query.trim() !== "") {
        h1Title.textContent = `Search results for "${query}"`;
        searchResultsContainer.innerHTML = "Searching...";

        fetch('/csjs/pages.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const pages = data.pages;
                 const uniqueCards = new Set();  // Set 

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
                            let matchingCards = 0;  // Track number of matching cards


                            infoCards.forEach(card => {
    if (card.innerText.toLowerCase().includes(query.toLowerCase())) {
        // Получаем id элемента с классом info-card
        const cardId = card.getAttribute('id');

           // Проверяем, добавляли ли уже этот блок в результаты
                                    if (!uniqueCards.has(cardId)) {
                                        uniqueCards.add(cardId);  // Добавляем id в Set
        
        // Формируем ссылку, добавляя id в конец href
        const link = `<a href="${pageUrl}#${cardId}" class="sltyt" aria-label="#Link"></a>`;
        
        // Находим элемент с классом .bl3 внутри .info-card-format
        const bl3Element = card.querySelector('.info-card-format .bl3');
        if (bl3Element) {
            // Вставляем ссылку перед элементом bl3
            bl3Element.insertAdjacentHTML('beforebegin', link);
        }
        
        // Добавляем HTML-код текущего info-card в результаты
        results += card.outerHTML;
        matchingCards++;  // Увеличиваем счетчик совпадающих карточек
    }
});

                            return { results, matchingCards };
                        });
                }

                Promise.all(pages.map(performSearchOnPage))
                    .then(resultsArray => {
                        const mergedResults = resultsArray.map(result => result.results).join('');
                        const totalResultsCount = resultsArray.reduce((acc, result) => acc + result.matchingCards, 0);

                        if (mergedResults) {
                            searchResultsContainer.innerHTML = mergedResults;
                        } else {
                            searchResultsContainer.innerHTML = 'No results';
                        }

                        // Update results count based on the actual number of matched .info-card elements
                        resultsCountSpan.textContent = `(${totalResultsCount} found)`;
                    })
                    .catch(error => {
                        console.error('Search error:', error);
                        searchResultsContainer.innerHTML = 'An error occurred while searching.';
                    });
            })
            .catch(error => {
                console.error('Failed to load pages JSON:', error);
                searchResultsContainer.innerHTML = 'Failed to load search data.';
            });
    } else {
        searchResultsContainer.innerHTML = 'No results found.';
        h1Title.textContent = 'Search';
        resultsCountSpan.textContent = '0 result(s) found';
    }
});
