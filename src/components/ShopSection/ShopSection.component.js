import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap'; 
import MyCard from '../MyCard/MyCard.component';
import { setHeroes } from '../../redux/heroes/heroes.actions';

class ShopSection extends React.Component {

	componentDidMount() {
		this.props.setHeroes();
	};

	render() {
		const { title, heroes } = this.props;
		return (
			<div>
				<h1>{title}</h1>
				<Row>
					{
						heroes.map(hero => (
							<Col lg key={hero._id} >
								<MyCard id={hero._id} imgUrl={hero.image} name={hero.name} powerstats={hero.powerstats} salary={hero.salary} />
							</Col>
						))
					}
				</Row>
			</div>
		);
	};
};

const mapStateToProps = ({heroes}) => ({
	heroes: heroes.heroes
});

export default connect(mapStateToProps, {setHeroes})(ShopSection);