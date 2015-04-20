window.game = window.game || {};

$(document).ready(function() {
  game.container = $("#game");
  game.keyboard.init();
  game.player.createAt(xy(50, 50));

  game.wordmines = game.words.map(function(wordlist) {
    return (new game.Wordmine(wordlist)).createAt(randXY(xy(0, 0), getGameSize()));
  })

  function tick() {
    // calculate fps
    var t = (new Date()).getTime();
    game.fps = 1000/(t - game.t);
    game.t = t;
    game.frame += 1;
    window.requestAnimationFrame(tick);
  }

  game.frame = 0;
  game.fps = 0;
  game.t = (new Date()).getTime();
  tick();

})