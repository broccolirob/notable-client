import React from 'react';
import { authRoles } from 'app/auth';

const NotesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.user,
	routes: [
		{
			path: '/dashboard/:id?/:labelHandle?/:labelId?',
			component: React.lazy(() => import('./NotesApp'))
		}
	]
};

export default NotesConfig;
