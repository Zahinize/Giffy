import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ModeChange extends React.Component {
	state = {
		toggleUIMode: false
	};

	renderDarkIcon = () => (
		<FontAwesomeIcon
			title="Switch to dark mode"
			icon="moon"
			size="2x"
			className="u-cursor-pointer"
			onClick={this.handleIconClick}
		/>
	);

	renderLightIcon = () => (
		<FontAwesomeIcon
			title="Switch to light mode"
			icon="sun"
			size="2x"
			className="u-cursor-pointer"
			onClick={this.handleIconClick}
		/>
	);

	handleIconClick = () => {
		const { toggleUIMode } = this.state;

		this.setState(
			{
				toggleUIMode: !toggleUIMode
			},
			() => this.toggleBodyModeClassName()
		);
	};

	toggleBodyModeClassName = () => {
		const { toggleUIMode } = this.state;
		const bodyEl = window.document.body;
		const modeClassName = 'mode-dark';

		if (!toggleUIMode) {
			bodyEl.classList.remove(modeClassName);
			return false;
		}

		bodyEl.classList.add(modeClassName);
	};

	renderContent() {
		const { toggleUIMode } = this.state;
		const computedComponent = toggleUIMode ? this.renderLightIcon() : this.renderDarkIcon();

		return computedComponent;
	}

	render() {
		return this.renderContent();
	}
}

ModeChange.propTypes = {};

ModeChange.defaultProps = {};

export default ModeChange;
