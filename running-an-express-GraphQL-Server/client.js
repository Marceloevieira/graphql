const { default: axios } = require("axios");



async function client()  {


  var response = await axios.post('http://localhost:4000/graphql',JSON.stringify({query: "{ hello }"}),{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    } 
  });

  console.log(response.data);

var dice  = 3;
var sides = 6;
var query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;

 response = await axios.post('http://localhost:4000/graphql',
JSON.stringify({
  query,
  variables: { dice, sides },
}),
{
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  } 
});
  
console.log(response.data);
}



client();

