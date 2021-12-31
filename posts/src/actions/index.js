import {FETCH_POSTS} from './type';
import {CREATE_POST} from './type';
import axios from 'axios';
const ROOT_URL = 'http://localhost:3001/api/v1';
const API_KEY = '?key=PAPERCLIP1234';
export const fetchPosts = (action)=> {
	const request = axios.get(`${ROOT_URL}/posts`);				   
	return{
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values, callback) {
	const request = axios.post(`${ROOT_URL}/posts`, values)
	.then(() => callback());
	return{
		type: CREATE_POST,
		payload: request
	};
}

