// Solution by Vadim Moshev special for Anton Code It channel
function sum(...args) {
  return ((args[1] !== undefined)
    ? args[0] + args[1]
    : x => args[0] + x
  )
}
