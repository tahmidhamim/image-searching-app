import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID oA42lvjwRaTohckNlWokNG8ZnR4u9VH34vKcZodN-Ak'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;