import test from 'ava'

import {
  addNumber,
  createTree,
  countNodes,
  phoneNumber
} from '../src/index'

/* eslint-disable-next-line */
const o1_12_123 = {1: {2: {3: {}}}}
/* eslint-disable-next-line */
const o1_12_123_124 = {1: {2: {3: {}, 4: {}}}}
/* eslint-disable-next-line */
const o1_11_111 = {1: {1: {1: {}}}}

test('addNumber to empty', t =>
  t.deepEqual(
    addNumber({}, [1, 2, 3]), o1_12_123))

test('addNumber to filled', t =>
  t.deepEqual(
    addNumber(o1_12_123, [1, 2, 4]), o1_12_123_124))

test('createTree', t =>
  t.deepEqual(
    createTree(['123', '124']), o1_12_123_124))

test('countNodes', t =>
  t.deepEqual(
    countNodes(o1_12_123_124), 4))

test('yet another countNodes', t =>
  t.deepEqual(
    countNodes(o1_11_111), 3))

;[
  [['0', '1'], 2],
  [['01', '02', '03'], 4],
  [['012', '0123', '01234'], 5],
  [['0123456789', '0123987654', '0123987456', '2365498756', '2365498765'], 31]
].forEach(([params, exp]) =>
  test('phoneNumber' + params, t =>
    t.deepEqual(phoneNumber(params), exp)))
