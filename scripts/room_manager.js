var RoomManager = Class.extend({
  init: function(map) {
    this._map = map
    this._messageIndex = 0
    this.goToFirstRoom()
  },

  goToFirstRoom: function() {
    this._currentRoom = this._map.getFirstRoom()
  },

  currentRoom: function() {
    return this._currentRoom
  },

  currentRoomName: function() {
    return this._currentRoom.getName()
  },

  currentRoomHasMessages: function() {
    return this._currentRoom.hasMessages() && this._messageIndex <= this._currentRoom.getMessages().length - 1
  },

  nextMessage: function() {
    if(this._messageIndex < this._currentRoom.getMessages().length) {
      this._messageIndex = this._messageIndex + 1
      return true
    }

    return false
  },

  getCurrentMessage: function() {
    return this._currentRoom.getMessage(this._messageIndex)
  },

  goToRoom: function(roomID) {
    if(this._currentRoom = this._map.getRoom(roomID)) {
      this._messageIndex = 0
      return true
    }

    return false
  }
})

RoomManager.prototype.toString = function() {
  return this._rooms
}
