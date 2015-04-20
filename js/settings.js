window.game = window.game || {};

window.game.settings = {
  player_speed: 20,

  max_wordmine_size: 120,
  min_wordmine_distance: 5,


  // maps length of word sequence to font sizes (in px)
  wordmine_sizes: {
    1: [10],
    2: [10, 120],
    3: [10, 48, 120],
    4: [10, 24, 72, 120],
    5: [10, 24, 48, 72, 120],
  },

  // maps length of word sequence to distance which the player 
  wordmine_distances: {
    1: [80],
    2: [80, 10],
    3: [80, 20, 10],
    4: [80, 50, 20, 10],
    5: [80, 50, 30, 20, 10]
  },


}


