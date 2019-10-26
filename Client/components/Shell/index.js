import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../Sidebar/index';

class Shell extends React.Component {
	state = {};

	renderNavbar = () => <FontAwesomeIcon icon="moon" size="2x" className="" />;

	renderMainContent = () => {
		return <h2>Main content comes here</h2>;
	};

	render() {
		const navBar = this.renderNavbar();
		const mainContent = this.renderMainContent();

		return <Sidebar leftChildren={navBar} rightChildren={mainContent} />;
	}
}

Shell.propTypes = {};

Shell.defaultProps = {};

export default Shell;
