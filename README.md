# Tic Tac Toe

A two-player Tic Tac Toe game built with **HTML, CSS, and JavaScript**.

The main goal of this project was to practice organizing JavaScript code using **Factory Functions**, **Private Variables**, and **IIFEs (Immediately Invoked Function Expressions)**.

## 🎮 Live Demo

👉 [Play Tic Tac Toe](https://mfawwaznaim23.github.io/Tic_Tac_Toe/)

## Preview

<img width="1852" height="911" alt="image" src="https://github.com/user-attachments/assets/419f80cb-78f6-4736-b654-028f003233f8" />



## Factory Functions

This project uses a factory function to create player objects.

```javascript
function player(name) {
    let score = 0;

    function addscore() {
        score++;
    }

    function getscore() {
        return score;
    }

    return { name, addscore, getscore };
}
```

Each time the `player()` function is called, it creates a new player object. This allows each player to have their own name, symbol, and score.

## Private Variables

Private variables are used to keep certain values from being directly changed outside their function or module.

For example:

```javascript
let score = 0;
```

The score can be changed or accessed through functions such as:

```javascript
function addscore() {
    score++;
}

function getscore() {
    return score;
}
```

This keeps the data protected and helps organize the program.

## IIFEs

IIFEs (**Immediately Invoked Function Expressions**) are used to organize different parts of the game into modules.

For example:

```javascript
const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    function getBoard() {
        return board;
    }

    return { getBoard };
})();
```

The `board` variable remains private, while `getBoard()` is available to other parts of the program.

IIFEs are used to separate responsibilities such as:

- Gameboard
- Game logic
- DOM manipulation

## What I Learned

Through this project, I practiced:

- Factory Functions
- Private Variables
- IIFEs
- Closures
- DOM Manipulation
- Event Listeners
- Game Logic
- Organizing JavaScript code into modules

## Technologies Used

- HTML
- CSS
- JavaScript
- Git
- GitHub
