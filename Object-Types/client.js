const { default: axios } = require("axios");



async function client()  {

  var query = `{
    getDie(numSides: 6) {
      rollOnce
      roll(numRolls: 3)
    }
  }`;

  var response = await axios.post('http://localhost:4000/graphql',
  JSON.stringify({
    query
  })
  ,{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    } 
  });

  
  console.log(response.data);


}

client();