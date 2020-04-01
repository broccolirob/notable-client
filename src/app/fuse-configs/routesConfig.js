import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';
import ForgotPasswordConfig from 'app/main/forgot-password/ForgotPasswordPageConfig';
import ResetPasswordConfig from 'app/main/reset-password/ResetPasswordPageConfig';

const routeConfigs = [
	ExampleConfig,
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
		component: () => <Redirect to="/example" />
	}
];

export default routes;
