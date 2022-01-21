import React from "react";

function Quality() {
    return (
        <div className={'quality'}>
            <h2>Идеальные ингредиенты</h2>
            <p>Пицца должна быть вкусной и везде одинаковой. Пиццерии должны быть одинаково уютными, кассиры неизменно
                приветливыми, а курьеры — расторопными.</p>
            <p>Вообще пицца — очень простая штука, её сложно испортить. Достаточно хороших ингредиентов и правильного
                теста. Это конструктор, если детали качественные, то и результат будет в порядке. Вот они, наши
                детали:</p>

            <div className={'quality-content'}>
                <div className={'quality-content__info'}>
                    <h2>Тесто</h2>
                    <p>Самая тонкая вещь. Главное - сделать его «живым». Это целый квест из граммов, градусов, процентов
                        и часов с минутами. Процесс непростой, но у нас получается!</p>
                </div>
                <div className={'quality-content__info'}>
                    <h2>Моцфрелла</h2>
                    <p>Сыр в пицце - ключевой ингредиент. Мы используем настоящую моцареллу от российских поставщиков.
                        Сыр должен тянуться, как на картинке.</p>
                </div>
                <div className={'quality-content__info'}>
                    <h2>Начинка</h2>
                    <p>Есть два главных правила вкусной начинки: не экономить на начинке; фанатично соблюдать режим
                        хранения. Это и весь секрет.</p>
                </div>
                <div className={'quality-content__info'}>
                    <h2>Томатный соус</h2>
                    <p>Главное, что нужно знать про хороший томатный соус: он должен быть сделан из томатов. Звучит
                        логично, но задумайтесь!</p>
                </div>
            </div>

        </div>
    );
}

export default Quality;