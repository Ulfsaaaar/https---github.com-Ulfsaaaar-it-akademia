// первоночально подключаем в HTML файл js файл
//каждый шаг проверяем через консоль лог
//создаем массив(цикл) в который будет обрабатывать карточки товаров
var cards = [
    {
        imgUrl: "URL фото",
        title: "Информация",
        rating: "рейтинг карточки",
        cauntReview: "колличество отзывов",
        currentPrice: "актуальная цена",
        oldPrice: "старая цена",
    }
]
var ul = document.querySelector(".block ul"); // выбираем и вписываем селектор, по которому карточки будут перебираться циклом
var htmlStr = ``;

for (var i = 0; i < cards.length; i++) {
    // сюда вставляем всю верстку карточки со всеми свойствами, значениям присваиваем переменную из масива через ${cards[i].imgUrl}
    htmlStr +=`
    инфо
    `    
}
ul.interHTML = htmlStr
// все зависит от исполнения не важно какой тег ul/li div и тд главное создать массив и прописать функцию, но так же должно быть разобрано позицианирование, т.е. из HTML верстки
// пропадет кусок кода который отвечает за свойства и позиционирование карточки