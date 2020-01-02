function findMatching (drivers, name) {
  return drivers.filter(function (driverName) { return driverName.toLowerCase() === name.toLowerCase() });
}

function fuzzyMatch (drivers, letters) {
  let lengthOfLetters = letters.length;
  return drivers.filter(function (driverLetters) { return driverLetters.slice(0, lengthOfLetters) === letters });
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) { return driver.name === name })
}

