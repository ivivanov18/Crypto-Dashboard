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
			setFilteredCoins: this.setFilteredCoins.bind(this),
		};
		this.fetchCoins = this.fetchCoins.bind(this);
	}

	componentDidMount() {
		this.fetchCoins();
		this.fetchPrices();
	}

	async fetchCoins() {
		const coinList = (await cc.coinList()).Data;
		this.setState({ coinList });
	}

	async fetchPrices() {
		if (this.state.firstVisit) {
			return;
		}
		const prices = (await this.getPrices()).filter(
			price => Object.keys(price).length
		);
		console.log({ prices });
		this.setState({ prices });
	}

	async getPrices() {
		const pricesData = [];
		for (let fav of this.state.favoriteCoinsList) {
			try {
				const priceData = await cc.priceFull(fav, 'USD');
				pricesData.push(priceData);
			} catch (e) {
				console.warn('Error while fetching prices');
			}
		}
		return pricesData;
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
		const { favoriteCoinsList } = JSON.parse(cryptoDash);
		return { favoriteCoinsList };
	}

	confirmFavorites() {
		this.setState(
			{
				firstVisit: false,
				page: 'Dashboard',
			},
			() => {
				this.fetchPrices();
			}
		);
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				favoriteCoinsList: this.state.favoriteCoinsList,
			})
		);
	}

	setFilteredCoins(filteredCoinsList) {
		this.setState({ filteredCoinsList });
	}

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
