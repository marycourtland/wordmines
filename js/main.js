window.game = window.game || {};

$(document).ready(function() {
  function init() {
    game.container = $("#game");
    game.keyboard.init();
    game.player.createAt(xy(getGameSize().x/2, getGameSize().y/2));
  
    game.wordmines = game.words.map(function(wordlist) {
      return (new game.Wordmine(wordlist)).createAt(randXY(xy(0, 0), getGameSize()));
    })    
  }
  
  function cleanup() {
    game.player.avatar.remove();
    game.player.off('key_UP');
    game.player.off('key_DOWN');
    game.player.off('key_LEFT');
    game.player.off('key_RIGHT');
    game.wordmines.forEach(function(wordmine) {
      wordmine.avatar.remove();
    })
  }
  
  init();
  
  game.container.on('death', function() {
    $(".wordmine").fadeOut(2000);
    $("#game-message").css('top', getGameSize().x/2).css('left', getGameSize().y/2).fadeIn(2000);
  })
  
  $("#game-message a").on("click", function() {
    cleanup();
    init();
    $("#game-message).hide();
  })
})
