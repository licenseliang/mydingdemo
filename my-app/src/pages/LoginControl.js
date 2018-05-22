import React, {Component} from 'react';

function UserGreeting(props) {
		return <h1>Welcome back!</h1>;
	}

function GuestGreeting(props) {
		return <h1>Please sign up.</h1>;
	}

function Greeting(props) {
		const isLoggedIn = props.isLoggedIn;
		if (isLoggedIn) {
			return <UserGreeting />;
		}
		return <GuestGreeting />;
	}

function LoginButton(props) {
		return (
			<button onClick={props.onClick} >
				Login
			</button>
		);
	}

function LogoutButton(props) {
		return (
			<button onClick={props.onClick} >
			    Logout
			</button>
		);
	}

function Mailbox(props) {
	const unreadMessages = props.unreadMessages;
	return (
		<div>
			<h1>Hello!</h1>
			{unreadMessages.length > 0 &&
				<h2>
				    You have {unreadMessages.length} unread messages.
				</h2>
			}
		</div>
	);
}

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) =>
		<li>{number}</li>
	);

	return (
		<ul>{listItems}</ul>
	);
}
class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
		this.setState({
			isLoggedIn: true
		});
	}

	handleLogoutClick() {
		this.setState({
			isLoggedIn: false
		});
	}


	
	render() {
		const isLoggedIn = this.state.isLoggedIn;
		const messages = ['React', 'Re: React', 'Re:Re: React'];
		let button = null;
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}

		const numbers = [1, 2, 3, 4, 5];
		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}

				<Mailbox unreadMessages={messages} />

				<NumberList numbers={numbers} />
			</div>
		);
	}
}

export default LoginControl;