import { screen, key0, key1, key2, key3, key4, key5, key6, key7, key8, key9, keyDel, keyReset, keyAdd, keySub, keyMultiply, keyDivide, keyPoint, keyEquals }  from '../dom/elements.js'
import { calculations } from '../main.js';

export const clickKey = () => {
    key0.addEventListener('click', () => {
        if(screen.textContent.includes('+') || screen.textContent.includes('-') || screen.textContent.includes('x') || screen.textContent.includes('/') ){
            screen.innerText = '0';
        } else{
            screen.innerText += `0`;
        }
    });
    key1.addEventListener('click', () => {
        if(screen.textContent.includes('+') || screen.textContent.includes('-') || screen.textContent.includes('x') || screen.textContent.includes('/') ){
            screen.innerText = '1';
        } else{
            screen.innerText += `1`;
        }
    });
    key2.addEventListener('click', () => {
        if(screen.textContent.includes('+') || screen.textContent.includes('-') || screen.textContent.includes('x') || screen.textContent.includes('/') ){
            screen.innerText = '2';
        } else{
            screen.innerText += `2`;
        }
    });
    key3.addEventListener('click', () => {
        if(screen.textContent.includes('+') || screen.textContent.includes('-') || screen.textContent.includes('x') || screen.textContent.includes('/') ){
            screen.innerText = '3';
        } else{
            screen.innerText += `3`;
        }
    });
    key4.addEventListener('click', () => {
        if(screen.textContent.includes('+') || screen.textContent.includes('-') || screen.textContent.includes('x') || screen.textContent.includes('/') ){
            screen.innerText = '4';
        } else{
            screen.innerText += `4`;
        }
    });
    key5.addEventListener('click', () => {
        if(screen.textContent.includes('+') || screen.textContent.includes('-') || screen.textContent.includes('x') || screen.textContent.includes('/') ){
            screen.innerText = '5';
        } else{
            screen.innerText += `5`;
        }
    });
    key6.addEventListener('click', () => {
        if(screen.textContent.includes('+') || screen.textContent.includes('-') || screen.textContent.includes('x') || screen.textContent.includes('/') ){
            screen.innerText = '6';
        } else{
            screen.innerText += `6`;
        }
    });
    key7.addEventListener('click', () => {
        if(screen.textContent.includes('+') || screen.textContent.includes('-') || screen.textContent.includes('x') || screen.textContent.includes('/') ){
            screen.innerText = '7';
        } else{
            screen.innerText += `7`;
        }
    });
    key8.addEventListener('click', () => {
        if(screen.textContent.includes('+') || screen.textContent.includes('-') || screen.textContent.includes('x') || screen.textContent.includes('/') ){
            screen.innerText = '8';
        } else{
            screen.innerText += `8`;
        }
    });
    key9.addEventListener('click', () => {
        if(screen.textContent.includes('+') || screen.textContent.includes('-') || screen.textContent.includes('x') || screen.textContent.includes('/') ){
            screen.innerText = '9';
        } else{
            screen.innerText += `9`;
        }

    });
    keyPoint.addEventListener('click', () => {
        if(screen.textContent.includes('+') || screen.textContent.includes('-') || screen.textContent.includes('x') || screen.textContent.includes('/') ){
            screen.innerText = '.'
        } else{
            screen.innerText += '.'
        }
    });

    keyDel.addEventListener('click', () => {
        if (screen.textContent.length > 0) {
            screen.textContent = screen.textContent.slice(0, -1);
        }
    });
    keyReset.addEventListener('click', () => {
        if (screen.textContent.length > 0) {
             screen.innerText = ''
        }
    });
    keyAdd.addEventListener('click', () => {
        if (screen.textContent.length > 0) {
            calculations.push(screen.textContent)
            screen.innerText = '+'
            calculations.push(screen.textContent)
        }
    });
    keySub.addEventListener('click', () => {
        if (screen.textContent.length > 0) {
            calculations.push(screen.textContent)
            screen.innerText = '-'
            calculations.push(screen.textContent)
        }
    });
    keyMultiply.addEventListener('click', () => {
        if (screen.textContent.length > 0) {
            calculations.push(screen.textContent)
            screen.innerText = 'x'
            calculations.push(screen.textContent)
        }
    });
    keyDivide.addEventListener('click', () => {
        if (screen.textContent.length > 0) {
            calculations.push(screen.textContent)
            screen.innerText = '/'
            calculations.push(screen.textContent)
        }
    });
     
    keyEquals.addEventListener('click', () => {
        if (screen.textContent.length > 0) {
            calculations.push(screen.textContent)
            console.log(calculations)
            let result;
            switch (calculations[1]) {
                case('+'): {
                    result = parseInt(calculations[0]) + parseInt(calculations[2])
                    screen.innerText = result
                    while (calculations.length > 0) {
                        calculations.pop();
                    }
                    break
                }
                case('-'): {
                    result = parseInt(calculations[0]) - parseInt(calculations[2])
                    screen.innerText = result
                    while (calculations.length > 0) {
                        calculations.pop();
                    }
                    break
                }
                case('x'): {
                    result = parseInt(calculations[0]) * parseInt(calculations[2])
                    screen.innerText = result
                    while (calculations.length > 0) {
                        calculations.pop();
                    }
                    break
                }
                case('/'): {
                    result = parseInt(calculations[0]) / parseInt(calculations[2])
                    screen.innerText = result
                    while (calculations.length > 0) {
                        calculations.pop();
                    }
                    break
                }
                default: {
                    console.log("Err")
                }
            }
        }
    });

}   
