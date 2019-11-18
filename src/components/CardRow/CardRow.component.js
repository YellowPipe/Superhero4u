import React from 'react';
import { withRouter } from 'react-router-dom';

import './CardRow.styles.css';

import Row from 'react-bootstrap/Row';
import MyCard from '../MyCard/MyCard.component';

const CardRow = ({category, heroes, history, match}) => (
	<div>
		<h1 onClick={ () => history.push(`${match.url}/${category}`) } className="pl-3 mt-3 title">{category}</h1>
		<Row>
			{
				heroes.map((hero) => (
					<MyCard key={hero._id} id={hero._id}  name={hero.name} salary={hero.salary} imgUrl={hero.image}
					powerstats={{
				        "intelligence": hero.intelligence,
				        "strength": hero.strength,
				        "speed": hero.speed,
				        "durability": hero.durability,
				        "power": hero.power,
				        "combat": hero.combat
				   	}}/>
				))
			}
		</Row>
	</div>
);

export default withRouter(CardRow);