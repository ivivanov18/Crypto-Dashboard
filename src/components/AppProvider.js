import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'Dashboard',
			setPage: this.setPage.bind(this),
		};
	}

	setPage(page) {
		this.setState({ page });
	}

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
