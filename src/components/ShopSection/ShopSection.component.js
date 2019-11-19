import React from 'react';
import { connect } from 'react-redux';

import { setHeroes } from '../../redux/heroes/heroes.actions';

import Row from 'react-bootstrap/Row';
import MyCard from '../MyCard/MyCard.component';

class ShopSection extends React.Component {

	componentDidMount() {
		this.props.setHeroes(this.props.category);
	};

	render() {
		const { heroes, category } = this.props;
		return (
				<div>
					<h1 className="pl-3 mt-3">{category}</h1>
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
	};
};

const mapStateToProps = (state, ownProps) => ({
	heroes: state.heroes.heroes,
	category: ownProps.match.params.category
});

export default connect(mapStateToProps, {setHeroes})(ShopSection);