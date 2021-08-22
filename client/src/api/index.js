import axios from 'axios';

const url = 'htttp://localhost:7000/posts';

export const fetchPosts = () => axios.get(url);