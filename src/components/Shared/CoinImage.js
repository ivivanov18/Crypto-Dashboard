import React from 'react';
import styled, { css } from 'styled-components';

const CoinImageStyled = styled.img`
	height: 50px;
	${props =>
		props.spotLight &&
		css`
			height: 200px;
			display: block;
			margin: auto;
		`}
`;

function CoinImage({ coin, style, spotLight }) {
	return (
		<CoinImageStyled
			spotLight={spotLight}
			alt={coin.Symbol}
			style={style}
			src={`http://cryptocompare.com${coin.ImageUrl}`}
		/>
	);
}

export default CoinImage;
