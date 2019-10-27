import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { HEROES, VILLAINS } from '../../constants/heroes';

import MyCard from '../../components/MyCard/MyCard.component';

const Homepage = () => (
	<Container className='my-3'>
		<h3>Popular Superheroes</h3>
		<Row>
			{
				[1,2,3].map((i) => (
					<Col lg ><MyCard key={HEROES[i].id} name={HEROES[i].name} imgUrl={HEROES[i].image.url} powerstats={HEROES[i].powerstats}/></Col>
				))
			}
		</Row>
		<h3 className='mt-3'>Popular Villains</h3>
		<Row>
			{
				[1,2,3].map((i) => (
					<Col lg ><MyCard key={VILLAINS[i].id} name={VILLAINS[i].name} imgUrl={VILLAINS[i].image.url} powerstats={VILLAINS[i].powerstats}/></Col>
				))
			}
		</Row>
	</Container>
);

export default Homepage;