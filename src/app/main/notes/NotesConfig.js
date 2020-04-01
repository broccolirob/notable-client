import { authRoles } from 'app/auth';
import Notes from './Notes';

const NotesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/dashboard/:id?/:labelHandle?/:labelId?',
			component: Notes
		}
	]
};

export default NotesConfig;
