import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../Sidebar/index';
import MainContent from '../MainContent/index';
import ModeChange from '../ModeChange/index';

class Shell extends React.Component {
	state = {};

	renderNavbar = () => <ModeChange />;

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
