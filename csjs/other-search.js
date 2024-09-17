// Функция для валидации поля поиска
    function validateSearch() {
        var input = document.querySelector('.header-search-input2');

        if (input.value.trim() === "") {
            input.placeholder = "So what should we look for?";
            return false;
        }

        return true;
    }

    document.querySelectorAll('form').forEach(form => {
        if (form.id !== 'main-search-form') {
            form.onsubmit = validateSearch;
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get("q");
        const searchResultsContainer = document.getElementById("search-results");

        if (query) {
            searchResultsContainer.innerHTML = "Searching...";

            fetch('/csjs/pages.json')
                .then(response => response.json())
                .then(pages => {
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
                                        const link = `<a href="${pageUrl}" class="sltyt"></a>`;
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
                                searchResultsContainer.innerHTML = 'No results found.';
                            }
                        })
                        .catch(error => {
                            console.error('Search error:', error);
                            searchResultsContainer.innerHTML = 'An error occurred while searching.';
                        });
                })
                .catch(error => {
                    console.error('Error loading pages:', error);
                    searchResultsContainer.innerHTML = 'An error occurred while loading pages.';
                });
        }
    });
