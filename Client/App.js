import React from 'react';
import { hot } from 'react-hot-loader/root';
import ErrorBoundary from './components/ErrorBoundary';
import Shell from './components/Shell/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(faMoon, faSun);

const App = () => (
	<ErrorBoundary>
		<Shell />
	</ErrorBoundary>
);

export default hot(App);
