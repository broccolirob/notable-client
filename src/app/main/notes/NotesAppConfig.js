import Notes from './NotesApp';

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
