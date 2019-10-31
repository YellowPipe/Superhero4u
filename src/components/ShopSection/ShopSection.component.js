import React from 'react';
import { Row, Col } from 'react-bootstrap'; 
import MyCard from '../MyCard/MyCard.component';

const ShopSection = ({title, heroes}) => (
	<div>
		<h1>{title}</h1>
		<Row>
			{
				heroes.map(hero => (
					<Col>
						<MyCard key={hero.id} id={hero.id} imgUrl={hero.image.url} name={hero.name} powerstats={hero.powerstats} salary={hero.salary} />
					</Col>
				))
			}
		</Row>
	</div>
);

export default ShopSection;