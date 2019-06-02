// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
  "name": "Melissa",
  "photo": "link",
  "scores": [
    5,
    1,
    4,
    4,
    5,
    1,
    2,
    5,
    4,
    1
  ]
},
{
  "name": "Johnathon",
  "photo": "link",
  "scores": [
    4,
    1,
    2,
    3,
    5,
    1,
    3,
    4,
    1,
    3
  ]
},
{
  "name": "Samantha",
  "photo": "link",
  "scores": [
    2,
    3,
    5,
    3,
    2,
    2,
    3,
    4,
    5,
    2
  ]
}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;