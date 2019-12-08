import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig, greenBoxShadow } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Shared/CoinHeaderGrid';

const PriceTileStyled = styled(SelectableTile)`
	${props =>
		props.isCurrentFavorite &&
		css`
			${greenBoxShadow}
			pointer-events:none;
		`}
`;

const JustifyRight = styled.div`
	justify-self: right;
`;

const ChangePct = styled.div`
	color: green;
	${props =>
		props.red &&
		css`
			color: red;
		`}
`;

const TickerPrice = styled.div`
	${fontSizeBig}
`;

function formatNumber(number) {
	return +(number + '').slice(0, 7);
}

function ChangePercent({ data }) {
	return (
		<JustifyRight>
			<ChangePct red={data.CHANGEPCT24HOUR < 0}>
				{formatNumber(data.CHANGEPCT24HOUR)}
			</ChangePct>
		</JustifyRight>
	);
}

function PriceTile({ price, index, currentFavorite, setCurrentFavorite }) {
	const key = Object.keys(price)[0];
	const data = price[key]['USD'];
	return (
		<PriceTileStyled
			isCurrentFavorite={currentFavorite === key}
			onClick={() => setCurrentFavorite(key)}>
			<CoinHeaderGridStyled>
				<div>{key}</div>
			</CoinHeaderGridStyled>
			<ChangePercent data={data} />
			<TickerPrice>${formatNumber(data.PRICE)}</TickerPrice>
		</PriceTileStyled>
	);
}
export default PriceTile;
