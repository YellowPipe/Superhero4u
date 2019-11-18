import React from 'react';
import { connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap'; 
import MyCard from '../MyCard/MyCard.component';
import { setHeroes } from '../../redux/heroes/heroes.actions';
import CardRow from '../CardRow/CardRow.component';

class ShopSection extends React.Component {

	componentDidMount() {
		this.props.setHeroes();
	};

	render() {
		console.log(this.props)
		const { title, heroes } = this.props;
		return (
			<CardRow category={title} heroes={heroes} />
		);
	};
};

const mapStateToProps = ({heroes}) => ({
	heroes: heroes.heroes
});

export default connect(mapStateToProps, {setHeroes})(ShopSection);