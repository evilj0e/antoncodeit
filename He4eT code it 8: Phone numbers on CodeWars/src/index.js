const addNumber = (tree, path) => {
  let ref = tree
  /* eslint-disable-next-line no-return-assign */
  ;[...path].forEach(key =>
    ref = ref[key] = ref[key] || {})

  return tree
}

const createTree = numbers =>
  numbers.reduce(addNumber, {})

const countNodes = tree => {
  const branches = Object.values(tree)
  const innerNodes =
    branches.reduce((a, x) =>
      a + countNodes(x), 0)
  return branches.length + innerNodes
}

const phoneNumber = numbers =>
  countNodes(createTree(numbers))

module.exports = {
  addNumber,
  createTree,
  countNodes,
  phoneNumber
}
