import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import MyCard from '../../components/MyCard/MyCard.component';

const Homepage = () => (
	<Container>
		<Row>
			<Col></Col>
			<Col><MyCard /></Col>
			<Col><MyCard /></Col>
		</Row>
		<Row>
			<Col><MyCard /></Col>
			<Col><MyCard /></Col>
			<Col><MyCard /></Col>
		</Row>
	</Container>
);

export default Homepage;