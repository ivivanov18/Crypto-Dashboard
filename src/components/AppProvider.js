import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'Dashboard',
			...this.getSavedSettings(),
			setPage: this.setPage.bind(this),
			confirmFavorites: this.confirmFavorites.bind(this),
		};
	}

	setPage(page) {
		this.setState({ page });
	}

	getSavedSettings() {
		const cryptoDash = localStorage.getItem('cryptoDash');
		if (!cryptoDash) {
			const initialState = {
				page: 'Settings',
				firstVisit: true,
			};
			return initialState;
		}
		return {};
	}

	confirmFavorites() {
		this.setState({
			firstVisit: false,
			page: 'Dashboard',
		});
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				test: 'hello',
			})
		);
	}

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
