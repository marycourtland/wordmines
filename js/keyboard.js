window.game = window.game || {};
window.game.keyboard = {};

window.game.keyboard.init = function() {
  function triggerKeyEvent(evt) {
    var keycode = window.event? evt.keyCode : evt.which;
    var key = window.game.keyboard.keycodes[keycode] || keycode;
    $(window.game.container).trigger(evt.originalEvent.type + "_" + key);
  }

  // forward key events to game obj
  ['keydown', 'keyup', 'keypress'].forEach(function(evtname) {
    $(document).on(evtname, triggerKeyEvent);
  })
}


// Commonly used sets of keys
window.game.keyboard.keydirs_adws = {
  "A": "left",
  "D": "right",
  "W": "up",
  "S": "down"
}
window.game.keyboard.keydirs_lrud = { 
  "LEFT": "left",
  "RIGHT": "right",
  "UP": "up",
  "DOWN": "down"
}

// Commonly used keycodes
window.game.keyboard.keycodes = {};
window.game.keyboard.keycodes[16] = "SHIFT";
window.game.keyboard.keycodes[17] = "CTRL";
window.game.keyboard.keycodes[18] = "ALT";
window.game.keyboard.keycodes[37] = "LEFT";
window.game.keyboard.keycodes[39] = "RIGHT";
window.game.keyboard.keycodes[38] = "UP";
window.game.keyboard.keycodes[40] = "DOWN";
window.game.keyboard.keycodes[32] = "SPACE";
window.game.keyboard.keycodes[13] = "ENTER";
window.game.keyboard.keycodes[189] = "DASH";
window.game.keyboard.keycodes[187] = "EQUALS";
window.game.keyboard.keycodes[107] = "PLUS";
window.game.keyboard.keycodes[109] = "MINUS";
window.game.keyboard.keycodes[65] = "A";
window.game.keyboard.keycodes[66] = "B";
window.game.keyboard.keycodes[67] = "C";
window.game.keyboard.keycodes[68] = "D";
window.game.keyboard.keycodes[69] = "E";
window.game.keyboard.keycodes[70] = "F";
window.game.keyboard.keycodes[71] = "G";
window.game.keyboard.keycodes[72] = "H";
window.game.keyboard.keycodes[73] = "I";
window.game.keyboard.keycodes[74] = "J";
window.game.keyboard.keycodes[75] = "K";
window.game.keyboard.keycodes[76] = "L";
window.game.keyboard.keycodes[77] = "M";
window.game.keyboard.keycodes[78] = "N";
window.game.keyboard.keycodes[79] = "O";
window.game.keyboard.keycodes[80] = "P";
window.game.keyboard.keycodes[81] = "Q";
window.game.keyboard.keycodes[82] = "R";
window.game.keyboard.keycodes[83] = "S";
window.game.keyboard.keycodes[84] = "T";
window.game.keyboard.keycodes[85] = "U";
window.game.keyboard.keycodes[86] = "V";
window.game.keyboard.keycodes[87] = "W";
window.game.keyboard.keycodes[88] = "X";
window.game.keyboard.keycodes[89] = "Y";
window.game.keyboard.keycodes[90] = "Z";
window.game.keyboard.keycodes[188] = "COMMA";
window.game.keyboard.keycodes[190] = "PERIOD";
window.game.keyboard.keycodes[191] = "SLASH";
window.game.keyboard.keycodes[220] = "BSLASH";
window.game.keyboard.keycodes[219] = "RBRACK";
window.game.keyboard.keycodes[221] = "LBRACK";
window.game.keyboard.keycodes[222] = "APOSTOPHE";
window.game.keyboard.keycodes[186] = "SEMICOLON";
