const { default: axios } = require("axios");



async function client()  {

  var author = 'andy';
  var content = 'hope is a good thing';
  var query = `mutation CreateMessage($input: MessageInput) {
    createMessage(input: $input) {
      id
    }
  }`;

  var response = await axios.post('http://localhost:4000/graphql',
  JSON.stringify({
    query,
    variables: {
      input: {
        author,
        content,
      }
    }
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