import test from 'ava'

import {
  bounces,
  move,
  teleport
} from '../src/snakesAndLadders'

/* Bounces */
for (const [size, dices, expected] of [

  [100, 4, {
    101: 99,
    102: 98,
    103: 97,
    104: 96
  }],

  [10, 2, {
    11: 9,
    12: 8
  }]

]) {
  test(`Board: ${size}. Max dices: ${dices}`, t =>
    t.deepEqual(bounces(size, dices), expected))
}

/* Move */
for (const [position, dices, expected] of [
  [9, 1, 10],
  [1, 1, 2],
  [0, 2, 2]
]) {
  test(`Position: ${position}. Dices: ${dices}`, t =>
    t.deepEqual(move(dices)(position), expected))
}

/* Teleport */
const teleportMap = {
  1: 10,
  2: 12,
  12: 3
}
for (const [start, expected] of [
  [9, 9],
  [0, 0],
  [2, 3],
  [1, 10]
]) {
  test(`Teleport from ${start}`, t =>
    t.deepEqual(teleport(teleportMap)(start), expected))
}
