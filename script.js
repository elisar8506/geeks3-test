// 1) Напишите функцию для извлечения чисел - это функция которая принимает строку и возвращает массив всех чисел в строке 
// Пример: 

// const extractNumbers(str) {
//     return // Ваш код
// }

// extractNumbers("a1fg5hj6") // вернёт [1, 5, 6]
const extractNumbers = (string) => {
    const numbers = /\d+/g
    const matches = string.match(numbers)
    return matches ? matches.join('') : ''
}

console.log(extractNumbers("a1fg5hj6"));



// 2) Напишите функцию рекурсию которая будет выводить в консоль числа фибоначчи с задержкой в одну секунду (ограничение число 144)
const abc = ( a = 0, b = 1) => {
    if (a > 144) return; 
    console.log(a);
    setTimeout(() => abc( b, a + b), 1000);
};

abc()



// 3) Сделать запрос на API используя async await и try catch 
// Делайте запроса на этот API => https://fakestoreapi.com/products
// Из полученных данных возьмите ключ title у каждого объекта и выведите их в консоль 
const request = async () => {
    const fetch = await fetch(`https://fakestoreapi.com/products`)
    const data = await fetch.json()
    data.forEach(element => {
        console.log(element.title);
    });
}

request()



// 4
const buttons = document.querySelectorAll('.button')
const backgroundColor = document.body

buttons.forEach(element => {
    element.onclick = () => {
        backgroundColor.style.background = `${element.innerText}`
    }
})



//5
const blockbtn = document.querySelector('#blockbtn');
const block = document.querySelector('.block');
let switcher = 0

blockbtn.addEventListener('click', () => {
    switch (switcher) {
        case 0:
            block.style.display = "block"
            switcher = 1
            break;
        case 1:
            block.style.display = "none"
            switcher = 0
            break;
        default:
            break;
    }
});


//6
const p = document.querySelector('#p')
let num = 0
const counter = () => {
    p.textContent = num
    if(num < 100){
        num++
        setTimeout(counter, 1)
    }
}
counter()