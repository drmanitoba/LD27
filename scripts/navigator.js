var Navigator = Class.extend({
  init: function(manager) {
    this._manager = manager
  },

  doorNav: function(e) {
    var self = e.data.self
    var roomID

    roomID = $(e.currentTarget).attr("data-target")
    self.navigateToRoom(roomID)
  },

  msgNav: function(e) {
    var self = e.data.self

    var didNav = self._manager.nextMessage()

    if(didNav) {
      $(document).trigger(NavigationEvent.MSG_NAV)
    } else {
      $(document).trigger(NavigationEvent.MSG_END)
    }
  },

  navigateToRoom: function(roomID) {
    var didNav = this._manager.goToRoom(roomID)

    if(didNav) {
      $(document).trigger(NavigationEvent.ROOM_NAV)
    }
  }
})

var NavigationEvent = {}
NavigationEvent.ROOM_START = "room_start_event"
NavigationEvent.ROOM_NAV = "room_nav_event"
NavigationEvent.MSG_START = "message_start_event"
NavigationEvent.MSG_NAV = "message_nav_event"
NavigationEvent.MSG_END = "message_end_event"
