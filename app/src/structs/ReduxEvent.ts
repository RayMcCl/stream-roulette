// import { ReduxAction } from './ReduxAction';

// // TODO: Still need to finish the logic abstraction for Redux events (a custom structure built for typescript)

// /** Abstraction of a traditional Redux Action Creator and Action Handler logic */

// export class ReduxEvent<Arg, Payload> {
// 	type: string;
// 	action: (payload: Arg) => Promise<{
// 		type: string,
// 		payload: Payload
// 	}>;

// 	constructor (args: {
// 		type: string,
// 		action: ReduxAction<Arg, Payload>
// 	}) {
// 		if (args.action) {
// 			this.action = args.action;
// 		} else {

// 		}
// 	}

// 	handler () {

// 	}
// }