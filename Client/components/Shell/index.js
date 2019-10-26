import React from 'react';
import PropTypes from 'prop-types';

const Shell = ({ message, ...rest }) => (
	<div className="u-height-full aligner aligner--vCenter aligner--hCenter" {...rest}>
		<h2>{message}</h2>
	</div>
);

Shell.propTypes = {
	message: PropTypes.string
};

Shell.defaultProps = {
	message: 'Shell comes here!'
};

export default Shell;
