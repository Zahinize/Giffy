import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/index';

class Shell extends React.Component {
	state = {};

	render() {
		return <Sidebar leftChildren={<div>Left child</div>} rightChildren={<h2>Main content comes here</h2>} />;
	}
}

Shell.propTypes = {
	message: PropTypes.string
};

Shell.defaultProps = {};

export default Shell;
