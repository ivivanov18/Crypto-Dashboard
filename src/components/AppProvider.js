import React, { Component } from 'react';
import moment from 'moment';
const cc = require('cryptocompare');

const MAX_LENGTH_FAVORITES = 10;
const TIME_UNITS = 10;

export const AppContext = React.createContext();

export class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'Dashboard',
			favoriteCoinsList: ['BTC', 'DOGE', 'XMR', 'ETH'],
			timeInterval: 'months',
			...this.getSavedSettings(),
			setPage: this.setPage.bind(this),
			confirmFavorites: this.confirmFavorites.bind(this),
			addCoinToFavorites: this.addCoinToFavorites.bind(this),
			removeCoinFromFavorites: this.removeCoinFromFavorites.bind(this),
			isInFavorites: this.isInFavorites.bind(this),
			setFilteredCoins: this.setFilteredCoins.bind(this),
			setCurrentFavorite: this.setCurrentFavorite.bind(this),
			changeChartSelect: this.changeChartSelect.bind(this),
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
		const { favoriteCoinsList, currentFavorite } = JSON.parse(cryptoDash);
		return { favoriteCoinsList, currentFavorite };
	}

	confirmFavorites() {
		const currentFavorite = this.state.favoriteCoinsList[0];
		this.setState(
			{
				currentFavorite,
				firstVisit: false,
				page: 'Dashboard',
				prices: null,
				historical: null,
			},
			() => {
				this.fetchPrices();
				this.fetchHistorical();
			}
		);
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				currentFavorite,
				favoriteCoinsList: this.state.favoriteCoinsList,
			})
		);
	}

	setFilteredCoins(filteredCoinsList) {
		this.setState({ filteredCoinsList });
	}

	setCurrentFavorite(newFavorite) {
		this.setState(
			{ currentFavorite: newFavorite, historical: null },
			this.fetchHistorical
		);
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				...JSON.parse(localStorage.getItem('cryptoDash')),
				currentFavorite: newFavorite,
			})
		);
	}

	async fetchHistorical() {
		if (this.state.firstVisit) return;
		const results = await this.getHistoricalPrices();
		const historical = [
			{
				name: this.state.currentFavorite,
				data: results.map((ticker, index) => {
					return [
						moment()
							.subtract({ [this.state.timeInterval]: TIME_UNITS - index })
							.valueOf(),
						ticker.USD,
					];
				}),
			},
		];
		this.setState({ historical });
	}

	getHistoricalPrices() {
		const promises = [];
		for (let units = TIME_UNITS; units > 0; units--) {
			promises.push(
				cc.priceHistorical(
					this.state.currentFavorite,
					'USD',
					moment()
						.subtract({ [this.state.timeInterval]: units })
						.toDate()
				)
			);
		}
		return Promise.all(promises);
	}

	changeChartSelect(value) {
		this.setState(
			{ timeInterval: value, historical: null },
			this.fetchHistorical
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
