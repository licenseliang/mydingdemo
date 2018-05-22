import React, {Component} from 'react';
import LoginControl from './LoginControl.js';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			isToggleOn: false
		};

		// 这个绑定是必要的，使 this 在回调中起作用
		this.handleBtnClick = this.handleBtnClick.bind(this);
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillMount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	handleClick(e) {
		e.preventDefault();
		console.log("The link was clicked.");
	}

	handleBtnClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>

				<a href="#" onClick={this.handleClick} >
				    Click me
				</a>

				<button onClick={this.handleBtnClick}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>

				<LoginControl />
			</div>
		);

	}
}

export default Clock;