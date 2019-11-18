import React from 'react';
import { Route } from 'react-router-dom';

import ShopSection from '../../components/ShopSection/ShopSection.component';
import ShopSectionsOverview from '../../components/ShopSectionsOverview/ShopSectionsOverview.component';


const Shop = ({ match }) => {
	return (
		<div>
			<Route exact path={match.path} component={ShopSectionsOverview} />
			<Route path={`${match.path}/:category`} component={ShopSection} />
		</div>
	);
};

export default Shop;