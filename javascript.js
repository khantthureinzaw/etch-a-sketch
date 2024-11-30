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
            square.style.backgroundColor = 'red';
        })
    })
}
addHoverEffect();

// Prompts user for number
const resetBtn = document.querySelector('button');
resetBtn.addEventListener('click', () => {
    let num = 0;
    do {
        num = parseInt(prompt('How many squares per side would you like?'));
    } while (!(Number.isInteger(num) && num <= 100));
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

