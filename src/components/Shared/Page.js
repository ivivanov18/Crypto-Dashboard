import React from 'react';
import { AppContext } from '../AppProvider';

function Page({ name, children }) {
	return (
		<AppContext.Consumer>
			{({ page }) => (page !== name ? null : <div>{children}</div>)}
		</AppContext.Consumer>
	);
}

export default Page;
