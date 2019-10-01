/**
 * https://www.codewars.com/kata/snakes-and-ladders-1/
 */

const DICES_MAX = 2 * 6
const board = require('./src/board')
const {
  gameStep,
  bounces,
  printStepResult
} = require('./src/snakesAndLadders')

function SnakesLadders (
  playerNumber = 2,
  firstPlayer = 0,
  initialPlayerState = 0) {
  return {
    gameover: false,
    turn: firstPlayer,
    players:
      Array(playerNumber)
        .fill(initialPlayerState),
    teleportMap: {
      ...board.snakes,
      ...board.ladders,
      ...bounces(board.size, DICES_MAX)
    },
    play (die1, die2) {
      const turn = this.turn

      this.players =
        this.gameover
          ? this.players
          : this.players
            .map(gameStep({
              turn,
              dices: die1 + die2,
              teleportMap: this.teleportMap
            }))

      const finish =
        this.players.includes(board.size)

      const win =
        finish && !this.gameover

      this.gameover =
        finish

      this.turn =
        (die1 === die2
          ? turn
          : turn + 1) % playerNumber

      return printStepResult(
        win, this.gameover, turn, this.players)
    }
  }
}

module.exports = SnakesLadders
