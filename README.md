# Практическая работа 3: Классы, DOM, события

## Начало работы

Установите зависимости проекта:

`npm install`

После этого вам будут доступны следующие команды:

 - `npm run lint` - проверка качества вашего кода утилитой ESLint
 - `npm run test [test-file]` - запустить unit-тесты из указанного файла в консоли, например: `npm run test test/spec/task-1.spec.js`
 - `npm run test:all` - запуск всех unit-тестов в консоли
 - `npm run test -- --watch [test-file]`, `npm run test:all -- --watch` - запуск одного или всех unit-тестов в консоли, с автоматическим перезапуском при изменении исходного кода. Например: `npm run test -- --watch test/spec/task-1.spec.js`
 - `npm run test:browser` - запуск всех unit-тестов в браузере
 
Кроме того, для выполнения заданий связанных с DOM-деревом и событиями вам нужно тестировать ваш код в браузере. 
Для этого есть команда
 - `npm run start` - открывает в браузере страничку с необходимой для вашего кода разметкой. При изменении кода страничка автоматически перезагружается.
 
## Задания

### Задача 1

Декофеинизированная команда марсохода из второй практической работы решила проблемы с поступлением марсоходу из второй практической работы бессмысленных команд и с порядком их получения.
Заодно они решили сменить API управления марсоходом и сделать его в ООП-стиле.

Напишите класс Rover, который имеет следующий публичный интерфейс:

<table>
<tr>
    <th>Метод</th>
    <th>Параметры</th>
    <th>Описание</th>
    <th>Дополнительно</th>
</tr>
<tr>
    <td><code>constructor</code></td>
    <td><ul>
            <li><code>x</code> - начальная (целочисленная) x-координата ровера</li>
            <li><code>y</code> - начальная (целочисленная) y-координата ровера</li>
            <li><code>direction</code> - начальное направление движения ровера, одна из констант <code>NORTH, EAST, WEST, SOUTH</code></li>
        </ul>
    </td>
    <td>
        Конструктор. Nuff said.
    </td>
    <td>
        Выбрасывает исключение <code>TypeError</code> если переданы не целочисленные координаты,
        или несуществующее направление движения 
    </td>
</tr>
<tr>
    <td><code>left</code></td>
    <td> - </td>
    <td>Поворот марсохода налево</td>
    <td> - </td>
</tr>
<tr>
    <td><code>right</code></td>
    <td> - </td>
    <td>Поворот марсохода направо</td>
    <td> - </td>
</tr>
<tr>
    <td><code>move</code></td>
    <td><code>n</code> - (целочисленное) число шагов</td>
    <td>Движение на <code>n</code> шагов вперед. Может быть отрицательным.</td>
    <td>Выбрасывает исключение <code>TypeError</code> если передано не целочисленное число шагов.</td>
</tr>
<tr>
    <td><code>getPosition()</code></td>
    <td> - </td>
    <td>Возвращает текущие координаты марсохода</td>
    <td>Формат: <code>{ x: 5, y: 6 }</code> </td>
</tr>
<tr>
    <td><code>getDirection()<code></td>
    <td> - </td>
    <td>Возвращает текущее направление</td>
    <td>Возвращает одно из значений <code>NORTH, EAST, SOUTH, WEST</code></td>
</tr>
</table>

Кроме того, методы `left`, `right`, `move` должны быть "chainable", т.е. должны иметь возможность вызываться цепочкой:

```javascript
const r = new Rover(0, 0, NORTH);
r.left().move(5).right().right().move(1);

r.getPosition(); // { x: -4, y: 0 }
r.getDirection(); // EAST
```

### Задача 3

Дана HTML таблица, каждая строка которой представлет одну запись из базы данных.
Первая ячейка каждой строки - порядковый номер в таблице
Некоторые ячейки содержат аттрибут `data-field-name`, в котором хранится имя поля из базы данных, которое отображается в этой ячейке.

Например:
```html
<tr>
    <td>1</td>
	<td data-field-name="album">Fly on the Wall</td>
	<td data-field-name="performer">AC/DC</td>
	<td data-field-name="genre">hard rock</td>
	<td data-field-name="year">1985</td>
	<td><a href="http://www.wikidata.org/entity/Q901854">Link</a></td>
</tr>
```

Напишите функцию, `filterTable`, которая будет фильтровать строки таблицы по заданному условию.
Она получает два аргумента: DOM-элемент с телом таблицы, и объект с фильтрами в виде `<имя поля>: значение`

Например:
```javascript
{
    year: "1980",
    genre: "rock"
}
```
Этот фильтр должен оставить только те строки таблицы, в поле `year` которых содержится "1980", а поле `genre` содержит слово "rock" - i.e. "rock", "punk rock", "exotic instrumental post-rockabilly".

Функция `filterTable` должна:
3.1 Прятать не соответствующие фильтрам строки добавляя к соответствующему тегу `<tr>` класс `hidden`
3.2 Сохранять последовательную нумерацию строк, перезаписывая числа в первых ячейках строк
3.3 Сохранять "зебровую" раскраску таблицы - четные строки должны иметь класс `table-row-even`, у нечетных этот класс должен отсутствовать.
3.4 Быть независимой от порядка ячеек и имен полей в них, т.е. работать для любой таблицы с любыми именами полей в фильтруемых ячейках.


### Задача n (\*)

У стандартного класса `Set` в ECMAScript2015 есть один фатальный недостаток.
Ему недостаёт нескольких полезных методов.

* `union(s)` - (объединение множеств) создать новое множество, куда входят все объекты из множества `this` и множества `s`;
* `intersection(s)` - (пересечение множеств) создать новое множество, куда входят только объекты, принадлежащие и `this`, и множеству `s`;
* `difference(s)` - (разность множеств) создать новое множество, куда входят объекты, принадлежащие и `this`, но не пренадлежащие множеству `s`;
* `symmetricDifference(s)` - (симметрическая разность) создать новое множество, куда входят объекты принадлежащие или `this`, или множеству `s`, но не обеим множествам одновременно;
* `isSuperset(s)` - функция, возвращающая `true`, если множество `s` вложено в множество `this`;
* `isSubset(s)` - функция, возвращающая `true`, если множество `this` вложено в множество `s`.

Напишите класс `EnhancedSet`, который наследуюется от `Set`, и расширяет его этими шестью методами.