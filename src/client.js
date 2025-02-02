const axios = require('axios');

const API_BASE_URL = process.env.API_URL || "http://localhost";

async function getUser(id) {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data
  } catch (error) {
    return { error: "User not found" };
  }
}

module.exports = { getUser };