import axios, { AxiosPromise } from "axios";


export const deleteRequestGenerator = <RequestParams, ResponseParams>(url: string) => (params: RequestParams): AxiosPromise<ResponseParams> => axios.delete(url, {
	params
});

export const getRequestGenerator = <RequestParams, ResponseParams>(url: string) => (params: RequestParams): AxiosPromise<ResponseParams> => axios.get(url, {
	params
});

export const patchRequestGenerator = <RequestParams, ResponseParams>(url: string) => (params: RequestParams): AxiosPromise<ResponseParams> => axios.patch(url, {
	params
});

export const postRequestGenerator = <RequestParams, ResponseParams>(url: string) => (params: RequestParams): AxiosPromise<ResponseParams> => axios.get(url, {
	params
});

export const putRequestGenerator = <RequestParams, ResponseParams>(url: string) => (params: RequestParams): AxiosPromise<ResponseParams> => axios.get(url, {
	params
});