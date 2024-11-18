

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

        
const numbers = document.querySelectorAll('.numbers span');
const textSection = document.querySelectorAll('.text-section');
const videoContainers = document.querySelectorAll('.video-container');

numbers.forEach((number, index) => {
    number.addEventListener('click', () => {
        // Убираем активный класс у всех чисел
        numbers.forEach(num => num.classList.remove('active'));
        // Убираем активный класс у всех текстовых секций
        textSections.forEach(text => text.classList.remove('active'));
        // Убираем активный класс у всех контейнеров видео
        videoContainers.forEach(video => video.classList.remove('active'));

        // Добавляем активный класс только текущим элементам
        number.classList.add('active');
        textSections[index].classList.add('active');
        videoContainers[index].classList.add('active');
    });
});        