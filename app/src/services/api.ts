import {
	deleteRequestGenerator,
	getRequestGenerator,
	postRequestGenerator,
	patchRequestGenerator,
	putRequestGenerator
} from 'STRUCTS/RestRequests';

// TODO: Simple service for all API requests and their responses

// A simple example of a getUser endpoint with references to it's request and response structure
export const getUser = getRequestGenerator<API.IGetUserRequest, API.IGetUserResponse>('www.api.com/getUser');