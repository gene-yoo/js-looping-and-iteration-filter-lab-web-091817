// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter(function (n) { return n.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch (drivers, string) {
  return drivers.filter(function (n) { return n.toLowerCase().startsWith(string.toLowerCase()) })
}

function matchName (drivers, string) {
  return drivers.filter(function (n) { return n.name === string })
}
