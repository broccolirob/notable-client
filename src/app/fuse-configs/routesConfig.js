import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import NotesConfig from 'app/main/notes/NotesConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';
import ForgotPasswordConfig from 'app/main/forgot-password/ForgotPasswordPageConfig';
import ResetPasswordConfig from 'app/main/reset-password/ResetPasswordPageConfig';

const routeConfigs = [
	NotesConfig,
	LogoutConfig,
	LoginConfig,
	RegisterConfig,
	ForgotPasswordConfig,
	ResetPasswordConfig
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/dashboard" />
	}
];

export default routes;
