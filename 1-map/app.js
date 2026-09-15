const arr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

// 1. Уникальные id через Set
const ids = new Set(arr.map(o => o.id));

// 2. Восстанавливаем объекты, находя первый подходящий по id
const set = new Set([...ids].map(id => arr.find(o => o.id === id)));

console.log(set);