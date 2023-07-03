const num_box = document.querySelectorAll('.box');
const screen = document.querySelector('.screen');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const all_clear = document.querySelector('.all_clear');
const off = document.querySelector('.off');
const on = document.querySelector('.on');
const body = document.querySelector('body')



on.addEventListener('click', () => {
    var result = ' ';

    screen.style.backgroundColor = 'white';
    screen.style.color = '#000222';
    screen.innerHTML = '0';
    document.addEventListener('keypress', logKey);



    //INPUT FROM PHYSICAL KEYBOARD
    function logKey(e) {
        const key = (e.code);
        const digit = key[key.length - 1];
        const regex = /[0-9]/;
        if (regex.test(digit)) {
            result += digit;
            screen.innerHTML = result;
        }
        if (/Divide|Multiply|Add|Subtract|Enter|Decimal|Minus|Equal/.test(key)) {
            let symbol = '';
            if (key.includes('Divide')) {
                symbol = '/'
            }
            if (key.includes('Multiply')) {
                symbol = '*'
            }
            if (key.includes('Add')) {
                symbol = '+'
            }
            if (key.includes('Subtract')) {
                symbol = '-'
            }
            if (key.includes('Decimal')) {
                symbol = '.'
            }
            if (key.includes('Minus')) {
                symbol = '-'
            }
            result += symbol;
            screen.innerHTML = result;

            if (key.includes('Enter') || key.includes('Equal')) {
                result = eval(result);
                screen.innerHTML = eval(result);
            }
        }
    }



    num_box.forEach(box => {
        box.addEventListener('click', () => {
            result += box.innerText;
            screen.innerHTML = result;
        })
    })



    equals.addEventListener('click', () => {
        result = eval(result);
        screen.innerHTML = eval(result);
    })


    all_clear.addEventListener('click', () => {
        result = '';
        screen.innerHTML = 0;

    })


    clear.addEventListener('click', () => {
        var ab = screen.innerText;
        result = ab.slice(0, ab.length - 1);
        screen.innerHTML = result;

    })


})

off.addEventListener('click', () => {
    screen.style.backgroundColor = 'gray';
    screen.innerHTML = 'Turn On';
    screen.style.color = 'white';
    num_box.forEach(box => {
        box.addEventListener('click', () => {
            screen.innerHTML = 'Turn On';
        })
    })
    clear.addEventListener('click', () => {
        screen.innerHTML = 'Turn On';

    })
    all_clear.addEventListener('click', () => {
        screen.innerHTML = 'Turn On';

    })


})

