import React from 'react';
import { Route } from 'react-router-dom';

import ShopSection from '../../components/ShopSection/ShopSection.component';
import ShopSectionsOverview from '../../components/ShopSectionsOverview/ShopSectionsOverview.component';
import { HEROES, VILLAINS } from '../../constants/heroes';
import { categories } from '../../constants/constants';
import Container from 'react-bootstrap/Container'; 


const Shop = ({ match }) => {
	return (
		<div>
			<Route exact path={match.path} component={ShopSectionsOverview} />
			<Route path={`${match.path}/:sectionId`} render={(props) => <ShopSection title={match.path} />}/>
		</div>
	);
};

export default Shop;