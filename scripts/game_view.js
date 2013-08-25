var GameView = Class.extend({
  init: function(game) {
    this._game = game
  },

  render: function() {
    var game = this._game
    var manager = game.getRoomManager()

    // If we have messages, show those first
    if(manager.currentRoomHasMessages()) {
      if(this._roomView) {
        this._roomView.clear()
      }

      var msg = manager.getCurrentMessage()
      this._msgView = new MessageView(msg)

      $(document).trigger(NavigationEvent.MSG_START)
      this._msgView.render()
    } else {
      if(this._msgView) {
        this._msgView.clear()
      }

      var room = manager.currentRoom()
      this._roomView = new RoomView(room)

      $(document).trigger(NavigationEvent.ROOM_START)
      this._roomView.render()
    }
  },

  update: function() {
    this._game.unbindNavigationEvents()
    this.render()
    this._game.bindNavigationEvents()
  },
})
