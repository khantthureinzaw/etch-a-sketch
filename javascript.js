const container = document.querySelector('.container');

// Initial 16x16 grid creation
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

// Hover effect function to change background color
function addHoverEffect() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {

            if (!square.style.backgroundColor) {
                square.style.backgroundColor = `rgba(${getRandColor()}, 0.1)`;
            } else {

                // if background color is already changed, increase opacity by 0.1
                const bgColor = square.style.backgroundColor;
                let parts = bgColor.slice(5, -1).split(',');
                let opacity = parts[3];
                parts[3] = parseFloat(opacity) + 0.1;
                newBgColor = `rgba(${parts.join(', ')})`;
                square.style.backgroundColor = newBgColor;
            }

        });
    });
}

// Get a random color
function getRandColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `${r}, ${g}, ${b}`;
}
addHoverEffect();

// Prompts user for number
const resetBtn = document.querySelector('button');
resetBtn.addEventListener('click', () => {
    let num = 0;
    do {
        num = parseInt(prompt('How many squares per side would you like?'));
    } while (!(Number.isInteger(num) && num > 0 && num <= 100));
    buildGrid(num);
})

// Builds a grid of square divs based on the number inputted
function buildGrid(num) {
    let totalSquares = num * num;
    let squareWidth = (100 / num);

    // Remove existing squares
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove();
    });

    // Creates new grid
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareWidth}%`;
        square.classList.add('square');
        container.appendChild(square);
    }

    addHoverEffect();
}

