
# JS-tools
Сборник моих универсальных скриптов
Состав: Popup, Selector, Notify

## Popup

### Возможности
- Полная настройка своих стилей
- Закрытие кнопкой назад (удобно на телефонах)

### Как использовать:
1. Разметить контейнер `<div class="popup-container"></div>`
2. Разметить контейнер шаблонов `<template id="popups"></template>`
3. Разметить шаблон `<section class="popup-style" id="popup-id">[Content]</section>`
4. Разметить вызов попапа `<a onclick="popupShow('popup-id')">Вызов</a>`
5. Классы для стилей **popup-container[--active]**

### Пример

    <a onclick="popupShow('donate')">Вызов</a>
    <div class="popup-container"></div>
    <template id="popups">
      <section class="info-popup" id="donate">
        <h2>Поддержать сайт</h2>enter code here
        <p>Arc - это сеть доставки контента, когда вы подключаетесь к ней, вы становитесь
          мостом между пользователем и сервером, это ускоряет загрузку контента.
          <br>Я получаю деньги, когда через мосты  с моего сайта проходит трафик.
          <br>ВНИМАНИЕ: Подключайтесь к Arc только на безлимитных тарифах интернета.</p>
        <br>
        <p>А так же вы можете отправить мне донат по этой <a class="link" href="https://www.donationalerts.com/r/tojefin">ссылке</a></p>
      </section>
    </template>

### Пример scss

    .popup-container {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      position: fixed;
      height: 100vh;
      width: 100vw;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.3);
      transition: all ease 0.3s;
      backdrop-filter: blur(7px);
      z-index: -1;

      &--active {
        opacity: 1;
        z-index: 10;
      }
    }

## Selector

### Возможности
- Полная настройка своих стилей
- Отключение скрипта для мобильных устройств
- Кастомное событие изменения зачений
- Нативное получение выбраных значений
- Функция для изменения значения
- Нативное скрытие при клике вне селекта

### Как использовать:
1. Разметить обычный селект
2. Указать id селекту
3. Добавить основной класс для селекта
4. Классы для стилей **<основной класс>__[container, list, list--open, item, item--active]**

### Пример

    <select class="selector other-styles" id="filmState">
      <option value="Null">Не просмотрено</option>
      <option value="watch">Смотрю</option>
      <option value="true">Просмотрено</option>
      <option value="7">Запланировано</option>
    </select>

    <script type="text/javascript">
      var select = document.querySelector('select')
      selectChangeValue(select, 2, true) // origin, valueid, NoEvent
      select.addEventListener('selectorChange', (e) => {
        console.log(e.detail);
        console.log(select.value);
      })
    </script>

### Пример scss

    .selector {
      border: none;
      border-radius: 0;
      background: none;
      padding: 0;
      cursor: pointer;
      width: fit-content;
      text-align: center;
      padding-bottom: 8px;
      cursor: pointer;

      & option {
        background-color: #444;
      }
    }

    .selector__container {
      position: reletive;
      display: inline-block;
    }

    .selector__list {
      position: absolute;
      padding: 0 10px;
      border-radius: 5px;
      background: rgba(0,0,0,0.1);
      backdrop-filter: blur(30px);
      opacity: 0;
      overflow: hidden;
      z-index: -1;
      transition: 0.3s all ease;
      top: -8px;
      left: -10px;

      &--open {
        z-index: 10;
        opacity: 1;
      }
    }

    .selector__item {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #C9C9C9;
      cursor: pointer;
      margin: 10px auto;

      &--active {
        color: #FFFFFF;
      }
    }


## Notify (в разработке)

### Возможности
- Полная настройка своих стилей
- Функция для вызова разных уведомлений
- Есть стандартные стили в папке css
- Можно вызывать стандартные стили указывая вместо className type: [info, success, warn, error]

### Как использовать:
1. Разметить вызов уведомления `<a onclick="notifySend({content: 'Текст', className: 'notify'})">Вызов</a>`
2. Доп. параметры (стандартное значение):
- duration - длительность отображения в мс (3000)
- fadein - длительность появления в мс (100)
- fadeout - длительность скрытия в мс (100)
- closeOnClick - закрывать кликом (false)
3. Классы для стилей **<основной класс>--[in, out]**

### Пример scss:

    .notify {
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translate(-50%, 0);
      padding: 10px 30px;
      font-family: sans-serif;
      font-size: 28px;
      background: rgba(0, 255, 51, 0.5);
      backdrop-filter: blur(7px);
      border-radius: 15px;
      border: 1px #eee solid;
      opacity: 1;
      transition: all ease 0.3s;

      &--in {
        opacity: 0;
        transform: translate(-50%, 120%);
      }

      &--out {
        opacity: 0;
        transform: translate(-50%, 120%);
      }
    }
