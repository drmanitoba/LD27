var SoundManager = Class.extend({
  init: function() {
    this._sounds = {}

    this._sounds.bgLoop = new Howl({
      urls: ["/res/bg-loop.mp3"]
    }).loop(true)

    this._sounds.ticking = new Howl({
      urls: ["/res/clock.mp3"],
      volume: 0.4
    })

    this._sounds.pounding = new Howl({
      urls: ["/res/pounding.mp3"]
    })

    this._sounds.dead = new Howl({
      urls: ["/res/dead.mp3"]
    })
  },

  playSound: function(name) {
    var sound = this._sounds[name]
    sound.play()
  },

  stopSound: function(name) {
    var sound = this._sounds[name]
    sound.stop()
  }
})

SoundManager.BGLOOP = "bgLoop"
SoundManager.TICKING = "ticking"
SoundManager.POUNDING = "pounding"
SoundManager.DEAD = "dead"
