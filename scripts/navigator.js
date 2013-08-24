var Navigator = Class.extend({
  init: function(manager) {
    this._manager = manager
  },

  navigateTo: function(target) {
    this._manager.goToRoom(target)
    $(document).trigger("navigate")
  }
})
