var day = 24;

if (day > 0 && day <= 10) {
    console.log('Первая декада');
} else if (day > 10 && day <= 20) {
    console.log('Вторая декада');
} else if (day > 20 && day <= 31) {
    console.log('Третья декада');
}

var num = '4' 

switch (num) {
    case '1' : console.log('winter');
    break;
    case '2' : console.log('spring');
    break;
    case '3' : console.log('summer');
    break;
    case '4' : console.log('autumn');
    break;
}

var month = 10

if (month >= 1 && month <= 3) {
    console.log('зима');
} else if (month >= 4 && month <= 6) {
    console.log('весна');
} else if (month >= 7 && month <= 9) {
    console.log('лето');
} else if (month >=10 && month <= 12) {
    console.log('осень');
} else {
    console.log('Введите число от 1 до 12');
}

var str = '78645';

if (str[0] == '1' || str[1] == '2' || str[2] == '3') {
    console.log('ДА!');
} else {
    console.log('НЕТ!');
}

var i = 11;

while (i <= 33) {
    console.log(i);
    i++;
}

for (let i = 2; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

var result = 0;

for ( let i = 1; i <= 100; i++) {
    result = result + i;
}

console.log(result);

var arr = [1, 2, 3, 4, 5];
var result = 0;
for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
    console.log(result);
}

var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

for (var key in obj) {
    console.log(obj[key]);
}

var obj = {'Вася': '200', 'Петя': '300', 'Коля': '400'};

for (var key in obj) {
    console.log(`${key}, его зарплата - ${obj[key]} долларов`);
}


var arr = [2, 5, 9, 0, 15];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

var arr = [2, 5, -3, 7, -5, 45]; 
var result = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
        result = result + arr[i];
        console.log(result);
    }
}

var arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        console.log('Есть!!!');
        break;
    }
}

var arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == '1' ) {
        console.log(arr[i]);
    }
}


var n = 1000;
var result = 0;

for (let i = 0; i < 30; i++) {
    result = n / 2;
    if (n < 50) {
        console.log(result);
    }
}

var n = 1000;
var result = 0;

for (n; n > 0; i--) {
    n / 2
    if (n < 50) {
        console.log(result);
    }
}


const options = {
    width: 234,
    height: 1024,
    name: 'Alesha',
    color: 'black',
    border: {
        right: 'blue',
        left: 'red'
    }
};

console.log(Object.keys(options).length);


const arr = [2, 56, 65, 78, 98, 353, 1214, 5];

arr.forEach(function(item, i, arr) {
    console.log(`${i} : ${item} в массивe ${arr}`);
});


const arr = {
    a: 20,
    b: 54, 
    j: 98
};


function copyArr(MainObj) {
    let ObjCopy = {};
    let key;
    for ( key in MainObj) {
        ObjCopy[key] = MainObj[key];
    }
    return ObjCopy;
}

const pos = copyArr(arr);

pos.a = 50;

console.log(pos);


let login = prompt('Введите ваш логин');


if (login == 'admin' && login != '' && login != null && login != String) {
    let password = prompt('Введите ваш пароль');
    if (password == 'я главный' && password != '' && password != null && password != String ) {
        alert('Здравствуйте!');
    } else {
        alert('Отменено');
    }
} else {
    alert('Отменено');
}


let arr = '@@!!!!4YY3784627!!@@7479274';

console.log(arr.slice(3, 7));

let fruit = '2025-56-45-54-32';

let arr = fruit.split('-');

console.log(arr[0] + arr[2]);


let str = 'js';

console.log(str.toUpperCase());

let str = 'JS';

console.log(str.toLowerCase());

let string = 'я учу javascript'; 

console.log(string.split(' '));
console.log(...string.split(' '));



