// Create and object with an array of cards with their face photo, back photo and value
const deck = {  
    cards:
    [ 
        {
        name: 'Ace of Hearts',
        value: 1,
        value2: 11,
        face: './Project/ace_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Ace of Diamonds',
        value: 1,
        value2: 11,
        face: './Project/ace_diamonds.jpeg',
        back: './Project/card_back.png'
    },
    {   
        name: 'Ace of Clubs',
        value: 1,
        value2: 11,
        face: './Project/ace_clubs.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Ace of Spades',
        value: 1,
        value2: 11,
        face: './Project/ace_spade.jpeg',
        back: './Project/card_back.png'
    },
    {
        name: 'Two of Hearts',
        value: 2,
        face: './Project/2_heart.png',
        back: './Project/card_back.png'

    },
    {
        name: 'Two of Diamonds',
        value: 2,
        face: './Project/2_diamonds.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Two of Clubs',
        value: 2,
        face: './Project/2_clubs.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Two of Spades',
        value: 2,
        face: './Project/2_spade.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Three of Hearts',
        value: 3,
        face: './Project/3_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Three of Diamonds',
        value: 3,
        face: './Project/3_diamonds.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Three of Clubs',
        value: 3,
        face: './Project/3_clubs.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Three of Spades',
        value: 3,
        face: './Project/3_spade.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Four of Hearts',
        value: 4,
        face: './Project/4_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Four of Diamonds',
        value: 4,
        face: './Project/4_diamonds.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Four of Clubs',
        value: 4,
        face: './Project/4_clubs.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Four of Spades',
        value: 4,
        face: './Project/4_spade.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Five of Hearts',
        value: 5,
        face: './Project/5_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Five of Diamonds',
        value: 5,
        face: './Project/5_diamonds.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Five of Clubs',
        value: 5,
        face: './Project/5_clubs.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Five of Spades',
        value: 5,
        face: './Project/5_spade.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Six of Hearts',
        value: 6,
        face: './Project/6_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Six of Diamonds',
        value: 6,
        face: './Project/6_diamonds.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Six of Clubs',
        value: 6,
        face: './Project/6_clubs.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Six of Spades',
        value: 6,
        face: './Project/6_spade.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Seven of Hearts',
        value: 7,
        face: './Project/7_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Seven of Diamonds',
        value: 7,
        face: './Project/7_diamonds.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Seven of Clubs',
        value: 7,
        face: './Project/7_clubs.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Seven of Spades',
        value: 7,
        face: './Project/7_spade.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Eight of Hearts',
        value: 8,
        face: './Project/8_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Eight of Diamonds',
        value: 8,
        face: './Project/8_diamonds.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Eight of Clubs',
        value: 8,
        face: './Project/8_clubs.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Eight of Spades',
        value: 8,
        face: './Project/8_spade.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Nine of Hearts',
        value: 9,
        face: './Project/9_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Nine of Diamonds',
        value: 9,
        face: './Project/9_diamonds.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Nine of Clubs',
        value: 9,
        face: './Project/9_clubs.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Nine of Spades',
        value: 9,
        face: './Project/9_spade.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Ten of Hearts',
        value: 10,
        face: './Project/10_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Ten of Diamonds',
        value: 10,
        face: './Project/10_diamonds.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Ten of Clubs',
        value: 10,
        face: './Project/10_clubs.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Ten of Spades',
        value: 10,
        face: './Project/10_spade.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Jack of Hearts',
        value: 10,
        face: './Project/jack_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Jack of Diamonds',
        value: 10,
        face: './Project/jack_diamonds.jpeg',
        back: './Project/card_back.png'
    },
    {
        name: 'Jack of Clubs',
        value: 10,
        face: './Project/jack_clubs.jpeg',
        back: './Project/card_back.png'
    },
    {
        name: 'Jack of Spades',
        value: 10,
        face: './Project/jack_spade.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Queen of Hearts',
        value: 10,
        face: './Project/queen_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'Queen of Diamonds',
        value: 10,
        face: './Project/queen_diamonds.jpeg',
        back: './Project/card_back.png'
    },
    {
        name: 'Queen of Clubs',
        value: 10,
        face: './Project/queen_clubs.jpeg',
        back: './Project/card_back.png'
    },
    {
        name: 'Queen of Spades',
        value: 10,
        face: './Project/queen_spade.png',
        back: './Project/card_back.png'
    },
    {
        name: 'King of Hearts',
        value: 10,
        face: './Project/king_heart.png',
        back: './Project/card_back.png'
    },
    {
        name: 'King of Diamonds',
        value: 10,
        face: './Project/king_diamonds.png',
        back: './Project/card_back.png'
    },
    {
        name: 'King of Clubs',
        value: 10,
        face: './Project/king_clubs.jpeg',
        back: './Project/card_back.png'
    },
    {
        name: 'King of Spades',
        value: 10,
        face: './Project/king_spade.png',
        back: './Project/card_back.png'
    },
]
}

