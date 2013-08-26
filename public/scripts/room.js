var Room = Class.extend({
  init: function(id, data) {
    console.log(data)
    this._id = id
    this._doors = []
    this._messages = []
    this._name = data.name
  },

  addDoor: function(door) {
    if(door instanceof Door) {
      this._doors.push(door)
    }
  },

  addMessage: function(msg) {
    if(msg instanceof Message) {
      this._messages.push(msg)
    }
  },

  makeDeadEnd: function() {
    this._deadEnd = true
  },

  isDeadEnd: function() {
    return Boolean(this._deadEnd)
  },

  isStart: function() {
    return this._id == "START"
  },

  getName: function() {
    return this._name
  },

  getDoors: function() {
    return this._doors
  },

  getID: function() {
    return this._id
  },

  getMessage: function(index) {
    return this._messages[index]
  },

  getMessages: function() {
    return this._messages
  },

  hasMessages: function() {
    return !!this._messages.length
  }
})
