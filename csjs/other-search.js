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
document.addEventListener("DOMContentLoaded", function() {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get("q");
    const searchResultsContainer = document.getElementById("search-results");

    if (query && query.trim() !== "") {
        searchResultsContainer.innerHTML = "Searching...";

        // Загрузка списка страниц из JSON файла
        fetch('../csjs/pages.json')
            .then(response => response.json())
            .then(data => {
            const pages = data.pages;

                

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
                            const link = `<a href="${pageUrl}" class="sltyt" aria-label="#Link"></a>`;
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
                    searchResultsContainer.innerHTML = 'No results';
                }
            })
            .catch(error => {
                console.error('Search error:', error);
                searchResultsContainer.innerHTML = 'An error occurred while searching.';
            });

    } else {
        searchResultsContainer.innerHTML = 'No results found.';
    }
});
