const findTheOldest = function(arrayObjects) {
  return  arrayObjects.reduce((acc, curr) => {
       let currentYear = (new Date).getFullYear();
       let oldestYear = acc.yearOfDeath ?? currentYear;
       let curYear = curr.yearOfDeath ?? currentYear;
       const OldestAge = oldestYear - acc.yearOfBirth;
       const curAge  = curYear - curr.yearOfBirth;
       return OldestAge > curAge ? acc : curr })
        
};
let array = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
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
      },
    ];
findTheOldest(array);
// Do not edit below this line
module.exports = findTheOldest;
