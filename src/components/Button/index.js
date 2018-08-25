import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './index.css'

export default class Button extends Component {
	render() {
		const { link, text } = this.props

		return (
			<Link className="button" to={`/${link}`} >{text}</Link>
		);
	}
}
