import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org',
    params: {
        'api_key': 'f0f305ea07f4ae342478fc3fb42cc072',
        'language': 'pt-BR',
    }
});

export default api;