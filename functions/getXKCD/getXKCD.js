const fetch = require('node-fetch');

const handler = async function () {
  const comicsArr = [];
  do {
    try {
      let id = false;
      id ? (id = `${id}/`) : (id = '');
      const url = `https://xkcd.com/${id}info.0.json`;
      const response = await fetch(url, {
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) {
        // NOT res.status >= 200 && res.status < 300
        return { statusCode: response.status, body: response.statusText };
      }
      const data = await response.json();
      comicsArr.push(data);
      id = data.num - 1;
      console.log(comicsArr);
    } catch (error) {
      // output to netlify function log
      console.log(error);
      return {
        statusCode: 500,
        // Could be a custom message or object i.e. JSON.stringify(err)
        body: JSON.stringify({ msg: error.message }),
      };
    }
  } while (comicsArr.length < 7);
  return {
    statusCode: 200,
    body: JSON.stringify(comicsArr),
  };
};

module.exports = { handler };
