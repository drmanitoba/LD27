var SoundManager = Class.extend({
  init: function() {
    this._sounds = {}

    this._sounds.bgLoop = new Howl({
      urls: ["/res/bg-loop.mp3"]
    }).loop(true)

    this._sounds.ticking = new Howl({
      urls: ["/res/clock.mp3"]
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
