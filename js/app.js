// Create and object with an array of cards with their face photo, back photo and value
const deck = {  
    cards:
    [ 
    //     {
    //     name: 'Ace of Hearts',
    //     value: 11,
    //     value2: 1,
    //     face: './Project/ace_heart.png',
    //     back: './Project/card_back.png'
    // },
    // {
    //     name: 'Ace of Diamonds',
    //     value: 11,
    //     value2: 1,
    //     face: './Project/ace_diamonds.jpeg',
    //     back: './Project/card_back.png'
    // },
    // {   
    //     name: 'Ace of Clubs',
    //     value: 11,
    //     value2: 1,
    //     face: './Project/ace_clubs.png',
    //     back: './Project/card_back.png'
    // },
    // {
    //     name: 'Ace of Spades',
    //     value: 11,
    //     value2: 1,
    //     face: './Project/ace_spade.jpeg',
    //     back: './Project/card_back.png'
    // },
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

// Allow User to click a $1, $5 or $10 button for betting

let total = 100
let betAmount = 0;
$('input').click((e) => {
    const value = $(e.target).val()
        // Stops total amount from going to negative value
    if (total >= 0 && $(e.target).val() <= total) {
        betAmount += parseInt(value);
        total -= parseInt(value);
    }
    $('#bet').text('Bet Amount: $' + betAmount)
    $('#total').text('Total Amount: $' + total)
})


// Clicking start game button
const $gameButton = $('<button/>')
$gameButton.text('Deal')
$gameButton.attr('id', 'deal')
$('div').append($gameButton)
$gameButton.on('click', () => {
    dealDeck()
    // Disabling bettting buttons after cards are drawn
    // $gameButton.attr('disabled', 'true')
    // $('#one').attr('disabled', 'true')
    // $('#five').attr('disabled', 'true')
    // $('#ten').attr('disabled', 'true')
    $('#one').hide()
    $('#five').hide()
    $('#ten').hide()
    $('#deal').hide()
})


const dealDeck = () => {
    console.log('dealdeck')
    // Random 2 cards from the deck and append them to the User div
    const getRandIndex = () => deck.cards[Math.floor(Math.random() * deck.cards.length)]
    let cardAmount = 0
    let dealAmount = 0


    const checkValue = () => {
        if (cardAmount >= 21) {
            $('#hit').remove()
            $('#stay').remove()
            let cardVal = getRandIndex()
            $('#cardTwoDealer').attr({
                'src': cardVal.face,
                'data': cardVal.value
            })
            dealAmount += cardVal.value
            $('#dealAmount').text(dealAmount)
            while (dealAmount < 17) {
                runDealer();
            }
            checkWinner()
        }
    }
    

    // Running the dealers cards
    let $cardOneDeal = parseInt($('#cardOneDealer').attr('data'))
    let $cardTwoDeal = parseInt($('#cardTwoDealer').attr('data'))
    const runDealer = () => {
        let cardVal = getRandIndex()
        const $img = $('<img/>')
        $img.attr({
            'src': deck.cards[28].face,
            'class': 'card'
        })
        dealAmount += deck.cards[28].value
        if (dealAmount > 21) {
            console.log($cardTwoDeal)
            if ($cardTwoDeal === 11) {
                // console.log($cardTwoDeal)
                $cardTwoDeal = 1
                dealAmount -= 10
                $('#dealAmount').text(dealAmount)
                $('#dealer').append($img);
            }
        }
        if (deck.cards[28].value === 11 && (dealAmount > 21)) {
                dealAmount -= 10
                console.log(dealAmount)
                $('#dealAmount').text(dealAmount)
                $('#dealer').append($img);
            } else {
                $('#dealAmount').text(dealAmount)
                $('#dealer').append($img);
            }
    }

    // Random 2 cards to the dealer but leave one card face down
    const drawDealerCard = () => {
        let cardVal = getRandIndex()
        const $img = $('<img/>')
        $img.attr({
            'src': deck.cards[19].face,
            'class': 'card',
            'id': 'cardOneDealer',
            'data': deck.cards[19].value
        })
        $('#dealer').append($img);
        const $img2 = $('<img/>')
        $img2.attr({
            'src': cardVal.back,
            'class': 'card',
            'id': 'cardTwoDealer'
        })
        dealAmount += deck.cards[19].value
        $('#dealer').append($img2);
    }
    drawDealerCard()


    // Drawing the users cards
    const drawUserCard = () => {
        let cardVal = getRandIndex()
        // First card appended to User

        const $img = $('<img/>')
        $img.attr({
            'src': cardVal.face,
            'class': 'card',
            'id': 'cardOneUser',
            'data': cardVal.value
        })
        cardAmount += cardVal.value
        $('#user').append($img)
        let cardVal2 = getRandIndex()
        // Second Card appended to User
        const $img2 = $('<img/>')
        $img2.attr({
            'src': cardVal2.face,
            'class': 'card',
            'id': 'cardTwoUser',
            'data': cardVal2.value
        })
        $('#user').append($img2)
        cardAmount += cardVal2.value
        // if (cardVal.value === 11 && cardVal2.value === 11) {
        //     cardVal.value = cardVal.value2
        //     cardVal2.value = cardVal2.value2
        //     cardAmount = 2
        // }
        // console.log(cardVal.value, cardVal2.value)
        $('#cardAmount').text(cardAmount)
        // Split button
        // if (cardVal.value === cardVal2.value) {

        // }
    }
    drawUserCard()



    // Creating a Double Down Button
    $doubleDown = $('<button/>').text('Double').attr('id', 'double')
    // $('#user').append($doubleDown)
    const hitDouble = () => {
        // $doubleDown.on('click', () => {
        //     if (betAmount <= total) {
        //         total -= betAmount
        //         betAmount = betAmount * 2
        //         $('#bet').text('Bet Amount: $' + betAmount)
        //         $('#total').text('Total Amount: $' + total)
        //         let cardVal5 = getRandIndex()
        //         const $img5 = $('<img/>')
        //         $img5.attr({
        //             'src': cardVal5.face,
        //             'class': 'card'
        //         })
        //         cardAmount += cardVal5.value
        //         $('#cardAmount').text(cardAmount)
        //         $('#user').append($img5)
        //         checkValue()
        //         $('#hit').remove()
        //         $('#stay').remove()
        //         let cardVal = getRandIndex()
        //         $('#cardBack').attr({
        //             'src': cardVal.face,
        //             'class': 'card'
        //         })
        //         dealAmount += cardVal.value
        //         $('#dealAmount').text(dealAmount)
        //         while (dealAmount < 17) {
        //             runDealer();
        //         }
        //         // Showing outcomes of dealers and users cards. Determining Winner
        //         if (dealAmount > 21 && cardAmount < 22) {
        //             // User wins and collects his bet ammount
        //             $('#total').text('Total Amount: $' + (total + betAmount + betAmount))
        //             total = total + betAmount * 2
        //             betAmount = 0
        //             $('#bet').text('Bet Amount: $' + betAmount)
        //         } else if (dealAmount > 16 && dealAmount < 22 && cardAmount < 22 && dealAmount < cardAmount) {
        //             // User wins and collects his bet ammount
        //             $('#total').text('Total Amount: $' + (total + betAmount + betAmount))
        //             total = total + betAmount * 2
        //             betAmount = 0
        //             $('#bet').text('Bet Amount: $' + betAmount)
        //             $('#bet').text('Bet Amount: $0')
        //         } else if (dealAmount > 16 && dealAmount < 22 && dealAmount === cardAmount) {
        //             // User tied
        //             $('#total').text('Total Amount: $' + (total + betAmount))
        //             total = total + betAmount
        //             betAmount = 0
        //             $('#bet').text('Bet Amount: $' + betAmount)
        //         } else if (dealAmount > 16 && dealAmount < 22 && dealAmount > cardAmount || cardAmount > 21) {
        //             // You lost and removing your money
        //             betAmount = 0
        //             $('#bet').text('Bet Amount: $' + betAmount)
        //         }
        //         $('#stay').remove()
        //         $('#double').remove()
        //         const $cont = $('<button/>').text('Cont').attr('id', 'cont').on('click', () => {
        //             // console.log('Works')
        //             $('#hit').removeAttr('disabled')
        //             $('#stay').removeAttr('disabled')
        //             $('#one').removeAttr('disabled')
        //             $('#five').removeAttr('disabled')
        //             $('#ten').removeAttr('disabled')
        //             $('#deal').removeAttr('disabled')
        //             $('.card').remove()
        //             $('#cont').remove()
        //             $('#hit').remove()
        //             $('#stay').remove()
        //             $('#cardAmount').text('')
        //             $('#dealAmount').text('')

        //         })
        //         $('div').append($cont)

        //     } else {
        //         alert(`You dont have enough`)
        //     }
        // })
    }
    // hitDouble()



    // Creating HIT button that draws another card
    let $cardOne = parseInt($('#cardOneUser').attr('data'))
    let $cardTwo = parseInt($('#cardTwoUser').attr('data'))
    let $cardThree = parseInt($('#cardThreeUser').attr('data'))

        const $button = $('<button/>')
        $button.attr('id', 'hit')
        $button.text('Hit');
        $('div').append($button)
        const hitClick = () => {
            $button.on('click', () => {
                $('#double').remove()
                let cardVal = getRandIndex()
                const $img = $('<img/>')
                $img.attr({
                    'src': cardVal.face,
                    'class': 'card',
                    'id': 'cardThreeUser',
                    'data': cardVal.value
                })
                cardAmount += cardVal.value
                // if($cardOne === 11 || $cardTwo === 11 && cardAmount > 21) {
                    
                // }
                // Changing 11 ace to 1 ace of its going to bust
                    if (cardVal.value === 11 && (cardAmount > 21)) {
                        cardAmount -= 10
                        $('#cardAmount').text(cardAmount)
                        $('#user').append($img)
                    } else if (($cardTwo === 11 || $cardOne === 11) && ((cardVal.value + cardAmount) > cardAmount)) {
                        $('#cardTwoUser').attr('value', 1)
                        if ('#cardTwoUser')
                        cardAmount -= 10 
                        $cardTwo = 1
                        $('#cardAmount').text(cardAmount)
                        $('#user').append($img)
                    } else {
                        $('#cardAmount').text(cardAmount)
                        $('#user').append($img)
                    }
                checkValue()
            })
            if ($cardOne + $cardTwo === 21) {
                $button.attr('disabled', 'true') 
            }
        }
        hitClick();



    // Creating STAY button that reveals dealers card
    const $button2 = $('<button/>')
    $button2.attr('id', 'stay')
    $button2.text('Stay');
    $('div').append($button2)
    const hitStay = () => {
        $button2.on('click', () => {
            $('#double').remove()
            $('#hit').remove()
            $('#stay').remove()
            // $button2.attr('disabled', 'true')
            // $button.attr('disabled', 'true')
            let cardVal = getRandIndex()
            $('#cardTwoDealer').attr({
                'src': deck.cards[0].face,
                'data': deck.cards[0].value
            })
            console.log($('#cardTwoDealer'))
            dealAmount += deck.cards[0].value
            $('#dealAmount').text(dealAmount)
            while (dealAmount < 17) {
                runDealer();
            }
            checkWinner();
        })
    }
    hitStay()

    const checkWinner = () => {
        // Showing outcomes of dealers and users cards. Determining Winner
        if (($cardOne + $cardTwo === 21) && ($cardOneDeal + $cardTwoDeal === 21)) {
            $('#total').text('Total Amount: $' + (total + betAmount + betAmount + (betAmount / 2)))
            total = total + betAmount * 2 + (betAmount / 2)
            betAmount = 0
            $('#bet').text('Bet Amount: $' + betAmount)
        } else if (dealAmount > 21 && cardAmount < 22) {
            // User wins and collects his bet ammount
            $('#total').text('Total Amount: $' + (total + betAmount + betAmount))
            total = total + betAmount * 2
            betAmount = 0
            $('#bet').text('Bet Amount: $' + betAmount)
        } else if (dealAmount > 16 && dealAmount < 22 && cardAmount < 22 && dealAmount < cardAmount) {
            // User wins and collects his bet ammount
            $('#total').text('Total Amount: $' + (total + betAmount + betAmount))
            total = total + betAmount * 2
            betAmount = 0
            $('#bet').text('Bet Amount: $' + betAmount)
            $('#bet').text('Bet Amount: $0')
        } else if (dealAmount > 16 && dealAmount < 22 && dealAmount === cardAmount) {
            // User tied
            $('#total').text('Total Amount: $' + (total + betAmount))
            total = total + betAmount
            betAmount = 0
            $('#bet').text('Bet Amount: $' + betAmount)
        } else if (dealAmount > 16 && dealAmount < 22 && dealAmount > cardAmount || cardAmount > 21) {
            // You lost and removing your money
            betAmount = 0
            $('#bet').text('Bet Amount: $' + betAmount)
        }
        const $cont = $('<button/>').text('Cont').attr('id', 'cont').on('click', () => {
            // console.log('Works')
            $('#hit').removeAttr('disabled')
            $('#stay').removeAttr('disabled')
            $('.card').remove()
            $('#cont').remove()
            $('#hit').remove()
            $('#stay').remove()
            $('#cardAmount').text('')
            $('#dealAmount').text('')
            $('#one').show()
            $('#five').show()
            $('#ten').show()
            $('#deal').show()

        })
        $('#contButton').append($cont)
    }
}