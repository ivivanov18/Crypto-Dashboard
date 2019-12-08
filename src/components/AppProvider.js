import React, { Component } from 'react';
const cc = require('cryptocompare');

const MAX_LENGTH_FAVORITES = 10;

export const AppContext = React.createContext();

export class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'Dashboard',
			favoriteCoinsList: ['BTC', 'DOGE', 'XMR', 'ETH'],
			...this.getSavedSettings(),
			setPage: this.setPage.bind(this),
			confirmFavorites: this.confirmFavorites.bind(this),
			addCoinToFavorites: this.addCoinToFavorites.bind(this),
			removeCoinFromFavorites: this.removeCoinFromFavorites.bind(this),
			isInFavorites: this.isInFavorites.bind(this),
		};
		this.fetchCoins = this.fetchCoins.bind(this);
	}

	componentDidMount() {
		this.fetchCoins();
	}

	async fetchCoins() {
		const coinList = (await cc.coinList()).Data;
		this.setState({ coinList });
	}

	setPage(page) {
		this.setState({ page });
	}

	addCoinToFavorites(coinKey) {
		const favoriteCoinsList = this.state.favoriteCoinsList.slice();
		if (
			favoriteCoinsList.length < MAX_LENGTH_FAVORITES &&
			!favoriteCoinsList.includes(coinKey)
		) {
			favoriteCoinsList.push(coinKey);
			console.log({ favoriteCoinsList });
			this.setState({ favoriteCoinsList });
		}
	}

	removeCoinFromFavorites(coinKey) {
		const favoriteCoinsList = this.state.favoriteCoinsList.slice();
		const indexOfCoinKey = favoriteCoinsList.indexOf(coinKey);
		if (indexOfCoinKey >= 0) {
			favoriteCoinsList.splice(indexOfCoinKey, 1);
			this.setState({ favoriteCoinsList });
		}
	}

	isInFavorites(coinKey) {
		return this.state.favoriteCoinsList.includes(coinKey);
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
