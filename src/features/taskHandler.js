import { screen, key0 }  from '../dom/elements.js'

export const key0Clicked = key0.addEventListener('click', () => {
    console.log('0');
    screen.innerHTML = `0`;
});