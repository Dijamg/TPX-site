import axios from 'axios'
const baseUrl = 'https://tpxjson.herokuapp.com/members'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
      return response.data
    })
  }

export default { getAll }