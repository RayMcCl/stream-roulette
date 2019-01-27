export const actionCreator = <T extends any>(type: string) => (payload: T) => {
	return {
		type,
		payload
	};
}