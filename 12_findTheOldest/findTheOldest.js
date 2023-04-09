const findTheOldest = function (people) {
    let now = new Date()
    return people.reduce((person1, person2) => {
        let person1Age = 0
        let person2Age = 0
        if (person1.yearOfDeath !== undefined){
            person1Age = person1.yearOfDeath - person1.yearOfBirth
        } else {
            person1Age = now.getFullYear() - person1.yearOfBirth
        }
        if (person2.yearOfDeath !== undefined){
            person2Age = person2.yearOfDeath - person2.yearOfBirth
        } else {
            person2Age = now.getFullYear() - person2.yearOfBirth
        }
        if(person1Age > person2Age){
            return person1
        } else {
            return person2
        }
    })
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    }
  ]
  console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
