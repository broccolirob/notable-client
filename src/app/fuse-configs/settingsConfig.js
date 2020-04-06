const settingsConfig = {
	layout: {
		style: 'layout4', // layout-1 layout-2 layout-3 layout-4
		config: {
			mode: 'container',
			scroll: 'content',
			navbar: {
				display: false
			},
			toolbar: {
				display: true,
				position: 'above'
			},
			footer: {
				display: true,
				style: 'static'
			},
			leftSidePanel: {
				display: false
			},
			rightSidePanel: {
				display: true
			},
			settingsPanel: {
				display: false
			}
		} // checkout default layout configs at app/fuse-layouts for example  app/fuse-layouts/layout1/Layout1Config.js
	},
	customScrollbars: true,
	animations: true,
	direction: 'ltr', // rtl, ltr
	theme: {
		main: 'default',
		navbar: 'mainThemeDark',
		toolbar: 'mainThemeLight',
		footer: 'mainThemeDark'
	}
};

export default settingsConfig;
