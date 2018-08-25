import React, { Component } from 'react';
import styled from 'styled-components';

export default class TextEllipse extends Component {
	render() {
		const Text = styled.p`
			margin: 0 auto;
			overflow: hidden;
			text-overflow: ellipsis;
			width: 90%;
		`;

		return (
			<Text>{this.props.text}</Text>
		);
	}
}
