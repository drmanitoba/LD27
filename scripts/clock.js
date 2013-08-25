var Clock = Class.extend({
  init: function() {
    this._timer = new Timer(1000)
    this._$timer = $("#timer")
    this._currentTick = 0
    this._timer.addEventListener(TimerEvent.TIMER, this.tick.bind(this))
  },

  start: function() {
    this._timer.start()
    this._$timer.html(Clock.MAX).show()
  },

  reset: function() {
    this._timer.stop()
    this._timer.reset()
    this._currentTick = 0
  },

  tick: function(self, e) {
    if(this._currentTick <= Clock.MAX) {
      this._$timer.html((Clock.MAX - 1) - this._currentTick)
      this._currentTick = this._currentTick + 1
    }

    if(this._currentTick == Clock.MAX) {
      this.reset()
      $(document).trigger(GameEvent.DEAD)
    }
  }
})

Clock.MAX = 10
