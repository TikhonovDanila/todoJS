# Список дел реализованный на JavaScript  

Самообразовательный проект в котором я использовал:  
+ HTML  ;
+ CSS  ;
+ JavaScript.  
 
## Как устроен/работает:  
1. *Инициализирую переменные:*  
    - переменная отвечающая за поле ввода задачи  ;
    - кнопка добавить  ;
    - список UL  ;
    - массив для списка задач.  
1. *Проверяю локальное хранилище на наличие элементов, если есть то срабатывает функция displayMessages*  
1. *На кнопке "добавить" установлен слушать "click", при нажатии срабатывает стрелочная функция в которой*  :
    - создается новый объект с 3-мя полями (todo, checked, important)  ;
    - созданный объект добавляется в массив с задачами  ;
    - срабатывает функция displayMessages  ;
    - в локальное хранилище отправляется обновленный массив  ;
    - очищается поле ввода  .
1. *Функция displayMessages*  :
    - создаю пустую переменную для хранения одной задачи displayMessage  ;
    - проверяю пустой ли массив, если пустой то вывожу пустую строку  ;
    - Прохожу методом forEach по общему массиву задач, использую интерполяцию строк и добавляю елемент Li который содержит чекбокс, текст задачи, кнопку удалить  ;
    - добавляю в список UL каждую задачу  .
1. *На списке UL установлен слушать "change", при нажатии срабатывает стрелочная функция в которой*  :
    - получаю input на котором был совершен клик  ;
    - получаю зачение label по id, если значение равно то меняю значение текущего элемента, поля checked  ;
    - сохраняю новые данные в локальное хранилище  .
1. *На списке UL установлен слушать "contextmenu", при нажатии срабатывает стрелочная функция в которой*  :
    - отменяю событие открытия контекстного меню по умолчанию  ;
    - при клике по элементу списка меняю значение поля important (присваивает класс, подсвечивающий текст)  ;
    - срабатывает функция displayMessages для обновления списка задач  ;
    - сохраняю новые данные в локальное хранилище  .  
 1. *На списке UL установлен слушать "click", при нажатии срабатывает стрелочная функция в которой*  :
     - проверяется на каком элементе произошел клик, если элемент li, то он удаляется (из DOM) .
 
 
