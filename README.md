# Задание

Создать приложение с использованием библиотеки React.

При первой загрузке страницы происходит запрос пользователя на получение данных о геолокации с использованием HTML5 Geolocation API. Если пользователь соглашается предоставить данные о геолокации – получаем из внешнего API данные о погоде. Если нет – запрашиваем информацию для города по умолчанию (город по умолчанию можно выбрать самостоятельно). Информация о городе, данные о погоде (температура, ветер, давление, влажность), иконка погоды, координаты отрисовываются на странице в соответствии с макетом.
Иконка и все необходимые данные есть в API.

В интерфейсе также есть кнопка с повторным запросом геолокации пользователя. У пользователя есть возможность добавления и удаления городов в избранное. Информация о погоде отображается для всех городов из избранного в соответствии с макетом. Избранное сохраняется в LocalStorage.

Пока происходит загрузка данных по конкретному городу/локации – показываем loader и/или сообщение об ожидании загрузки данных.

Работа с глобальным состоянием приложения (например, список избранных городов) реализуется с помощью Redux.
Локальное состояние компонента (например, состояние ожидания загрузки данных) – через локальный state компонента.

# Как запустить проект

Для успешного запуска нужно установить библиотеки redux, react-redux, redux-thunk. Для этого перейдите в консоли в папку с проектом и выполните следующие команды:

`npm install --save redux`

`npm install --save react-redux`

`npm install --save redux-thunk`

Для корректной работы нужно добавить в проект папку node_modules, для этого в консоли, находясь в папке проекта, нужно выполнить команду:

`npm install`

Для запуска приложения, запустите команду в консоли (находясь в папке проекта):

`npm start`

и перейдите в браузере на http://localhost:3000/
