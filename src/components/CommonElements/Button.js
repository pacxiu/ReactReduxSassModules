import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from "react-router-dom";

export default class Button extends Component {
	render() {
		const Button = styled(Link)`
			color: #fff;
			background-color: #66cf8b;
			border: 1px solid #66cf8b;
			font-weight: 700;
			text-transform: uppercase;
			font-size: 1.8rem;
			display: table;
			margin: 0 auto;
			padding: .8em 1.8em;
			border-radius: 5em;
			width: auto;
			transition: all .3s ease-in-out;

			&:hover {
				background-color: #fff;
  				color: #66cf8b;
			}
		`;

		const { link, text } = this.props

		return (
			<Button to={`/${link}`} >{text}</Button>
		);
	}
}
