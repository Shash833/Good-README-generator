const axios = require("axios");


async function api(user) {
  //URL for GitHub API, retrieve user specific data from provided username
  const URL = `https://api.github.com/users/${user}`;
  //Use axios for API call to retrieve user image and email
  const response = await axios.get(URL)
  const email = response.data.email;
  const image = response.data.avatar_url
  return { email, image };
}

module.exports = api;
