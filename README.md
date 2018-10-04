# Project One - Blackjack

- By Blake Harris

A simple version of a classic casino table game

![Blackjack WireFrame](../Desktop/Pictures/Blackjack_Wireframe)


### Technologies

- HTML5
- CSS3
- JavaScript / jQuery

### User Stories

- *User should be able to place a bet*

- *User should be able to get drawn two random cards and choose to hit or stay*

- *Dealers cards will then be revealed and acted upon as so*

- *If User wins, they will win the amount that was bet*

### Game rules

- *User should be able to start by placing a $1, $5 or $10 bet.*

- *User should then be able to start the game and get drawn two random cards from the deck*

- *Dealer should also get drawn two random cards from the deck, but with one card face down*

- *User should then be able to decide if they want to 'hit' for another card, or 'stay'*

- *When user chooses to stay and stops drawing cards, the second card of the dealer will then be revealed*

- *If dealers cards add up to 17 - 21, dealer cannot draw anymore cards. If dealer's hand is 16 or lower, they must continue to draw cards until their hand is greater than 17*

- *If User does not exceed 21, User will win that hand if the Dealer's hand is greater than 21*

- *If User does not exceed 21 and User's hand is higher than the Dealer's hand, User will win*

- *If User exceeds 21, User loses regardless of the Dealer's hand*

- *If User draws an Ace and 10/Face Card, User was dealt a Blackjack and will receive 3:2 of their placed bet*

- *User will be able to 'Double Down' a bet. However, they will only receive one more card after placing that bet*

### Struggles 

- Determining whether an Ace is going to count as 1 or 11 based off the hand that the user or dealer has.

- Clearing the board and 'shuffling' the deck after that hand has concluded.

- Arranging elements in jQuery, being put in the correct location

- Finding the random cards value outside of the function. (You can't run same function because you'll get another random cards value)

- Getting Dealer's facedown card to flip automaticlly when User busts
