var socket = io();

// Emit chat message when enter key is pressed.
$('#chat-input').keydown(function(event) {
      if (event.keyCode == 13) {
          event.preventDefault();
          if ($("#chat-input").val() != "") {
              socket.emit("chat-message", $("#chat-input").val());
              $("#chat-input").val("");
          }
      }
});


// Receive chat message from server.
socket.on("chat-message", function(message) {
    $("#chat-container").append("- " + message + "<br />")
});