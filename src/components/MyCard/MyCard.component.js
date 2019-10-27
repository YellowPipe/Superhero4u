import React from 'react';

import './MyCard.styles.css';

import Card from 'react-bootstrap/Card';
import PowerBar from '../PowerBar/PowerBar.component';

class MyCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			overlayHidden: true
		};
	};

	handleHover = () => {
		this.setState(this.toggleHidden());
	};

	toggleHidden = () => {
		return { overlayHidden: !this.state.overlayHidden }
	};

	render() {
		const { imgUrl, name, powerstats } = this.props;
		return (
			<Card className="bg-dark text-white my-1 myCard" 
				onMouseEnter={this.handleHover}
          		onMouseLeave={this.handleHover} >
				<Card.Img src={imgUrl} alt="Card image" className={ this.state.overlayHidden ? null : "saturate" }/>
				<Card.ImgOverlay 
					className={ this.state.overlayHidden ? "d-none" : null }
          		>
					<h1 className="text-center">{name}</h1>
					<Card.Text className="mt-5">
						<PowerBar powerstats={powerstats} />
					</Card.Text>
				</Card.ImgOverlay>
			</Card>
		)
	}
};

export default MyCard;