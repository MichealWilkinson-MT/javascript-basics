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
  if(property == "name"){
    return true
  } else if (property == "age"){
    return true
  } else {
    return false
  }
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
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
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
