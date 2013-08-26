var Door = Class.extend({
  init: function(doorData) {
    this._target = doorData.id 
    this._clue = doorData.clue
  },

  getClue: function() {
    return this._clue
  },

  getTarget: function() {
    return this._target
  }
})
