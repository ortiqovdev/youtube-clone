import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50'
      },
      headers: {
        'x-rapidapi-key': '0b41b674eamsh8b94dc0fd8436ccp1767c4jsne2548df85a3f',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
      }
};


export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
     },
}