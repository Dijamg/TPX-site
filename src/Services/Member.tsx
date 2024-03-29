import axios from 'axios'
const baseUrl = 'https://tpx-json-default-rtdb.firebaseio.com/members.json'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
      return response.data
    })
  }

export default { getAll }
