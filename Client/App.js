import React from 'react';
import { hot } from 'react-hot-loader/root';
import ErrorBoundary from './Components/ErrorBoundary';
import Shell from './components/Shell/index';

const App = () => (
	<ErrorBoundary>
		<Shell />
	</ErrorBoundary>
);

export default hot(App);
