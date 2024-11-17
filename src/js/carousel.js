
        const carouselContent = document.getElementById("carousel-content");
        const numberButtons = document.querySelectorAll(".numbers span");
        const textSections = document.querySelectorAll(".text-section");

        numberButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Убираем "active" у всех кнопок
                numberButtons.forEach(btn => btn.classList.remove("active"));
                
                // Добавляем "active" нажатой кнопке
                button.classList.add("active");
                
                // Получаем индекс нажатой кнопки
                const index = button.getAttribute("data-index");
                
                // Сдвигаем карусель
                carouselContent.style.transform = `translateX(-${index * 100}%)`;
                
                // Обновляем текстовый блок
                textSections.forEach(text => text.classList.remove("active"));
                document.getElementById(`text-${index}`).classList.add("active");
            });
        });