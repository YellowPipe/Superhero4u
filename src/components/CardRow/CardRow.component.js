import React from 'react';
import { withRouter } from 'react-router-dom';

import { API_URL } from '../../constants/constants';

import './CardRow.styles.css';

import Row from 'react-bootstrap/Row';
import MyCard from '../MyCard/MyCard.component';

class CardRow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			heroes: [],
			loading: false,
			error: null
		};
	};

	componentDidMount() {
		this.setState({loading: true});

		fetch(`${API_URL}/heroes/${this.props.category}/3`, { method: 'get' })
		.then(res => res.json())
		.then(heroes => this.setState({heroes: heroes, loading: false}))
		.catch(err => this.setState({loading: false, error: err}))
	};

	render () {
		return (
			<div>
				<h1 onClick={ () => this.props.history.push(`${this.props.match.url}/${this.props.category}`) } className="pl-3 mt-3 title">{this.props.category}</h1>
				<Row>
					{
						this.state.heroes.map((hero) => (
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
	};
};

export default withRouter(CardRow);