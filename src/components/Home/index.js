import React, { Component } from 'react';
import styled from 'styled-components';

import { FullHeightFlex } from '../../style-utils/Grid';
import mainBg from '../../assets/main-bg.jpeg';

import Button from '../CommonElements/Button';

export default class Home extends Component {
	render() {
		const Title = styled.h1`
			color: white;
			font-weight: bold;
			font-size: 4em;
			margin-bottom: 0.2em;
		`;

		return (
			<div>
				<FullHeightFlex style={{ backgroundImage: `url(${mainBg})`}}>
					<div>
						<Title>Ether Comics</Title>
						<Button link="test" text="Text"></Button>
					</div>
				</FullHeightFlex>
			</div>
		);
	}
}
