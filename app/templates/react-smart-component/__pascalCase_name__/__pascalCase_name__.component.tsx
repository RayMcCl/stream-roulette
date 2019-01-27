/* --- Resources --- */
import './{{pascalCase name}}.style.scss';

/** Modules */
import * as React from 'react';
import { Props, State } from './{{pascalCase name}}.types';
import view from './{{pascalCase name}}.view';

/** [ClassDescription] */
class {{pascalCase name}} extends React.Component<Props, State> {
	render = view;
}

export default {{pascalCase name}};