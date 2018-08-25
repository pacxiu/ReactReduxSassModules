import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBoss } from '../../actions/bosses';

class Marketplace extends Component {
	constructor(props) {
		super(props);

		this.state = {
			marketItemsPerPage: 12,
			pageCount: 1,
			offset: 0,
			sortType: "price",
			sortDirection: "descending"
		};

		// this.handlePagination = this.handlePagination.bind(this);
		// this.handleDataArray = this.handleDataArray.bind(this);
		// this.renderMarketplace = this.renderMarketplace.bind(this);
		// this.handleSortType = this.handleSortType.bind(this);
		// this.handleSortDirection = this.handleSortDirection.bind(this);
		// this.sortHelper = this.sortHelper.bind(this);
		// this.updatePagination = this.updatePagination.bind(this);
	}

	componentDidMount() {
		this.getTokens();
	}

	// method getting all available contract tokens, updating state with prices and owners
	getTokens() {
		const { contract } = this.props;
		const _this = this;

		// check if contract is defined!
		if ( contract == null ) {
			setTimeout(function() {
				_this.getTokens();
			}, 800 );
			return;
		}

		console.log('getting tokens');

		contract.methods.totalSupply().call( function(err, data) {
			console.log(data);
			// const contractElements = elements;
		 //    _this.setState({ elements: contractElements });

			// for (var i = 1; i <= contractElements.length ; i++) {
		 //        _this.getHero(i);
		 //    }
		});

		contract.methods.totalBosses().call( function(err, data) {
			console.log(data);
		 //    const contractScientists = scientists;
		 //    _this.setState({ scientists: contractScientists });
			
			for (var i = 0; i < data ; i++) {
		        contract.methods.getBoss(i).call( function(err, data) {
		        	_this.props.loadBoss(data);
		        })
		    }
		});

		// contract.methods.owner().call( function(err, data) {
		// 	console.log(err, data);
		// });
	}


	render() {
		return (
			<div>Marketplace</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		web3: state.web3,
		contract: state.contract,
		heroes: state.heroes,
		bosses: state.bosses
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ loadBoss }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
