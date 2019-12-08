import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import fuzzy from 'fuzzy';
import { backgroundColor2, fontSize2 } from './Styles';
import { AppContext } from '../AppProvider';

const SearchGrid = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
	${backgroundColor2}
	${fontSize2}
    border: 1px solid;
	height: 25px;
	color: #1163c9;
	place-self: center left;
`;

const handleFilter = _.debounce((inputValue, coinsList, setFilteredCoins) => {
	//Get all coins symbols
	const coinsSymbols = Object.keys(coinsList);
	//Get all coins names
	const coinsNames = coinsSymbols.map(coinKey => coinsList[coinKey].CoinName);
	//Concat all to get one array for research purposes
	const allSearchStrings = coinsSymbols.concat(coinsNames);
	//get results
	const fuzzyResults = fuzzy
		.filter(inputValue, allSearchStrings, {})
		.map(result => result.string);
	const filteredCoins = _.pickBy(coinsList, (result, symKey) => {
		const coinName = result.coinName;
		return (
			_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
		);
	});
	setFilteredCoins(filteredCoins);
}, 500);

function filterCoins(e, setFilteredCoins, coinsList) {
	const inputValue = e.target.value;
	handleFilter(inputValue, coinsList, setFilteredCoins);
}

function Search() {
	return (
		<AppContext.Consumer>
			{({ setFilteredCoins, coinList }) => (
				<SearchGrid>
					<h2>Search all coins</h2>
					<SearchInput
						onKeyUp={e => filterCoins(e, setFilteredCoins, coinList)}
					/>
				</SearchGrid>
			)}
		</AppContext.Consumer>
	);
}

export default Search;
