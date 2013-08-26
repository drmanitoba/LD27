var Map = Class.extend({
  init: function() {
    this._rooms = []
  },

  addRoom: function(room) {
    this._rooms.push(room)
  },

  getFirstRoom: function() {
    return this._rooms[0]
  },
  
  hasRoom: function(roomID) {
    for(r in this._rooms) {
      var room = this._rooms[r]

      if(room.getID() == roomID) {
        return room
      }
    }

    return false
  },

  getRoom: function(roomID) {
    return this.hasRoom(roomID)
  }
})
