var RoomView = Class.extend({
  init: function(room) {
    if(room instanceof Room) {
      this._room = room
    }

    this._$room = $("#room")
  },

  getDoorList: function() {
    var html = ""
    var doors = this._room.getDoors()

    for(var d in doors) {
      var door = doors[d]

      html += '<li class="door" data-target="' + door.getTarget() + '">' +
              "To room " +
              door.getTarget() +
              '</li>\n'
    }

    return html
  },

  clear: function() {
    this._$room.hide()
  },

  render: function() {
    this._$room.show()

    this._$room.find("#roomName").html(this._room.getName())

    this._$room.find("#doors").html(this.getDoorList())
  }
})
