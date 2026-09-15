const set = new Set(
  arr.filter((o, i, a) => a.findIndex(x => x.id === o.id) === i)
);