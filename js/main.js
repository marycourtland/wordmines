window.game = window.game || {};

$(document).ready(function() {
  function init() {
    game.container = $("#game");
    game.keyboard.init();
    game.player.createAt(xy(50, 50));
  
    game.wordmines = game.words.map(function(wordlist) {
      return (new game.Wordmine(wordlist)).createAt(randXY(xy(0, 0), getGameSize()));
    })    
  }
  
  function cleanup() {
    game.player.avatar.remove();
    game.wordmines.forEach(function(wordmine) {
      wordmine.avatar.remove();
    })
  }
  
  init();
  
  game.container.on('death', function() {
    $(".wordmine").fadeOut(2000);
    $("#game-message").css('top', getGameSize().x).css('left', getGameSize().y).fadeIn(2000);
  })
  
  $("#game-message a").on("click", function() {
    cleanup();
    init();
  })
})
