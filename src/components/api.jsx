import axios from 'axios'; 

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'live_OQICSomikv7nvMqVXeWxUMlRMEjpEP7kxnUwTl6MjkJcBRrVbh6leXqoTn7jnn1J';

export const fetchBreeds = async () => {
    const response = await axios.get('/breeds');
    return response.data;
    };

    export const fetchCatByBreed = async breedId => {
        // console.log(breedId)
        const response = await axios.get('/images/search', {params: { breed_id: breedId, },
    });
    console.log(response)
    return response.date[0];
    }