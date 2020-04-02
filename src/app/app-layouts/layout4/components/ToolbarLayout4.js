import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import NavbarMobileToggleButton from 'app/app-layouts/shared-components/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'app/app-layouts/shared-components/quickPanel/QuickPanelToggleButton';
import UserMenu from 'app/app-layouts/shared-components/UserMenu';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import NotesLogo from './NotesLogo';

const useStyles = makeStyles(theme => ({
	separator: {
		width: 1,
		height: 64,
		backgroundColor: theme.palette.divider
	}
}));

function ToolbarLayout4(props) {
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const toolbarTheme = useSelector(({ fuse }) => fuse.settings.toolbarTheme);

	const classes = useStyles(props);

	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar
				id="fuse-toolbar"
				className="flex relative z-10"
				color="default"
				style={{ backgroundColor: toolbarTheme.palette.background.default }}
			>
				<Toolbar className="container p-0 lg:px-24">
					{config.navbar.display && (
						<Hidden lgUp>
							<NavbarMobileToggleButton className="w-64 h-64 p-0" />
							<div className={classes.separator} />
						</Hidden>
					)}

					<div className={clsx('flex flex-1 flex-shrink-0 items-center')}>
						<NotesLogo />
					</div>

					<div className="flex">
						<UserMenu />

						<div className={classes.separator} />

						<QuickPanelToggleButton>
							<Badge color="error" variant="dot" invisible={false}>
								<Icon>notifications</Icon>
							</Badge>
						</QuickPanelToggleButton>

						<Hidden mdDown>
							<div className={classes.separator} />
						</Hidden>
					</div>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default React.memo(ToolbarLayout4);
