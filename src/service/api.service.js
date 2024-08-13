import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50'
      },
      headers: {
        'x-rapidapi-key': '7d5b4c3013mshf5c55c083f20180p1cf739jsn2a06ffdf63e8',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
      }
};


export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
     },
}