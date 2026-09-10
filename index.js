// Задание 6.1  Палиндром

function checkPalindrome(word) {
// 1. Приводим слово к нижнему регистру, чтобы 'Д' и 'д' считались одинаковыми
    const lowerWord = word.toLowerCase();

// 2. Разворачиваем слово задом наперед
    const reversedWord = lowerWord.split('').reverse().join('');

// 3. Проверяем, совпадает ли оригинал с перевернутой версией
    if (lowerWord === reversedWord) {
        console.log(`Слово ${word} является палиндромом`);
    } else {
        console.log(`Слово ${word} не является палиндромом`);
    }
}
//---------------------------------------------------//

// Задание 6.2 
// const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
function getUniqueValues(arr) {
// Создаем массив только с уникальными значениями
    const uniqueArr = [...new Set(arr)];

// Выводим результат в консоль
    console.log(uniqueArr);
    return uniqueArr;
}
//-----------------------------------------------------//

// Задание 6.3
// 1. Запрашиваем число у пользователя
const userInput = prompt("Введите любое число:");
// 2. Приводим строку к типу number с помощью знака плюс (+)
const maxNumber = +userInput;
function generateNumbersArray(maxNumber) {
 
    // 3. Создаем пустой массив
    const resultArr = [];

// 4. Заполняем массив числами от 0 до введенного числа включительно
    for (let i = 0; i <= maxNumber; i++) {
        resultArr.push(i);
    }

// 5. Выводим получившийся массив в консоль
    console.log(resultArr);
    return resultArr;
}
//-----------------------------------------------------//

// Задание 6.4
function drawTicTacToeBoard() {
    let board = '';

// Внешний цикл отвечает за строки (всего 3 строки)
    for (let i = 0; i < 3; i++) {
        let row = '';
    
    // Внутренний цикл отвечает за колонки в текущей строке (всего 3 колонки)
        for (let j = 0; j < 3; j++) {
        // Если сумма индексов строки и колонки четная — ставим 'x', если нечетная — 'o'
            if ((i + j) % 2 === 0) {
                row += 'x ';
            } else {
                row += 'o ';
            }
        }
    
    // Убираем лишний пробел в конце строки и добавляем перенос на новую строку
        board += row.trim() + '\n';
    }

// Выводим заполненное поле в консоль
    console.log(board.trim());
}
//-------------------------------------------------------//

// Задание 6.5
function getObjValues(obj) {

// 1. Создаем пустой массив для результатов
    const arrValues = [];

// 2. Получаем массив всех значений объекта с помощью Object.values()
    const allValues = Object.values(obj);

// 3. Перебираем значения и проверяем их на массив
    for (let value of allValues) {
        if (Array.isArray(value)) {
        // Если значение — массив, добавляем его элементы по одному через spread-оператор (...)
            arrValues.push(...value);
        } else {
        // Если обычное значение — просто пушим его
            arrValues.push(value);
        }
    }

// 4. Выводим результат в консоль
    console.log(arrValues);
    return arrValues;
}
