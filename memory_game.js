document.addEventListener('DOMContentLoaded', () => {
    const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cards = [...cardValues, ...cardValues]; // Duplicate values for pairs
    let board = document.getElementById('game-board');
    let scoreDisplay = document.getElementById('score');
    let score = 0;
    let flippedCards = [];
    let matchedCards = [];

    // Shuffle function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Initialize the game board
    function createBoard() {
        board.innerHTML = '';
        const shuffledCards = shuffle(cards);
        shuffledCards.forEach(value => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.value = value;
            card.addEventListener('click', flipCard);
            board.appendChild(card);
        });
    }

    // Flip card function
    function flipCard() {
        if (flippedCards.length === 2 || this.classList.contains('flipped') || this.classList.contains('matched')) {
            return;
        }
        
        this.classList.add('flipped');
        this.textContent = this.dataset.value;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }

    // Check for a match
    function checkMatch() {
        const [firstCard, secondCard] = flippedCards;
        if (firstCard.dataset.value === secondCard.dataset.value) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            score += 1;
            scoreDisplay.textContent = score;
            matchedCards.push(firstCard, secondCard);
        } else {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';
        }
        flippedCards = [];
    }

    // Reset the game
    document.getElementById('reset-button').addEventListener('click', () => {
        score = 0;
        scoreDisplay.textContent = score;
        flippedCards = [];
        matchedCards = [];
        createBoard();
    });

    // Start the game
    createBoard();
});
