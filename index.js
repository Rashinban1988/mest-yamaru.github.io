let hasBlackJack = false
let isAlive = true
let sumCard = 0
let sumCardMOB = 0
let cards = []
let cardsMOB = []
// let player1
// let player2

let cardEl = document.getElementById("sumCard")
let cardMOBEl = document.getElementById("sumCardMOB")
let messageEl = document.getElementById("message")
let moreCardEl = document.getElementById("moreCard-btn")
let endGameEl = document.getElementById("endGame-btn")
let resetEl = document.getElementById("reset-btn")
let cardsEl = document.getElementById("cards")

function moreCard() {
    window.setTimeout(function() {
        let newCard = Math.floor( Math.random() * 13 )
        let newCardMOB = Math.floor( Math.random() * 13 )

        cards.push(newCard)
        cardsMOB.push(newCardMOB)

        sumCard += newCard
        cardsEl.textContent = cards
        cardEl.textContent = sumCard
        questionCard()
    }, 700)
}

function resetCard(){
    window.setTimeout(function() {
        sumCard = 0
        cardEl.textContent = sumCard
        messageEl.textContent = "START GAME?"
        resetButton()
    }, 500)
}

function questionCard() {
    if (sumCard < 21) {
        messageEl.textContent = "One More Card?"
        moreCardEl.textContent = "Draw"
    } else if (sumCard === 21) {
        messageEl.textContent = "You're BlackJack!! You Winn!!"
        hasBlackJack = true
        resetEl.style.display = "inline"
        moreCardEl.style.display = "none"
        document.body.style.backgroundImage = "url('Regao.jpg')"
        hasBlackJack = true
    } else {
        messageEl.textContent = "Game Over"
        resetEl.style.display = "inline"
        moreCardEl.style.display = "none"
        messageEl.style.color = "red"
        document.body.style.backgroundImage = "url('Rend.jpg')"
        isAlive = false
    }
}

function resetButton() {
    moreCardEl.style.display = "inline"
    resetEl.style.display = "none"
    messageEl.textContent = "Want to play a round?"
    messageEl.style.color = ""
    moreCardEl.textContent = "Start Game"
    document.body.style.backgroundImage = "url('R.jpg')"
    cards.splice(0, cards.length)
    cardsEl.textContent = ""
}

function resultMatch() {
    if (player1 < player2) {
        return player1
    } else if (player1 > player2) {
        return player2
    } else {
        return player1
    }
}

console.log(sumCard)
console.log(hasBlackJack)
console.log(isAlive)