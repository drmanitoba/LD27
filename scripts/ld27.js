var gameMap = {
  rooms: {
    A1: {
      doors: ["B1", "B2", "B3"]
    },

    B1: {
      doors: ["C1", "C2"]
    },
    B2: {
      doors: ["C3", "C4"]
    },
    B3: {
      doors: ["C5"]
    },

    C1: {
      doors: ["C2", "D1", "D2"]
    },
    C2: {
      doors: ["C1", "D3"]
    },
    C3: {
      doors: []
    },
    C4: {
      doors: ["D4", "D5"]
    },
    C5: {
      doors: ["D5", "D6"]
    },

    D1: {
      doors: []
    },
    D2: {
      doors: ["E1"]
    },
    D3: {
      doors: ["E1", "D4"]
    },
    D4: {
      doors: ["E2", "E3"]
    },
    D5: {
      doors: ["E3", "E4"]
    },
    D6: {
      doors: []
    },

    E1: {
      doors: ["F1", "F2"]
    },
    E2: {
      doors: []
    },
    E3: {
      doors: ["F2", "F3"]
    },
    E4: {
      doors: []
    },

    F1: {
      doors: []
    },
    F2: {
      doors: []
    },
    F3: {
      doors: []
    },
  }
}

$(function() {
  var game = new Game(gameMap)

  game.run()
})
