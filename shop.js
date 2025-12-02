function loadProducts() {
    // Данные товаров встроены в файл для работы без сервера
    let content = [
        {
            "id": 1,
            "title": "Сувенирный самовар",
            "description": "Миниатюрный самовар ручной работы - идеальный подарок из Тулы.",
            "price": 1500,
            "image": "assets/shop/samovar.jpg"
        },
        {
            "id": 2,
            "title": "Тульский пряник",
            "description": "Набор тульских пряников в подарочной упаковке.",
            "price": 350,
            "image": "assets/shop/pryanik.jpg"
        },
        {
            "id": 3,
            "title": "Магнит с кремлем",
            "description": "Керамический магнит с изображением Тульского кремля.",
            "price": 150,
            "image": "assets/shop/magnit.jpg"
        },
        {
            "id": 4,
            "title": "Открытки с видами Тулы",
            "description": "Набор открыток с достопримечательностями города.",
            "price": 200,
            "image": "assets/shop/otkrytki.webp"
        },
        {
            "id": 5,
            "title": "Кружка с гербом Тулы",
            "description": "Керамическая кружка с изображением герба города.",
            "price": 450,
            "image": "assets/shop/kruzhka.jpg"
        },
        {
            "id": 6,
            "title": "Книга о Туле",
            "description": "Иллюстрированная книга об истории и достопримечательностях Тулы.",
            "price": 800,
            "image": "assets/shop/kniga.jpg"
        },
        {
            "id": 7,
            "title": "Чайный набор",
            "description": "Набор для чаепития в русском стиле с тульскими мотивами.",
            "price": 2500,
            "image": "assets/shop/chainyinabor.jpg"
        },
        {
            "id": 8,
            "title": "Футболка с надписью Тула",
            "description": "Хлопковая футболка с принтом \"Тула - город мастеров\".",
            "price": 900,
            "image": "assets/shop/futbolka.webp"
        },
        {
            "id": 9,
            "title": "Брелок с символом Тулы",
            "description": "Металлический брелок с изображением символа города.",
            "price": 250,
            "image": "assets/shop/brelok.jpg"
        },
        {
            "id": 10,
            "title": "Календарь на 2025 год",
            "description": "Настенный календарь с фотографиями достопримечательностей Тулы.",
            "price": 400,
            "image": "assets/shop/kalendar.jpg"
        },
        {
            "id": 11,
            "title": "Пазл Тульский кремль",
            "description": "Пазл на 1000 деталей с изображением Тульского кремля.",
            "price": 600,
            "image": "assets/shop/pazl.jpg"
        },
        {
            "id": 12,
            "title": "Подарочный сертификат",
            "description": "Сертификат на экскурсию по Туле - отличный подарок.",
            "price": 1000,
            "image": "assets/shop/sertifikat.jpg"
        }
    ];

    let productsContainer = document.getElementById("products-container");

    if (!productsContainer) {
        throw new Error("Контейнер для товаров не найден");
    }

    productsContainer.innerHTML = ''; // Очищаем контейнер

    if (!Array.isArray(content) || content.length === 0) {
        throw new Error("Данные товаров пусты или имеют неверный формат");
    }

    content.forEach((item) => {
        productsContainer.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="card product-card h-100">
                    <img src="${item.image}" class="card-img-top product-image" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text"><strong>Цена: ${item.price} руб.</strong></p>
                    </div>
                </div>
            </div>
            `;
    });
}

// Загружаем товары после полной загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProducts);
} else {
    loadProducts();
}

