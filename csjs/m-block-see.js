    function setCSS(size) {
            let root = document.documentElement;

            if (size === 'maximum') {
                root.style.setProperty('--mp-top', 'var(--pad)');
                root.style.setProperty('--mp-left', 'var(--pad)');
                root.style.setProperty('--mp-bottom', 'var(--10)');
                root.style.setProperty('--mp-right', 'var(--pad)');
                root.style.setProperty('--mp-border-radius', 'var(--border-radius)');
                root.style.setProperty('--mp-margin-bottom', 'var(--pad-small)');
                root.style.setProperty('--icc-display', 'flex');
                root.style.setProperty('--icc-display-expanded', 'flex');
            } else if (size === 'minimum') {
                root.style.setProperty('--mp-top', 'var(--10)');
                root.style.setProperty('--mp-left', 'var(--15)');
                root.style.setProperty('--mp-bottom', 'var(--10)');
                root.style.setProperty('--mp-right', 'var(--15)');
                root.style.setProperty('--mp-border-radius', 'var(--0)');
                root.style.setProperty('--mp-margin-bottom', '-1px');
                root.style.setProperty('--icc-display', 'none');
                root.style.setProperty('--icc-display-expanded', 'flex');
            }
        }

        // Инициализация значений при загрузке страницы
        document.addEventListener('DOMContentLoaded', () => {
            // Если в куки нет значения, устанавливаем состояние по умолчанию
            let savedState = getCookie('iconState') || 'passive';
            setState(savedState);
        });

        // Устанавливаем состояние и сохраняем в куки
        function setState(state) {
            const iconElement = document.getElementById('toggleIconm');
            if (state === 'active') {
                iconElement.classList.remove('passive');
                iconElement.classList.add('active');
                setCSS('minimum');
                document.cookie = `iconState=active; path=/; max-age=31536000;`;
            } else {
                iconElement.classList.remove('active');
                iconElement.classList.add('passive');
                setCSS('maximum');
                document.cookie = `iconState=passive; path=/; max-age=31536000;`;
            }
        }

        // Получение значения куки
        function getCookie(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        // Переключение состояния при клике на иконку
        document.getElementById('toggleIconm').addEventListener('click', () => {
            const iconElement = document.getElementById('toggleIconm');
            const currentState = iconElement.classList.contains('active') ? 'active' : 'passive';
            setState(currentState === 'passive' ? 'active' : 'passive');
        });
