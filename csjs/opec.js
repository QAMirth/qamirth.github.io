      document.querySelectorAll('.button-link2').forEach(button => {
            button.addEventListener('click', function() {
                const desc = this.parentElement;
                desc.classList.add('expanded');
                this.style.display = 'none';
                const buttonLink2 = desc.parentElement.querySelector('.button-link3');
                buttonLink2.textContent = 'Close info block';
                buttonLink2.style.display = 'inline';
            });
        });

        document.querySelectorAll('.button-link3').forEach(button => {
            button.addEventListener('click', function() {
                const desc = this.closest('.info-card').querySelector('.info-card-desc');
                const isExpanded = desc.classList.toggle('expanded');
                const buttonLink = desc.querySelector('.button-link2');
                if (isExpanded) {
                    buttonLink.style.display = 'none';
                    this.textContent = 'Close';
                } else {
                    buttonLink.style.display = 'inline';
                    this.textContent = 'More info';
                    this.style.display = 'none';
                }
            });
        });
