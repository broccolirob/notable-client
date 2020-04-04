import React from 'react';

const NotesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/dashboard/:id?/:labelHandle?/:labelId?',
			component: React.lazy(() => import('./NotesApp'))
		}
	]
};

export default NotesConfig;
