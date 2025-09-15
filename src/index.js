alert("Let's integrate!");

function f(x) {
    return 4 * x - x * x; 
}


function midpointRule(func, a, b, n) {
    let h = (b - a) / n;  // Интервал [a,b] разбивается на n равных частей шириной h
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let midpoint = a + h * (i + 0.5);  // в каждой части берём середину подотрезка - это середина каждого подотрезка
        sum += func(midpoint);  // аккумулируем значения функции в серединах
    }

    return sum * h;  // умножаем, чтобы учесть ширину каждого прямоугольника
}


let a = parseFloat(prompt("Введите начало интервала (a):"));
let b = parseFloat(prompt("Введите конец интервала (b):"));
let n = 1000;  // количество разбиений (чем больше, тем точнее)
let result = midpointRule(f, a, b, n);

alert("Интеграл функции F(x) = 4x - x^2 на [" + a + ", " + b + "] равен ≈ " + result);
