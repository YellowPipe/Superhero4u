import React from 'react';

import './MyCard.styles.css';

import Card from 'react-bootstrap/Card';
import PowerBar from '../PowerBar/PowerBar.component';

const MyCard = ({imgUrl, name, powerstats}) => (
	<Card className="bg-dark text-white my-1">
		<Card.Img src={imgUrl} alt="Card image" />
		<Card.ImgOverlay>
			<Card.Title>{name}</Card.Title>
			<Card.Text>
			This is a wider card with supporting text below as a natural lead-in to
			additional content. This content is a little bit longer.
			</Card.Text>
			<Card.Text>
				<PowerBar powerstats={powerstats} />
			</Card.Text>
		</Card.ImgOverlay>
	</Card>
);

export default MyCard;