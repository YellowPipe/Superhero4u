import React from 'react';
import ShopSection from '../../components/ShopSection/ShopSection.component';
import { HEROES, VILLAINS } from '../../constants/heroes';
import { categories } from '../../constants/constants';
import Container from 'react-bootstrap/Container'; 


const Shop = () => {
	return (
		<Container>
		{
			categories.map((category, i) => (
				<ShopSection key={i} title={category} heroes={[HEROES[1], HEROES[2], HEROES[3], VILLAINS[1]]} />
			))
		}
		</Container>
	);
};

export default Shop;