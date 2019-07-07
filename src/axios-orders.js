import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burgerbuilder-react-46abe.firebaseio.com/'
});

export default instance;