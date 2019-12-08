import React from 'react';
import { AppContext } from '../AppProvider';

function Content({ children }) {
	return (
		<AppContext.Consumer>
			{({ coinList, prices, firstVisit }) => {
				if (!coinList) {
					return <div>Loading coins</div>;
				}
				if (!prices && !firstVisit) {
					return <div>Loading prices</div>;
				}
				return <div>{children}</div>;
			}}
		</AppContext.Consumer>
	);
}
export default Content;
