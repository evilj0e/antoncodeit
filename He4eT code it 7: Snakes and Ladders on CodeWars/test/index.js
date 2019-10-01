import test from 'ava'

import SnakesLadders from '..'

test('Default game', t => {
  const game = SnakesLadders()

  t.is(game.play(1, 1), 'Player 1 is on square 38')
  t.is(game.play(1, 5), 'Player 1 is on square 44')
  t.is(game.play(6, 2), 'Player 2 is on square 31')
  t.is(game.play(1, 1), 'Player 1 is on square 25')
})

test('Beyond the finish', t => {
  const game = SnakesLadders()
  t.is(game.play(7, 0), 'Player 1 is on square 14')
  t.is(game.play(0, 1), 'Player 2 is on square 1')
  t.is(game.play(1, 0), 'Player 1 is on square 26')
  t.is(game.play(0, 1), 'Player 2 is on square 38')
  t.is(game.play(2, 0), 'Player 1 is on square 84')
  t.is(game.play(0, 1), 'Player 2 is on square 39')
  t.is(game.play(3, 0), 'Player 1 is on square 94')
  t.is(game.play(0, 1), 'Player 2 is on square 40')
  t.is(game.play(6, 0), 'Player 1 Wins!')
  t.is(game.play(0, 1), 'Game over!')
  t.is(game.play(0, 1), 'Game over!')
})
