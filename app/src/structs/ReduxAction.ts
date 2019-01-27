// export interface IReduxAction<Arg, Payload> {
// 	(arg: Arg) => Promise<{
// 		type: string,
// 		payload: Payload
// 	};
// }

// export class ReduxAction<Arg, Payload> {
// 	constructor (type: string, action?: IReduxAction) {

// 		// Promise<{
// 		// 	type: string,
// 		// 	payload: Payload
// 		// }>

// 		if (action) {
// 			return action;
// 		}

// 		const basicAction = (arg: Arg): Promise<{
// 			type: string,
// 			payload: Arg
// 		}> => {
// 			return new Promise(function (resolve, reject) {
// 				resolve({
// 					type: type,
// 					payload: arg
// 				});
// 			});
// 		};
// 	}
// }