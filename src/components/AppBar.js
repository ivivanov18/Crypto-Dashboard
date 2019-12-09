import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
	font-size: 1.5rem;
`;

const Bar = styled.div`
	display: grid;
	margin-bottom: 40px;
	grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElement = styled.div`
	cursor: pointer;
	${props =>
		props.active &&
		css`
			color: #03ff03;
		`}
	${props =>
		props.hidden &&
		css`
			display: none;
		`}
`;

function ControlButton({ name }) {
	return (
		<AppContext.Consumer>
			{({ firstVisit, page, setPage }) => (
				<ControlButtonElement
					active={name === page ? 'true' : false}
					onClick={() => setPage(name)}
					hidden={firstVisit && name === 'Dashboard'}>
					{name}
				</ControlButtonElement>
			)}
		</AppContext.Consumer>
	);
}

function AppBar() {
	return (
		<Bar>
			<Logo>CryptoDash</Logo>
			<div></div>
			<ControlButton name='Dashboard' />
			<ControlButton name='Settings' />
		</Bar>
	);
}

export default AppBar;
