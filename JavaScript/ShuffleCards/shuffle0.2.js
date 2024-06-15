// Objects without a name are annonymous objects which cannot be refrenced directly.
// Less syntax and no need of unique names;
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

let cards = [
    new Card('A', "Diamonds"),
    new Card('A', "Hearts"),
    new Card('A', "Spades"),
    new Card('A', "Clubs"),
    new Card('2', "Clubs"),
    new Card('3', "Spades"),
    new Card('4', "Diamonds"),
    new Card('5', "Hearts")];

cards.forEach((card) => {
    console.log(`${card.suit} ${card.value}`);
});
console.log();
shuffle(cards);

function shuffle(cards){
    let currentIndex = cards.length;

    while(currentIndex!=0){
        let randomIndex = Math.floor(Math.random() * cards.length);
        currentIndex -=1;

        let temp = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temp;
    }
    return cards;
}

cards.forEach((card) => {
    console.log(`${card.suit} ${card.value}`);
});