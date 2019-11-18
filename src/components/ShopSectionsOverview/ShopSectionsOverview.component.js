import React from 'react';
import CardRow from '../CardRow/CardRow.component';
import { categories } from '../../constants/constants';
import { HEROES } from '../../constants/heroes';

const ShopSectionsOverview = () => (
		<div>
		{
			categories.map((category, i) => (
				<CardRow key={i} category={category} heroes={[HEROES[1],HEROES[2],HEROES[3]]}/>
			))
		}
		</div>
	);

export default ShopSectionsOverview;