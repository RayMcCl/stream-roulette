# Front-End Boilerplate

The front-end application.

## Glossary

- [Getting Started](#Getting-Started)
- [Commands](#Commands)
- [Aliasing](#Aliasing)
- [Patterns](#Patterns)
- [Technical Stack](#Techincal-Stack)
- [Contributors](#Contributors)

## Getting Started

## Commands

## Aliasing

This project uses aliasing to resolve file locations. A complete reference of usable alias can be found below as well as an example of their use. Please note that all alias should be written in CAPS.

- COMPONENTS: [src/components](./src/components)
- HELPERS: [src/helpers](./src/helpers)
- REDUCERS: [src/store/reducers](./src/store/reducers)
- RESOURCES: [src/resources](./src/resources)
- ROUTES: [src/routes](./src/routes)
- SERVICES: [src/services](./src/services)
- STRUCTS: [src/structs](./src/structs)
- STORE: [src/store](./src/store)

```javascript
// Resolves to "./src/store/reducers/user/reducer"
import { setUser } from 'REDUCERS/user/reducer';
```

To add an alias to the project you will need to add the alias to both the [tsconfig.json](./tsconfig.json) and [webpack.config.js](./webpack.config.js) files.

## Patterns

Below is a list of common design patterns utilized within the application including a brief explanation of their purpose.

### Components

A component is a simple React structure which is commonly used throughout the application. Examples of this include the application Header or Footer.

### Routes

### Store

The data rendered within the application is primarily controlled via a central Redux store. 

#### Actions

#### Reducer

#### Events

The Redux store is mutated through Redux Events, a custom structure which allows for a tight coupling between a traditional Redux Action and 

#### Handlers

### Services

Services define actions which handle communication with any external dependency such as an API. These services are traditionally used in conjunction with a Redux Event which requires third-party data to modify state.

External requests methods are generated through REST request function generators found within the [RestRequests.tsx](./src/structs/RestRequests.tsx) file. These creators will generate a simple function that can be used to execute the desired request.

### Themes

### Types

#### Namespaces

Some standard namespaces are defined to break apart App specific interfaces. These are as below.

- [API](./src/types/api.d.ts)
- [State](./src/types/state.d.ts)

#### Interfaces

Interfaces should be preceeded by an "I" character to denote they are an interface. See below for example.

```typescript
interface IUser {
	firstName: string;
	lastName: string;
}
```

## Technical Stack

### Framework
* React
* Redux
* Reactstrap/Bootstrap
* React-Router

### Development
* TypeScript
* Jest
* Storybook
* Webpack
* ESLint

## Contributors
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
[<img src="https://avatars.githubusercontent.com/u/12222958" width="100px;"/><br /><sub><b>Josh Nicholson</b></sub>](https://github.com/joshua-nicholson)<br />
[<img src="https://avatars.githubusercontent.com/u/12534799" width="100px;"/><br /><sub><b>Ray McClain</b></sub>](https://github.com/ReiMcCl)<br />
<!-- ALL-CONTRIBUTORS-LIST:END -->
