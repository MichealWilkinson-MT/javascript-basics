const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
  }
  return person
};

const getName = object => {
  return object.name
};

const getProperty = (property, object) => {
  if(property == "name"){
    return object.name
  } else if (property == "age"){
    return object.age
  }
};

const hasProperty = (property, object) => {
  return object[property] !== undefined;
};

const isOver65 = person => {
  if (person.age > 65){
    return true
  } else {
    return false
  }
};

const getAges = people => {
  let output = []
  for (i = 0; i < people.length; i++){
    const person = people[i]
    const age = person.age
    output.push(age)
  }
  return output
};

const findByName = (name, people) => {
  for (i = 0; i < people.length; i++){
    const person = people[i]
    if (person.name == name){
      return person
    }

  }
};

const findHondas = cars => {
  let output= []
  for (i = 0; i < cars.length; i++){
    const car = cars[i]
    if (car.manufacturer == "Honda"){
      output.push(car)
    }
  
  };
  return output
};

const averageAge = people => {
  let NoPeople = 0
  let TotalAge = 0
  for (i = 0; i < people.length; i++){
    const person = people[i]
    TotalAge = TotalAge + person.age
    NoPeople = NoPeople + 1
  }
  return (TotalAge/NoPeople)
};

const createTalkingPerson = (name, age) => {
  let person = {
    introduce: (hi) => {
      return "Hi " + hi + ", my name is " + name + " and I am " + age + "!"
    },
    name: name,
    age: age
  }
  return person
};



module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
