import React, { Component } from 'react';
import SearchGif from './SearchGif';
import Overlay from './Overlay';

class Content extends Component {
	state = {
		overlay: { show: false, content: null }
	};

	toggleOverlay = (content = null) =>
		this.setState(state => {
			const { overlay } = state;
			return {
				overlay: {
					show: !overlay.show,
					content
				}
			};
		});

	render() {
		const { overlay } = this.state;

		return (
			<section className="content-wrapper">
				<section className="content">
					<SearchGif toggleOverlay={this.toggleOverlay} />
				</section>
				<Overlay show={overlay.show} content={overlay.content} toggleOverlay={this.toggleOverlay} />
			</section>
		);
	}
}

export default Content;
