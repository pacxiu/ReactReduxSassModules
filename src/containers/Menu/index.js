import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ReactSVG from 'react-svg';
import ReactTooltip from 'react-tooltip'

import styled from 'styled-components';
import { sizeVars, media } from "../../style-utils/vars";

import TextEllipse from '../../components/CommonElements/TextEllipse'

import networkIcon from '../../assets/icons/network.svg';
import logo from '../../assets/logo.png';

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: ${sizeVars.navHeight};
	box-shadow: 0 0 11px -2px rgba(0, 0, 0,.75);
	z-index: 20;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;

	${media.mobile`background-color: red;`}
`;

const Logo = styled.div`
	position: absolute;
	left: 20px;
	display: flex;
	align-items: center;

	& img {
		max-height: calc(${sizeVars.navHeight} * 0.8);
		margin-right: 10px;
	}
`

const AccountContainer = styled.div`
	position: absolute;
	right: 20px;
	display: flex;
	align-items: center;

	& svg {
		width: 2.5rem;
		fill: red;
		margin-right: 20px;
	}

	& .is-online svg {
		fill: green;
	}
`;

const Dropdown = styled.div`
	position: relative;

	& .content {
		position: absolute;
		display: none;
		bottom: 0;
		left: 0;
		width: 100%;
		box-sizing: border-box;
		padding: .4em;
		transform: translateY(100%);
		border: 1px solid #fb6b3f;
		background-color: #fff;
		text-align: center;
	}

	&:hover .content {
		display: block;
	}
	
	& .toggle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 8em;
		font-size: 0.9em
		padding: .4em 1em;
	}

	& .toggle:after {
		display: inline-block;
		width: 0;
		height: 0;
		margin-left: 2rem;
		content: "";
		border-top: .3em solid;
		border-right: .3em solid transparent;
		border-bottom: 0;
		border-left: .3em solid transparent;
	}

	& .content {
		a {
			display: block;
			border-top: 1px solid red;
			padding: .4em 1em .3em;
		}

		a, p {
			font-size: 0.8em;
		}

		p {
			padding: 0.4em 0;
		}
	}

	& a {
		transition: 0.3s ease-in-out;
		color: red;

		&:hover {
			color: white;
			background-color: red;
		}
	}
`;

class Menu extends Component {
	render() {
		let { account, network } = this.props;
		let accountLink, networkStatus, networkMsg;

		// check user account
		if ( account == null ) {
			account = "No account";
			accountLink = "";
		} else {
			accountLink = account.toString();
		}

		// check user network
		if ( !network.external ) {
	  		networkStatus = (<a className="is-online" data-for="network" data-tip><ReactSVG path={networkIcon}/></a>)
	  		networkMsg = "You are connected to Main Ethereum Network";
	  	} else {
	  		networkStatus = (<a data-for="network" data-tip><ReactSVG path={networkIcon}/></a>)
	  		networkMsg = "We connected you to Main Network with external provider. Please, install Metamask or check network.";
	  	}

		return (
			<Nav>
				<Logo>
					<Link to="/"><img src={logo} alt=""/></Link>
					<p>Ether Comics</p>
				</Logo>

				<div>
					<Link to="/test">Marketplace</Link>
				</div>
				
				<AccountContainer>
					{networkStatus}
					<ReactTooltip id="network" place="bottom" type="light" effect="solid">
						{networkMsg}
					</ReactTooltip>
					
					<Dropdown>
						<a className="toggle"><strong>Account</strong></a>
						<div className="content">
							<TextEllipse text={account}/>
							<Link to="/">My Heroes</Link>
						</div>
					</Dropdown>
				</AccountContainer>				
			</Nav>
		);
	}
}

function mapStateToProps(state) {
	return { 
		account: state.account,
		network: state.network
	};
}

export default connect(mapStateToProps)(Menu);