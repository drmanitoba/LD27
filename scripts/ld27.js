var gameMap = {
  rooms: {
    START: {
      messages: [
        "This is message number 1",
        "This is message number 2",
        "This is message number 3"
      ],
      doors: ["A1"]
    },

    A1: {
      doors: ["B1", "B2", "B3"]
    },

    B1: {
      messages: [
        "B1 Message 1",
        "B1 Message 2",
        "B1 Messge 3",
        "B1 Message 4"
      ],
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
      messages: [
        "This is a dead end, you will die here."
      ],
      doors: []
    },
    C4: {
      doors: ["D4", "D5"]
    },
    C5: {
      doors: ["D5", "D6"]
    },

    D1: {
      messages: [
        "This is a dead end, you will die here."
      ],
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
      messages: [
        "This is a dead end, you will die here."
      ],
      doors: []
    },

    E1: {
      doors: ["F1", "F2"]
    },
    E2: {
      messages: [
        "This is a dead end, you will die here."
      ],
      doors: []
    },
    E3: {
      doors: ["F2", "F3"]
    },
    E4: {
      messages: [
        "This is a dead end, you will die here."
      ],
      doors: []
    },

    F1: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    F2: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    F3: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
  }
}

$(function() {
  var game = new Game(gameMap)

  game.run()
})
