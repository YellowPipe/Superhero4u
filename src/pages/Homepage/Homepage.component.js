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
					<Col lg key={HEROES[i].id}><MyCard id={HEROES[i].id}  name={HEROES[i].name} salary={HEROES[i].salary} imgUrl={HEROES[i].image.url} powerstats={HEROES[i].powerstats}/></Col>
				))
			}
		</Row>
		<h3 className='mt-3'>Popular Villains</h3>
		<Row>
			{
				[1,2,3].map((i) => (
					<Col lg key={VILLAINS[i].id}><MyCard id={VILLAINS[i].id} name={VILLAINS[i].name} salary={VILLAINS[i].salary} imgUrl={VILLAINS[i].image.url} powerstats={VILLAINS[i].powerstats}/></Col>
				))
			}
		</Row>
	</Container>
);

export default Homepage;