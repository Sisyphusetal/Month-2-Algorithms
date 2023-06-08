class Player:

    def __init__(self, player):
        self.player = player
        self.hand = []
        self.points = 0

    def playCard(self):
        del self.hand[0]