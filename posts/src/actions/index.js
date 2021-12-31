import {  FETCH_POSTS,
					CREATE_POST,
					FETCH_POST,
					DELETE_POST 
				} from './type';

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

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}`);
	return {
		type: FETCH_POST,
		payload: request
	}
}

export function deletePost(id, callback){
	const request = axios.delete(`${ROOT_URL}/posts/${id}`)
		.then(() =>callback());
	return {
		type: DELETE_POST,
		payload: id
	}
}