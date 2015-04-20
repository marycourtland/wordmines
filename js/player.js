window.game = window.game || {};

game.player = {
  avatar: null,
  pos: null,
  size: null,
  dir: null,

  createAt: function(pos) {
    this.avatar = $("<div>").attr("id", "player").appendTo(game.container);
    this.size = xy(parseInt(this.avatar.css('width')), parseInt(this.avatar.css('height')));
    this.moveTo(pos);
    this.dir = xy(0, 0);
    this.setTransitions(0.05);
    this.redraw();

    game.container.on('keydown_UP', function() { game.player.move(xy(0, -game.settings.player_speed)); });
    game.container.on('keydown_DOWN', function() { game.player.move(xy(0, game.settings.player_speed)); });
    game.container.on('keydown_LEFT', function() { game.player.move(xy(-game.settings.player_speed, 0)); });
    game.container.on('keydown_RIGHT', function() { game.player.move(xy(game.settings.player_speed, 0)); });

    return this;
  },

  setDirection: function(dir) {

  },

  move: function(dpos) {
    this.moveTo(xy(this.pos.x + dpos.x, this.pos.y + dpos.y));
    game.wordmines.map(function(wordmine) { wordmine.triggerNextStage(); })
  },

  moveTo: function(pos) {
    this.pos = pos;
    var teleport = false;
    // if (this.pos.x > getGameSize().x) { this.pos.x = 0; teleport = true; }
    // if (this.pos.y > getGameSize().y) { this.pos.y = 0; teleport = true; }
    // if (this.pos.x < 0) { this.pos.x = getGameSize().x; teleport = true; }
    // if (this.pos.y < 0) { this.pos.y = getGameSize().y; teleport = true; }
    this.redraw(teleport);
  },

  redraw: function(teleport) {
    if (this.teleport) { this.setTransitions(0); }
    this.avatar.css("left", this.pos.x - this.size.x/2).css("top", this.pos.y - this.size.y/2);
    if (this.teleport) { this.setTransitions(0.05); }
  },

  setTransitions: function(time) {
    var transition = 'top ' + time.toString() + 's linear, left ' + time.toString() + 's linear';
    this.avatar.css('-webkit-transition', transition).css('transition', transition);
  }



}
