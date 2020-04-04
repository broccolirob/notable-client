import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import NotesAppConfig from 'app/main/notes/NotesAppConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';
import ForgotPasswordConfig from 'app/main/forgot-password/ForgotPasswordPageConfig';
import ResetPasswordConfig from 'app/main/reset-password/ResetPasswordPageConfig';
import ErrorPageConfig from 'app/main/errorPages/ErrorPageConfig';

const routeConfigs = [
	NotesAppConfig,
	LogoutConfig,
	LoginConfig,
	RegisterConfig,
	ForgotPasswordConfig,
	ResetPasswordConfig,
	ErrorPageConfig
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/dashboard" />
	},
	{
		component: () => <Redirect to="/404" />
	}
];

export default routes;
