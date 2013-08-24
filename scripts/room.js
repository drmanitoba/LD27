var Room = Class.extend({
  init: function(id) {
    this._id = id
    this._doors = []
    this._name = "Room " + id
  },

  addDoor: function(door) {
    if(door instanceof Door) {
      this._doors.push(door)
    }
  },

  makeDeadEnd: function() {
    this._deadEnd = true
  },

  isDeadEnd: function() {
    return Boolean(this._deadEnd)
  },

  getName: function() {
    return this._name
  },

  getDoors: function() {
    return this._doors
  },

  getID: function() {
    return this._id
  }
})
