// TODO: Define API types

declare namespace API {

	interface IBaseRequest {

	}

	/** A request which requires an authentication token to resolve */
	interface IAuthRequest extends IBaseRequest {
		token: string;
	}

	interface IGetUserRequest extends IAuthRequest {

	}

	interface IGetUserResponse {
		firstName: string;
		lastName: string;
		username: string;
	}
}