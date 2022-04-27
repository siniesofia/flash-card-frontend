import axios from 'axios'
const baseUrl = '/api/register'
// const baseUrl = 'http://localhost:3001/api/users'

const register = async (username, password) => {
  const object = { username, password }
  const response = await axios.post(baseUrl, object)
  return response.data
}


export default { register }

// asdf


