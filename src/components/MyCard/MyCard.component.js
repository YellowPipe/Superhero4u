import React from 'react';

import { connect } from 'react-redux';

import './MyCard.styles.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PowerBar from '../PowerBar/PowerBar.component';
import Col from 'react-bootstrap/Col';

import { addItem } from '../../redux/cart/cart.actions';

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

	handleClick = () => {
		const { name, salary, id } = this.props
		this.props.addItem({name, salary, id});
	};

	render() {
		const { imgUrl, name, powerstats, salary } = this.props;
		return (
			<Col sm >
				<Card style={{ width: '20rem', height: '26rem' }} className="mx-auto bg-dark text-white my-3 myCard text-center" 
					onMouseEnter={this.handleHover}
	          		onMouseLeave={this.handleHover} >
					<Card.Img src={imgUrl} alt="Card image" className={ this.state.overlayHidden ? null : "saturate" }/>
					<Card.ImgOverlay 
						className={ this.state.overlayHidden ? "d-none" : null }
	          		>
						<h1>{name}</h1>
						<Card.Text className="my-1">
							<PowerBar powerstats={powerstats} />
						</Card.Text>
						<Card.Text>
							${salary} per year
						</Card.Text>
						<Button onClick={this.handleClick} className='px-5' size="lg" variant="info">Hire</Button>
					</Card.ImgOverlay>
				</Card>
			</Col>
		)
	}
};

export default connect(null, { addItem })(MyCard);