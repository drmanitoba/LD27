var MessageView = Class.extend({
  init: function(msg) {
    if(msg instanceof Message) {
      this._message = msg
    }

    this._$messages = $("#messages")
  },

  render: function() {
    var html = ""

    html += '<p class="msg">' + this._message.getText() + '</p>'
    html += '<span class="msg-nav">Next &rarr;</span>'

    this._$messages.html(html).show()
  },

  clear: function() {
    this._$messages.html("").hide()
  }
})
