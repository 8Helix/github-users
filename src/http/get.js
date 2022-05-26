import axios from 'axios';

const USERS_URL = process.env.REACT_APP_USERS_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

async function getUsers(page) {
  const response = await fetch(`${USERS_URL}&page=${page}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw new Error("Help me I'm so Errored");
}

async function getFollowers(url) {
  try {
    const response = await axios.get(`${url}`, {
      headers: { Authorization: `token ${TOKEN}` },
    });

    const data = {
      followers: response.data.followers,
      following: response.data.following,
    };

    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
}

async function getUserData(url) {
  try {
    const response = await axios.get(`${url}`, {
      headers: { Authorization: `token ${TOKEN}` },
    });

    return response;
  } catch (error) {
    throw new Error('Something went wrong');
  }
}

export { getUsers, getFollowers, getUserData };
