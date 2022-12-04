//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return !isNaN(n) && (n | 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];
    let i = 1;
    do {
        if (!(i % 2)) arr.push(i);
        i++;
    } while (arr[arr.length - 1] != 20 || arr.length === 0);
    return arr;
    
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let accumulator = 0;
    for (let i = 0;i<=n;i++){
        accumulator+=i;
    }
    return accumulator;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    return !n ? n : n + recSumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let result = 1;
    for (let i = 0;i < n; i++){
        result *= i+1;
    }
    return result;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n === 0){
        return false;
    }
    return ((n & -n) === n);  
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    let temp = initialValue;
    return function operation(operant) {
        return !(operatorFn === undefined)
            ? (temp = operatorFn(temp, operant))
            : initialValue;
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step) {
    let result = start === undefined ? 0 : start;
    let stepTemp = step === undefined ? 1 : step;
    return function generator() {
        let res = result;
        result += stepTemp;
        return res;
    };
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (Object.is(firstObject, secondObject)) {
        return true;
    } else if (Array.isArray(firstObject) && Array.isArray(secondObject)) {
        for (let i = 0; i < firstObject.length; i++) {
            if (firstObject[i] !== secondObject[i]) return false;
        }
        return true;
    } else if (
        typeof firstObject === 'object' &&
        typeof secondObject === 'object'
    ) {
        let key1 = Object.getOwnPropertyNames(firstObject);
        let key2 = Object.getOwnPropertyNames(secondObject);
        if (key1.length !== key2.length) return false;
        for (let i = 0; i < key1.length; i++) {
            let k = key1[i];
            if (!deepEqual(firstObject[k], secondObject[k])) return false;
        }
        return true;
    } else return firstObject === secondObject;
}


module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};