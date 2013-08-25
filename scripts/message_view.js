var MessageView = Class.extend({
  init: function(msg) {
    if(msg instanceof Message) {
      this._message = msg
    }

    this._$messages = $("#messages")
  },

  render: function() {
    var html = ""

    html += '<blockquote>' +
    '<p>' + this._message.getText() + '</p>' +
    '<small class="msg-nav">Next &rarr;</small>' +
    '</blockquote>'

    this._$messages.html(html).show()
  },

  clear: function() {
    this._$messages.html("").hide()
  }
})
