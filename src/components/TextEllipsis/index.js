import React, { Component } from 'react';

import "./index.css"

export default class TextEllipse extends Component {
	render() {
    const { text } = this.props

		return (
			<div>{text}</div>
		);
	}
}
