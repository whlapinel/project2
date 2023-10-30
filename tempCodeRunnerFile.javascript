"use strict";

const testObjectsArray = [
  {
    1: "one",
    2: "two",
    3: "three"
  },
  {
    1: "Allen",
    2: "Brutus",
    3: "Cedric"
  }
];

const searchKey = "ric";

const filteredArray = filterArray();

function filterArray() {
return testObjectsArray.filter(searchObjectForKey);
}

function searchObjectForKey(object) {
    for (const element of Object.values(object)) {
        console.log(element);
        if (element.includes(searchKey)) {
            return true;
        }
    }
    return false;
}

console.log(filteredArray);

