import React from 'react';
import { AppContext } from '../AppProvider';

function WelcomeMessage() {
	return (
		<AppContext.Consumer>
			{({ firstVisit }) =>
				firstVisit ? (
					<div>
						<h1>Welcome to Crypto Dashboard</h1>
					</div>
				) : null
			}
		</AppContext.Consumer>
	);
}
export default WelcomeMessage;
