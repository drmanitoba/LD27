var gameMap = {
  rooms: {
    // A Rooms
    A1: {
      doors: [
        {id:"B1", clue: "I am a door, the best one"},
        {id:"B2", clue: "I am a door, the best one"},
        {id:"B3", clue: "I am a door, the best one"},
      ]
    },

    // B Rooms
    B1: {
      doors: [
        {id:"C1", clue: "I am a door, the best one"},
        {id:"C2", clue: "I am a door, the best one"},
      ]
    },
    B2: {
      doors: [
        {id:"C2", clue: "I am a door, the best one"},
        {id:"C3", clue: "I am a door, the best one"},
      ]
    },
    B3: {
      doors: [
        {id:"C4", clue: "I am a door, the best one"},
      ]
    },

    // C Rooms
    C1: {
      messages: [
        "Dying so soon?",
        "Why not try again?"
      ],
      doors: []
    },
    C2: {
      doors: [
        {id:"D1", clue: "I am a door, the best one"},
        {id:"D2", clue: "I am a door, the best one"},
      ]
    },
    C3: {
      messages: [
        "This is a dead end, you will die here."
      ],
      doors: [
        {id:"D2", clue: "I am a door, the best one"},
        {id:"D3", clue: "I am a door, the best one"},
      ]
    },
    C4: {
      messages: [
        "Dying so soon?",
        "Why not try again?"
      ],
      doors: []
    },

    // D Rooms
    D1: {
      messages: [
        "This is a dead end, you will die here."
      ],
      doors: [
        {id:"E1", clue: "I am a door, the best one"},
        {id:"E2", clue: "I am a door, the best one"},
        {id:"E3", clue: "I am a door, the best one"},
      ]
    },
    D2: {
      doors: [
        {id:"E3", clue: "I am a door, the best one"},
        {id:"E4", clue: "I am a door, the best one"},
      ]
    },
    D3: {
      doors: []
    },

    // E Rooms
    E1: {
      doors: [
        {id:"F1", clue: "I am a door, the best one"},
        {id:"F2", clue: "I am a door, the best one"},
      ]
    },
    E2: {
      doors: [
        {id:"F2", clue: "I am a door, the best one"},
        {id:"F3", clue: "I am a door, the best one"},
      ]
    },
    E3: {
      messages: [
        "This is a dead end, you will die here."
      ],
      doors: []
    },
    E4: {
      doors: [
        {id:"E3", clue: "I am a door, the best one"},
        {id:"F4", clue: "I am a door, the best one"},
        {id:"F5", clue: "I am a door, the best one"},
      ]
    },

    // F Rooms
    F1: {
      doors: [
        {id:"G1", clue: "I am a door, the best one"},
        {id:"G2", clue: "I am a door, the best one"},
      ]
    },
    F2: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    F3: {
      doors: [
        {id:"F4", clue: "I am a door, the best one"},
        {id:"G2", clue: "I am a door, the best one"},
      ]
    },
    F4: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    F5: {
      doors: [
        {id:"G3", clue: "I am a door, the best one"},
        {id:"G4", clue: "I am a door, the best one"},
        {id:"G5", clue: "I am a door, the best one"},
      ]
    },


    // G Rooms
    G1: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    G2: {
      doors: [
        {id:"H1", clue: "I am a door, the best one"},
        {id:"H2", clue: "I am a door, the best one"},
        {id:"G3", clue: "I am a door, the best one"},
      ]
    },
    G3: {
      doors: [
        {id:"G2", clue: "I am a door, the best one"},
        {id:"H3", clue: "I am a door, the best one"},
        {id:"H4", clue: "I am a door, the best one"},
      ]
    },
    G4: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    G5: {
      doors: [
        {id:"H5", clue: "I am a door, the best one"},
        {id:"H6", clue: "I am a door, the best one"},
      ]
    },

    // H Rooms
    H1: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    H2: {
      doors: [
        {id:"I1", clue: "I am a door, the best one"},
        {id:"I2", clue: "I am a door, the best one"},
      ]
    },
    H3: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    H4: {
      doors: [
        {id:"I3", clue: "I am a door, the best one"},
        {id:"I4", clue: "I am a door, the best one"},
      ]
    },
    H5: {
      doors: [
        {id:"I5", clue: "I am a door, the best one"},
        {id:"I6", clue: "I am a door, the best one"},
      ]
    },
    H6: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },

    // I Doors
    I1: {
      doors: [
        {id:"END", clue: "I am a door, the best one"},
      ]
    },
    I2: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    I3: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    I4: {
      doors: [
        {id:"END", clue: "I am a door, the best one"},
      ]
    },
    I5: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    I6: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },

    // END
    END: {
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    I6: {
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
