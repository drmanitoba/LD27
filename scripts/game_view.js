var GameView = Class.extend({
  init: function(game) {
    this._game = game
    $("#timer").hide()
  },

  render: function() {
    var game = this._game
    var manager = game.getRoomManager()

    if(game.alive()) {
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

        this._roomView.render()
      }
    } else {
      $("#main").html('<h1>You Dead.</h1>')
    }
  },

  update: function() {
    this._game.unbindNavigationEvents()
    this.render()
    this._game.bindNavigationEvents()
  },
})
