// Находим необходимые элементы в HTML по их ID
const loadButton = document.getElementById("load-btn");
const loaderSpinner = document.getElementById("loader");
const galleryGrid = document.getElementById("gallery-grid");

// Ссылка на API. Запрашиваем ровно 12 случайных собачек
const apiRefUrl = "https://dog.ceo/api/breeds/image/random/12 ";

// Асинхронная функция для загрузки и отрисовки фотографий
async function fetchAndRenderPhotos(event) {
    // Предотвращаем стандартное поведение (если вдруг кнопка окажется внутри формы)
    event.preventDefault();

    try {
        // 1. Подготовка: включаем лоадер, выключаем кнопку, чистим старую сетку
        loaderSpinner.style.display = "block";
        loadButton.disabled = true;
        galleryGrid.innerHTML = "";

        // 2. Запрос к серверу
        const networkResponse = await fetch(apiRefUrl);

        // Проверяем статус ответа (все ли хорошо с сервером)
        if (!networkResponse.ok) {
            throw new Error("Не удалось загрузить данные с сервера.");
        }

        // 3. Распаковка JSON
        const responseData = await networkResponse.json();
        
        // У Dog API массив с ссылками на картинки лежит в свойстве "message"
        const photoUrlsList = responseData.message;

        // 4. Создание элементов и добавление их в разметку
        photoUrlsList.forEach((singlePhotoUrl) => {
            // Создаем тег img в памяти
            const imageElement = document.createElement("img");
            
            // Настраиваем свойства картинки
            imageElement.src = singlePhotoUrl;
            imageElement.alt = "Случайная собачка";
            imageElement.classList.add("gallery__photo"); // Присваиваем БЭМ-класс для стилей

            // Вставляем готовую картинку в нашу Grid-сетку
            galleryGrid.appendChild(imageElement);
        });

    } catch (fetchError) {
        // Обработка ошибок: выводим текст ошибки красным цветом в галерею
        galleryGrid.innerHTML = `<p style="color: red; grid-column: 1/-1;">Произошла ошибка: ${fetchError.message}</p>`;
    } finally {
        // 5. Финал: в любом случае (успех или ошибка) выключаем лоадер и включаем кнопку обратно
        loaderSpinner.style.display = "none";
        loadButton.disabled = false;
    }
}

// Слушаем клик по кнопке и запускаем нашу функцию
loadButton.addEventListener("click", fetchAndRenderPhotos);
