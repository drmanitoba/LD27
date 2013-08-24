var RoomManager = Class.extend({
  init: function(map) {
    this._map = map
    this.goToFirstRoom()
  },

  goToFirstRoom: function() {
    this._currentRoom = this._map.getFirstRoom()
  },

  currentRoom: function() {
    return this._currentRoom
  },

  getDoorList: function() {
    var html = ""
    var doors = this._currentRoom.getDoors()

    for(var d in doors) {
      var door = doors[d]

      html += '<li class="door" data-target="' + door.getTarget() + '">' +
              "To room " +
              door.getTarget() +
              '</li>\n'
    }

    return html
  },

  goToRoom: function(room) {
    this._currentRoom = this._map.getRoom(room)
  }
})

RoomManager.prototype.toString = function() {
  return this._rooms
}
