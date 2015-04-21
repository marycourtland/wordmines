game = game || {};

game.Wordmine = function(words) {
  this.words = words;
  this.stage = 0;
  this.avatar = null;
  this.pos = null;
  this.fontsize = xy(0,0);
  this.fontsizes = game.settings.wordmine_sizes[words.length]; // override if needed
  this.distances = game.settings.wordmine_distances[words.length] // override if needed
}

game.Wordmine.prototype.createAt = function(pos) {
  this.avatar = $("<div>").attr("class", "wordmine").appendTo(game.container);
  this.pos = pos;
  this.size = xy(0,0);
  this.moveTo(pos);
  this.redraw();
  this.initEvents();
  return this;
}

game.Wordmine.prototype.initEvents = function() {
  // uh nothing here yet I guess
}

game.Wordmine.prototype.move = function(dpos) {
  this.moveTo(xy(this.pos.x + dpos.x, this.pos.y + dpos.y));
}

game.Wordmine.prototype.moveTo = function(pos) {
  this.pos = pos;
  this.redraw();
}

game.Wordmine.prototype.redraw = function() {
  this.avatar.css('font-size', this.getSize()).text(this.getWord());
  this.recalculateSize();
  this.avatar.css("left", this.pos.x - this.size.x/2).css("top", this.pos.y - this.size.y/2);
}

game.Wordmine.prototype.recalculateSize = function() {
  this.size.x = parseInt(this.avatar.css('width'));
  this.size.y = parseInt(this.avatar.css('height'));  
}

game.Wordmine.prototype.nextStage = function() {
  if (this.stage > this.words.length || this.distanceFromPlayer() > this.getNextDistance()) { return; }
  this.stage += 1;
  this.redraw();
  this.checkGameEvents();

  var _this = this;
  window.setTimeout(function() {
    _this.nextStage();
  }, 1000);
}

game.Wordmine.prototype.checkGameEvents = function() {
  for (var event in game.events) {
    if (this.getWord().match(game.events[event])) { game.container.trigger(event); }
  }
}

// ------------

game.Wordmine.prototype.getWord = function() {
  if (this.stage >= this.words.length) { return this.words[this.words.length - 1]; }
  return this.words[this.stage];
}

game.Wordmine.prototype.getSize = function() {
  if (this.stage >= this.fontsizes.length) { return game.settings.max_wordmine_size; }
  return this.fontsizes[this.stage];
}

game.Wordmine.prototype.getNextDistance = function() {
  if (this.stage >= this.distances.length) { return game.settings.min_wordmine_distance; }
  return this.distances[this.stage];
}

game.Wordmine.prototype.getBbox = function() {
  return {
    x1: this.pos.x,
    y1: this.pos.y,
    x2: this.pos.x + this.size.x,
    y2: this.pos.y + this.size.y
  }
}

game.Wordmine.prototype.distanceFromPlayer = function() {
  // distance from word's bbox
  var bbox = this.getBbox(), px = game.player.pos.x, py = game.player.pos.y;

  var xstate = (px < bbox.x1) ? -1 : px > bbox.x2 ? 1: 0;
  var ystate = (py < bbox.y1) ? -1 : py > bbox.y2 ? 1: 0;

  if (!xstate && !ystate) { return 0; } // inside bbox
  if (!xstate) { return (ystate === -1) ? bbox.y1 - py : py - bbox.y2; } // strictly north or south of bbox
  if (!ystate) { return (xstate === -1) ? bbox.x1 - px : px - bbox.x2; } // strictly east or west of bbox

  if (xstate === -1 && ystate === -1) { return distance(game.player.pos, xy(bbox.x1, bbox.y1)); } // northwest of bbox
  if (xstate === 1 && ystate === -1) {  return distance(game.player.pos, xy(bbox.x2, bbox.y1)); } // northeast of bbox
  if (xstate === -1 && ystate === 1) {  return distance(game.player.pos, xy(bbox.x1, bbox.y2)); } // southwest of bbox
  if (xstate === 1 && ystate === 1) {   return distance(game.player.pos, xy(bbox.x2, bbox.y2)); } // southeast of bbox
}