// const $img = $('<img/>')
// $img.attr({'src': deck.cards[0].face, 'class': 'card' })
// $('body').append($img);


// Allow User to click a $1 button, $5 button or $10 button for betting
let total = 100
let betAmount = 0;
$('input').click((e) => {
    const value = $(e.target).val()
    betAmount += parseInt(value);
    total -= parseInt(value);
    $('#bet').text('Bet Amount: ' + betAmount)
    $('#total').text('Total Amount: ' + total)
})

// $('#one').attr('disabled')

// Random 2 cards from the deck and append them to the User div
const getRandIndex = () => deck.cards[Math.floor(Math.random() * deck.cards.length)]

let cardAmount = 0
let dealAmount = 0
const drawUserCard = () => {
    let cardVal = getRandIndex()
    // First card appended to User
    const $img = $('<img/>')
    $img.attr({
        'src': cardVal.face, 
        'class': 'card' 
    })
    cardAmount += cardVal.value
    $('#user').append($img);
    let cardVal2 = getRandIndex()
    // Second Card appended to User
    const $img2 = $('<img/>')
    $img2.attr({
        'src': cardVal2.face,
        'class': 'card'
    })
    $('#user').append($img2)
    cardAmount += cardVal2.value
    $('#cardAmount').text(cardAmount)
}
console.log(drawUserCard())




// Random 2 cards to the dealer but leave one card face down
const drawDealerCard = () => {
    let cardVal = getRandIndex()
    const $img = $('<img/>')
    $img.attr({
        'src': cardVal.face,
        'class': 'card'
    })
    $('#dealer').append($img);
    const $img2 = $('<img/>')
    $img2.attr({
        'src': cardVal.back,
        'class': 'card',
        'id': 'cardBack'
    })
    dealAmount += cardVal.value
    $('#dealer').append($img2);
}
console.log(drawDealerCard())



// Creating hit button that draws another card


const $button = $('<button/>')
$button.attr('id', 'hit')
$button.text('Hit');
$('div').append($button)
$button.on('click', () => {
    let cardVal = getRandIndex()
    const $img = $('<img/>')
    $img.attr({
        'src': cardVal.face,
        'class': 'card'
    })
    cardAmount += cardVal.value
    $('#cardAmount').text(cardAmount)
    if (cardAmount > 21) {
        alert('BUST')
    }
    $('#user').append($img);
})

// Creating stay button that reveals dealers card
const runDealer = () => {
    let cardVal = getRandIndex()
    const $img = $('<img/>')
    $img.attr({
        'src': cardVal.face,
        'class': 'card'
     })
    dealAmount += cardVal.value
    $('#dealAmount').text(dealAmount)
    $('#dealer').append($img);
}

const $button2 = $('<button/>')
$button2.attr('id', 'stay')
$button2.text('Stay');
$('div').append($button2)
$button2.on('click', () => {
    let cardVal = getRandIndex()
    $('#cardBack').attr({
        'src': cardVal.face,
        'class': 'card'
    })
dealAmount += cardVal.value
$('#dealAmount').text(dealAmount)
while (dealAmount < 17) {
    runDealer();
}
if (dealAmount > 21) {
    alert('You win!')
} else if (dealAmount > 16 && dealAmount < 22 && dealAmount === cardAmount) {
    alert('You pushed!')
} else if (dealAmount > 16 && dealAmount < 22 && dealAmount > cardAmount) {
    alert('You lost!')
} else if (dealAmount > 16 && dealAmount < 22 && dealAmount < cardAmount) {
    alert('You win!')
}
})


// Bet amounts working, return bet * 2
// 