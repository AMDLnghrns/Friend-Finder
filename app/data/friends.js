// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [{
    "name": "Melissa",
    "photo": "link",
    "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    "name": "Johnathon",
    "photo": "link",
    "scores": [4, 1, 2, 3, 5, 1, 3, 4, 1, 3]
  },
  {
    "name": "Sam",
    "photo": "link",
    "scores": [2, 3, 5, 3, 2, 2, 3, 4, 5, 2]
  }, {
    "name": "Jennifer",
    "photo": "link",
    "scores": [2, 3, 5, 3, 2, 2, 3, 4, 5, 2]
  },
  {
    "name": "Bernie",
    "photo": "link",
    "scores": [5, 3, 2, 4, 1, 3, 4, 5, 2, 3]
  },
  {
    "name": "Mike",
    "photo": "link",
    "scores": [3, 1, 4, 5, 3, 3, 2, 2, 3, 4]
  },
  {
    "name": "Mark",
    "photo": "link",
    "scores": [1, 2, 4, 4, 3, 3, 5, 2, 5, 2]
  },
  {
    "name": "Benedict",
    "photo": "link",
    "scores": [5, 4, 4, 5, 1, 1, 1, 4, 5, 3]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;