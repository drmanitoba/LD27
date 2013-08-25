var Clock = Class.extend({
  init: function() {
    this._timer = new Timer(1000)
    this._currentTick = 0
    this._timer.addEventListener(TimerEvent.TIMER, this.tick.bind(this))
  },

  start: function() {
    this._timer.start()
  },

  reset: function() {
    this._timer.stop()
    this._timer.reset()
    this._currentTick = 0
  },

  tick: function(self, e) {
    if(this._currentTick <= Clock.MAX) {
      console.log(this._currentTick)
      this._currentTick = this._currentTick + 1
    }

    if(this._currentTick == Clock.MAX) {
      this.reset()
      $(document).trigger(GameEvent.DEAD)
    }
  }
})

Clock.MAX = 10
