var Game = Class.extend({
  init: function(mapData) {
    this._mapData = mapData
    this._map = new Map()

    this._$doors = $("ul#doors")
    this._$name = $("h1#roomName")

    this.buildMap()
  },

  buildMap: function() {
    // Iterate over rooms
    var rooms = this._mapData["rooms"]
    for(var r in rooms) {
      var room = new Room(r)
      var doors = rooms[r]["doors"]

      if(doors.length > 0) {
        for(var d in doors) {
          var target = doors[d]
          var door = new Door(target)
          room.addDoor(door)
        }
      } else {
        room.makeDeadEnd()
      }

      this._map.addRoom(room)
    }
  },

  doorClick: function(e) {
    var target
    var self = e.data.self

    target = $(e.currentTarget).attr("data-target")
    self._navigator.navigateTo(target)
  },

  render: function() {
    this.unbindEvents()
    this._$name.html(this._roomManager.currentRoom().getName())
    this._$doors.html(this._roomManager.getDoorList())
    this.bindEvents()
  },

  unbindEvents: function() {
    $("li.door").off("click")
  },

  bindEvents: function() {
    $("li.door").on("click", {self: this}, this.doorClick)
    $(document).on("navigate", {self: this}, this.afterNavigate)
  },

  afterNavigate: function(e) {
    var self = e.data.self

    self.render()
  },

  run: function() {
    this._roomManager = new RoomManager(this._map)
    this._navigator = new Navigator(this._roomManager)

    this.render()
  }
})
