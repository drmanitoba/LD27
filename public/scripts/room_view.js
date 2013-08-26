var RoomView = Class.extend({
  init: function(room) {
    if(room instanceof Room) {
      this._room = room
    }

    this._$room = $("#room")
    this._$doors = $("#doors")
    this._$timer = $("#timer")
  },

  getDoorList: function() {
    var html = ""
    var doors = this._room.getDoors()

    for(var d in doors) {
      var door = doors[d]

      html += '<li class="door" data-target="' + door.getTarget() + '">' +
              door.getClue() + 
              '</li>\n'
    }

    return html
  },

  clear: function() {
    this._$room.hide()
    this._$doors.hide()
  },

  render: function() {
    this._$room.show()
    this._$doors.show()

    this._$doors.html(this.getDoorList())
  }
})
