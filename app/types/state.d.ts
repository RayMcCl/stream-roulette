declare namespace State {

	export interface IRoot {
		/** The User State for the application */
		user: IUserState;
		/** The Stream State for the application */
		streams: IStreamsState;
		activeStream: number;
	}

	export interface IUserState extends IUser {}
	export type IStreamsState = IStream[];
}