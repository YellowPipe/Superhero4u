import React from 'react';
import { connect } from 'react-redux';

import { setHeroes } from '../../redux/heroes/heroes.actions';
import CardRow from '../CardRow/CardRow.component';

class ShopSection extends React.Component {

	componentDidMount() {
		this.props.setHeroes(this.props.category);
	};

	render() {
		const { heroes, category } = this.props;
		return (
			<CardRow category={category} heroes={heroes} />
		);
	};
};

const mapStateToProps = (state, ownProps) => ({
	heroes: state.heroes.heroes,
	category: ownProps.match.params.category
});

export default connect(mapStateToProps, {setHeroes})(ShopSection);