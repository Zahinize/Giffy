import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../Sidebar/index';
import MainContent from '../MainContent/index';

class Shell extends React.Component {
	state = {};

	renderNavbar = () => <FontAwesomeIcon icon="moon" size="2x" className="" />;

	renderMainContent = () => {
		return <MainContent />;
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
