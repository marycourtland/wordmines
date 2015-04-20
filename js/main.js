window.game = window.game || {};

$(document).ready(function() {
  game.container = $("#game");
  game.keyboard.init();
  game.player.createAt(xy(50, 50));

  game.wordmines = game.words.map(function(wordlist) {
    return (new game.Wordmine(wordlist)).createAt(randXY(xy(0, 0), getGameSize()));
  })

  game.container.on('death', function() {
    $(".wordmine").fadeOut(2000);
  })
}
