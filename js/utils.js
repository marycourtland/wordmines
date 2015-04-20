// misc kitchen-drawer functions

function xy(x, y) { return {x:x, y:y} }

function randXY(min, max) {
  return xy(
    min.x + Math.random() * (max.x - min.x),
    min.y + Math.random() * (max.y - min.y)
  )
}

function distance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
}

function getGameSize() {
  return xy(parseInt(game.container.css('width')), parseInt(game.container.css('height')));
}