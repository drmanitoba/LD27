var gameMap = {
  rooms: {
    // A Rooms
    A1: {
      name: "Lost",
      doors: [
        {id:"B1", clue: "I am a door, the best one"},
        {id:"B2", clue: "I am a door, the best one"},
        {id:"B3", clue: "I am a door, the best one"},
      ]
    },

    // B Rooms
    B1: {
      name: "In",
      doors: [
        {id:"C1", clue: "I am a door, the best one"},
        {id:"C2", clue: "I am a door, the best one"},
      ]
    },
    B2: {
      name: "A Maze",
      doors: [
        {id:"C2", clue: "I am a door, the best one"},
        {id:"C3", clue: "I am a door, the best one"},
      ]
    },
    B3: {
      name: "Awaiting",
      doors: [
        {id:"C4", clue: "I am a door, the best one"},
      ]
    },

    // C Rooms
    C1: {
      name: "My Life",
      messages: [
        "Dying so soon?",
        "Why not try again?"
      ],
      doors: []
    },
    C2: {
      name: "My Love",
      doors: [
        {id:"D1", clue: "I am a door, the best one"},
        {id:"D2", clue: "I am a door, the best one"},
      ]
    },
    C3: {
      name: "My Soul",
      doors: [
        {id:"D2", clue: "I am a door, the best one"},
        {id:"D3", clue: "I am a door, the best one"},
      ]
    },
    C4: {
      name: "My Desire",
      messages: [
        "Dying so soon?",
        "Why not try again?"
      ],
      doors: []
    },

    // D Rooms
    D1: {
      name: "For A Chance",
      doors: [
        {id:"E1", clue: "I am a door, the best one"},
        {id:"E2", clue: "I am a door, the best one"},
        {id:"E3", clue: "I am a door, the best one"},
      ]
    },
    D2: {
      name: "For A Dance",
      doors: [
        {id:"E3", clue: "I am a door, the best one"},
        {id:"E4", clue: "I am a door, the best one"},
      ]
    },
    D3: {
      name: "For A Moment",
      messages: [
        "This is a dead end, you will die here."
      ],
      doors: []
    },

    // E Rooms
    E1: {
      name: "To Return",
      doors: [
        {id:"F1", clue: "I am a door, the best one"},
        {id:"F2", clue: "I am a door, the best one"},
      ]
    },
    E2: {
      name: "To Endure",
      doors: [
        {id:"F2", clue: "I am a door, the best one"},
        {id:"F3", clue: "I am a door, the best one"},
      ]
    },
    E3: {
      name: "To Forget",
      messages: [
        "This is a dead end, you will die here."
      ],
      doors: []
    },
    E4: {
      name: "To Be Reminded Of",
      doors: [
        {id:"E3", clue: "I am a door, the best one"},
        {id:"F4", clue: "I am a door, the best one"},
        {id:"F5", clue: "I am a door, the best one"},
      ]
    },

    // F Rooms
    F1: {
      name: "What I Need",
      doors: [
        {id:"G1", clue: "I am a door, the best one"},
        {id:"G2", clue: "I am a door, the best one"},
      ]
    },
    F2: {
      name: "What I Demand",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    F3: {
      name: "What I Can't Live Without",
      doors: [
        {id:"F4", clue: "I am a door, the best one"},
        {id:"G2", clue: "I am a door, the best one"},
      ]
    },
    F4: {
      name: "What I Must Do",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    F5: {
      name: "What Is Best For Me",
      doors: [
        {id:"G3", clue: "I am a door, the best one"},
        {id:"G4", clue: "I am a door, the best one"},
        {id:"G5", clue: "I am a door, the best one"},
      ]
    },


    // G Rooms
    G1: {
      name: "So I Can Stand",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    G2: {
      name: "So I Can Run",
      doors: [
        {id:"H1", clue: "I am a door, the best one"},
        {id:"H2", clue: "I am a door, the best one"},
        {id:"G3", clue: "I am a door, the best one"},
      ]
    },
    G3: {
      name: "So I Can Breathe",
      doors: [
        {id:"G2", clue: "I am a door, the best one"},
        {id:"H3", clue: "I am a door, the best one"},
        {id:"H4", clue: "I am a door, the best one"},
      ]
    },
    G4: {
      name: "So I Can Smile",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    G5: {
      name: "So I Can Forget",
      doors: [
        {id:"H5", clue: "I am a door, the best one"},
        {id:"H6", clue: "I am a door, the best one"},
      ]
    },

    // H Rooms
    H1: {
      name: "My Insides",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    H2: {
      name: "My Empathy",
      doors: [
        {id:"I1", clue: "I am a door, the best one"},
        {id:"I2", clue: "I am a door, the best one"},
      ]
    },
    H3: {
      name: "My Memory",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    H4: {
      name: "My Days Alive",
      doors: [
        {id:"I3", clue: "I am a door, the best one"},
        {id:"I4", clue: "I am a door, the best one"},
      ]
    },
    H5: {
      name: "My Ending",
      doors: [
        {id:"I5", clue: "I am a door, the best one"},
        {id:"I6", clue: "I am a door, the best one"},
      ]
    },
    H6: {
      name: "My Funeral",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },

    // I Doors
    I1: {
      name: "Being",
      doors: [
        {id:"END", clue: "I am a door, the best one"},
      ]
    },
    I2: {
      name: "Doing",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    I3: {
      name: "Having",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    I4: {
      name: "Waiting",
      doors: [
        {id:"END", clue: "I am a door, the best one"},
      ]
    },
    I5: {
      name: "Witnessing",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    I6: {
      name: "Feeling",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },

    // END
    END: {
      name: "The End",
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
