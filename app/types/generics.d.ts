declare interface Window {
	/** A reference to the Twitch Embeded library methods */
	Twitch: any;
}

declare interface IStream {
	/** The stream identifier */
	id: number;
	/** The name of the stream */
	name: string;
	/** The type of the stream */
	type: string;
	/** The renderable stream data */
	streamData: any;
	/** List of all associated screenshots for the stream by URL */
	screenshots: Array<IScreenshot>;
	/** The community rating for the stream */
	rating: number;
	/** List of tags associated with the stream */
	tags: Array<number>;
}

declare interface IScreenshot {
	name: string;
	path: string;
	width: number;
	height: number;
}

declare interface IUser {
	/** The identifier for the user */
	id: number;
	/** The first name of the user */
	firstName: string;
	/** The last name of the user */
	lastName: string;
}