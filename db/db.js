export const people = [
  {
    id: 1,
    name: "Eavan",
    age: 20,
    gender: "male",
  },
  {
    id: 2,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 3,
    name: "Jisu",
    age: 18,
    gender: "female",
  },
  {
    id: 4,
    name: "Japan Guy",
    age: 18,
    gender: "male",
  },
  {
    id: 5,
    name: "Daal",
    age: 18,
    gender: "male",
  },
  {
    id: 6,
    name: "JD",
    age: 18,
    gender: "male",
  },
  {
    id: 7,
    name: "moondaddi",
    age: 18,
    gender: "male",
  },
  {
    id: 8,
    name: "flynn",
    age: 18,
    gender: "male",
  },
];

export const getById = (id) => people.filter((person) => person.id === id)[0];
