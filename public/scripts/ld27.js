var gameMap = {
  rooms: {
    START: {
      name: "Quickly, onwards!",
      messages: [
        "I am a brave adventurer who craves adventure whenever I can get it. I am on a mighty quest for the treasure I seek. Heed my tale as I run you through the minute to minute of my oh so amazing adventure.",
        "Are you ready?",
        "Because it's going to be a good one!"
      ],
      doors: [
        {id: "A1", clue: "Before me stood three doors. I knew only one would take me to the treasure, but the possibility still remained that two might somehow lead me there. One lead to death. That I could totally tell."}
      ]
    },

    // A Rooms
    A1: {
      name: "Lost",
      doors: [
        {id:"B1", clue: "As I approachded the door, my stomach ached with a hunger, a righteous hunger...for adventure..."},
        {id:"B2", clue: "Crossing gracefully over the skulls of a thousand fallen adventurers, I chose my door...and my fate!"},
        {id:"B3", clue: "Filled with a well deserved sense of superiority, I confidently stroke towards what could only be the correct door, because it is the door I chose, and I am better than it...and you!"},
      ]
    },

    // B Rooms
    B1: {
      name: "In",
      doors: [
        {id:"C1", clue: "I had no time to waste on not openeing doors, so I sprinted across the empty room and didn't not open that bad mother."},
        {id:"C2", clue: "...But not just a hunger for adventure, no, dear friend, for this was an ever so romantic take of OHSOTENDERLOVE!!! As I day-dreamed about my love, fate chose my path for me, as I stumbled through a hidden foor in the floor."},
      ]
    },
    B2: {
      name: "A Maze",
      doors: [
        {id:"C2", clue: "I quickly dispatched the Bone Warriors awaiting inside with a rapid series of drop kicks, saving the last and most dropping of kicks for my door of choise."},
        {id:"C3", clue: "They say the only weakness that Lava Works have is water, but that day I learned their real frailty resides in their crippling illiteracy and their pride against admitting it. I distracted them with my spare copy of the Iliad, and continued on my own Odyssey, straight Homer-style."},
      ]
    },
    B3: {
      name: "Awaiting",
      doors: [
        {id:"C4", clue: "I could taste it, the tasty taste of victoriousness! A taste you will never know, because you are awful, and I am not! I grabbed the door knob and stepped eagerly into the open arms of triumph"},
      ]
    },

    // C Rooms
    C1: {
      name: "Oops...",
      messages: [
        "Dying so soon?",
        "Why not try again?"
      ],
      doors: []
    },
    C2: {
      name: "My Love",
      doors: [
        {id:"D1", clue: "Landing gracefully on my robust tushy, I was beset upon by a flock of rabid Wasp Bats. Using my Mystical Maguffin Net, I defeated them in one deft swipe and proceeded onward."},
        {id:"D2", clue: "I descended for what felt like one hundred billion seconds, until my fall was broken by a massive mound of chewed bubblegum and mayonnaise. Thoroughly irked, I chose quickly, and before I knew it, I was forward bound."},
      ]
    },
    C3: {
      name: "My Soul",
      doors: [
        {id:"D2", clue: "Upon entering, I was sieged from behind by a horde of Ornery Sassy Gradnmothers. Placating them with a king sized bag of assorted licorice, I escaped with only mild pinch related injuries and an even gross of casseroles."},
        {id:"D3", clue: "The room was covered in a pleasantly scented blue moss that whispered gently when you stepped upon it. Curious as to it's genetic makeup, I collected a sample, which to my shocked caused the room to turn beat red, and the whispering began to sound like hushed mockery. Unsettled, I chose the door closeost, and escaped inside."},
      ]
    },
    C4: {
      name: "My Desire",
      messages: [
        "Uh oh, you're about to die...",
      ],
      doors: []
    },

    // D Rooms
    D1: {
      name: "For A Chance",
      doors: [
        {id:"E1", clue: "A faint scent lodged its way into my twitching nostrils. I was close. I knew it. That perfume, it could only be...no, don't get distracted now. Onward!!"},
        {id:"E2", clue: "My gut told me I was near her. It was like her wonderous beauty was pulling me forward as I made my way through the next door, compelled by instinct and RAW PASSION!"},
        {id:"E3", clue: "I was growing weary. The further I went, the more drained I felt, as if the Cursed Labyrinth was syphoning my very soul. I stumbled forward, my sweaty palms gripping the first door I saw and yanked it clumsily open."},
      ]
    },
    D2: {
      name: "For A Dance",
      doors: [
        {id:"E3", clue: "As I proceeded warily into the next room, I was greeted by a tiny little Frogoat. It brayed peacefully upon seeing me, as if it were beckoning me to follow it. He seemed pretty on the ball, so I fell in step behind him. What could possibly go wrong?"},
        {id:"E4", clue: "Inside I found a Wizardling dining upon a single rack of barbecued Frogoat ribs. Looking up from his meal, he gave me a single glance, sighed, and pointed at a door. I gave him my thanks and ventured forth."},
      ]
    },
    D3: {
      name: "For A Moment",
      messages: [
        "This is a dead end, you will die here.",
        "Prepare for dying...",
        "Here it comes..."
      ],
      doors: []
    },

    // E Rooms
    E1: {
      name: "To Return",
      doors: [
        {id:"F1", clue: "My legs moved as if controlled by some sort...leg...brains. I scurried forward, almost rabid, salivating at the thought of holding my lovely loving love again."},
        {id:"F2", clue: "The next room was nothing more than a cavernous pit, guarded by a massive Dragon-Headed Lamprey. I carefully edged my way around the open maw in the floor, fighting off the Lamprey with my Steel Baton of Justive. After he was dispatched, I jumped to the nearest door, gallatly tumbling through it."},
      ]
    },
    E2: {
      name: "To Endure",
      doors: [
        {id:"F2", clue: "\"Can you hear me, my love? I am coming for you! Fret no more!\" I bellowed, quiet and gentlemanly. I was no longer using logic, traveling forward on pure want and lust."},
        {id:"F3", clue: "Her aroma was unmistakable. Yes she must be near. I could practically taste her. But which door would lead me to my most precious darling? WHICH I SAY?! Perhaps...yes...why not THIS ONE!!"},
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
        {id:"F4", clue: "I had been searching for what seemed...at least a couple of minutes. I didn't know how much longer I could last. Pushing through the doubts and the pain, I pushed the next door open."},
        {id:"F5", clue: "My nose twitched. There seemed to be a plethora of smells coming from all the doors. I focused, honing in on my love, my lady...yes! There. She must be close! For LOVE!!!"},
        {id:"E3", clue: "Entering the next room, I felt a strange sense that I had gotten turned around. Could it have been that dastardly Wizardling? Was he playing tricks with my mind? I felt possessed as I reached out, grabbed the door and..."},
      ]
    },

    // F Rooms
    F1: {
      name: "What I Need",
      doors: [
        {id:"G1", clue: "I had come so far. My wounds aching, my clothes torn, my Pop-Tart supply slipping dangerously low, but somehow I knew that my journey was nearing its completion. Just. One. More. Door."},
        {id:"G2", clue: "I was running on all fours, tearing around corners, high fiving the ghosts of those who came before me. I pounded on that last door like it owed me me money--which coincidentally it did--but that, my friends, is a whole 'nother tale."},
      ]
    },
    F2: {
      name: "Dead",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    F3: {
      name: "What I Can't Live Without",
      doors: [
        {id:"G2", clue: "This sick game has gone on long enough. Soon I will be plucking my love from the hand of danger and peril and placing her gracefully in my warm, tender embrace, and I will be in hers. Enough pontificating, it's time to end this!"},
        {id:"F4", clue: "This room was different from the rest. In the middle rest a shallow basin filled with warm mead. I was so close to victory that before departing, I decided to drink my fill in a sort-of preemptive toast to my own superior intellect and cunning. I! AM! WINNINATOR!"},
      ]
    },
    F4: {
      name: "Oops, you died.",
      messages: [
        "This is the end. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    F5: {
      name: "What Is Best For Me",
      doors: [
        {id:"G3", clue: "I found the dead Garbaggio inside. His oozingness sickened me to my tiny tummy. Upon him I poured my Draught of Cleansing, eliminating him from this realm. And after he vanished into the unknown, only one smell was left, and it was coming from that door there!"},
        {id:"G4", clue: "The scent trail went cold. My heart dropped. Could I be too late? There was no time to waste on making informed decisions. The time for risk was nigh!"},
        {id:"G5", clue: "Ugh...more doors...fine...why not this one...whatever."},
      ]
    },


    // G Rooms
    G1: {
      name: "UGH! You died!",
      messages: [
        "This is death. <br />It was all pointless to begin with."
      ],
      doors: []
    },
    G2: {
      name: "Victory",
      messages: [
        "This door was different. Ringed by gold and silver trimming, the knob was in the shape of a heart and it beat in sync with my own.",
        "This was it. This was truly the end. I had made it. My journey was over, and she was just beyond this door.",
        "What if she didn't like me..what if I don't like her...wow, I really didn't think this through.",
        "Eh, to heck with it. I came this far, I'm opening this motherfucking door!"
      ],
      doors: [{id: "END", clue: "Go get her, tiger."}]
    },
    G3: {
      name: "Victory",
      messages: [
        "My stomach ached, my mouth dry, rasping for air as I crawled weakly towards that final door.",
        "My joints were sore, my brain was numb, and yet I knew my plight was at an end, and soon I would be in the gooey embrace of my beloved.",
        "It took me all my strength and all my heart to reach up and grab that last knob and yank that bastard open.",
        "And after that moment...my life was never the same again."
      ],
      doors: [{id: "END", clue: "Your future awaits."}]
    },
    G4: {
      name: "All this way just to die.",
      messages: [
        "And you didn't even get a parting gift."
      ],
      doors: []
    },
    G5: {
      name: "So close, but you died.",
      messages: [
        "And you didn't even get a parting gift."
      ],
      doors: []
    },

    // END
    END: {
      name: "The End",
      messages: [
        "Endings are hard to write.",
        "Either way, you died.",
        "Had to happen sooner or later."
      ],
      doors: []
    }
  }
}

$(function() {
  var game = new Game(gameMap)

  game.run()
})
