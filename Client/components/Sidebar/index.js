import React from 'react';
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
	state = {};

	render() {
		const {
			rootClassName,
			leftChildren,
			rightChildren,
			leftChildrenClassName,
			rightChildrenClassName
		} = this.props;
		const computedRootClassName = `layout-sidebar aligner u-height-full ${rootClassName}`;
		const computedLeftChildrenClassName = `layout-sidebar-navigation aligner-item aligner aligner--vCenter aligner--hCenter ${leftChildrenClassName}`;
		const computedRightChildrenClassName = `layout-sidebar-content aligner-item ${rightChildrenClassName}`;

		return (
			<div className={computedRootClassName}>
				<nav className={computedLeftChildrenClassName}>{leftChildren}</nav>
				<div className={computedRightChildrenClassName}>{rightChildren}</div>
			</div>
		);
	}
}

Sidebar.propTypes = {
	leftChildren: PropTypes.element.isRequired,
	rightChildren: PropTypes.element.isRequired,
	rootClassName: PropTypes.string,
	leftChildrenClassName: PropTypes.string,
	rightChildrenClassName: PropTypes.string
};

Sidebar.defaultProps = {
	rootClassName: '',
	leftChildrenClassName: '',
	rightChildrenClassName: ''
};

export default Sidebar;
