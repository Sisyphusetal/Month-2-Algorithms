from classes.deck import Deck
from classes.player import Player
import random

class War:

    def __init__(self):
        self.winner = ""
        self.loser = ""
        self.deck = Deck()

    def deal(self, player1, player2):
        random.shuffle(self.deck.cards)
        for card in self.deck.cards:
            if len(player1.hand) <= len(player2.hand):
                player1.hand.append(card)
            else:
                player2.hand.append(card)

    def fight(self, player1, player2):
        x = 0
        while x < 26:
            if player1.hand[0].point_val > player2.hand[0].point_val:
                player1.points += 1
                player1.playCard()
                player2.playCard()
            elif player2.hand[0].point_val > player1.hand[0].point_val:
                player2.points += 1
                player1.playCard()
                player2.playCard()
            else:
                player1.playCard()
                player2.playCard()
            x += 1
        


currentGame = War()
player1 = Player("Kurt")
player2 = Player("Aubrey")
currentGame.deal(player1, player2)
# currentGame.deck.show_cards()
currentGame.fight(player1, player2)
