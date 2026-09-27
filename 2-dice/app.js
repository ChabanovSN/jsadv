function rollDice(dice) {
  const sides = parseInt(dice.slice(1), 10);
  return Math.floor(Math.random() * sides) + 1;
}