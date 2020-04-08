import FuseAnimate from '@fuse/core/FuseAnimate';
import { TextFieldFormsy } from '@fuse/core/formsy';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import Formsy from 'formsy-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from 'app/auth/store/actions';

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Login() {
	const dispatch = useDispatch();
	const login = useSelector(({ auth }) => auth.login);
	const classes = useStyles();
	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	useEffect(() => {
		if (login.error && (login.error.email || login.error.password)) {
			formRef.current.updateInputsWithError({ ...login.error });
			disableButton();
		}
	}, [login.error]);

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	function handleSubmit(model) {
		dispatch(authActions.submitLogin(model));
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className="w-full max-w-384">
						<CardContent className="flex flex-col items-center justify-center p-32">
							<img className="w-128 m-32" src="assets/images/logos/bearLogo.png" alt="logo" />

							<Typography variant="h6" className="mt-16 mb-32">
								LOGIN TO NOTABLE
							</Typography>

							<Formsy
								onValidSubmit={handleSubmit}
								onValid={enableButton}
								onInvalid={disableButton}
								ref={formRef}
								className="flex flex-col justify-center w-full"
							>
								<TextFieldFormsy
									className="mb-16"
									type="text"
									name="email"
									label="Username/Email"
									validations={{ minLength: 4 }}
									validationErrors={{ minLength: 'Min character length is 4' }}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<Icon className="text-20" color="action">
													email
												</Icon>
											</InputAdornment>
										)
									}}
									variant="outlined"
									required
								/>

								<TextFieldFormsy
									className="mb-16"
									type="password"
									name="password"
									label="Password"
									validations={{ minLength: 4 }}
									validationErrors={{ minLength: 'Min character length is 4' }}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<Icon className="text-20" color="action">
													vpn_key
												</Icon>
											</InputAdornment>
										)
									}}
									variant="outlined"
									required
								/>

								<div className="flex justify-end">
									<Link className="font-medium" to="/forgot-password">
										Forgot Password?
									</Link>
								</div>

								<Button
									type="submit"
									variant="contained"
									color="primary"
									className="w-full mx-auto mt-16 normal-case"
									aria-label="LOG IN"
									disabled={!isFormValid}
									value="legacy"
								>
									Login
								</Button>
							</Formsy>

							<div className="my-24 flex items-center justify-center">
								<Divider className="w-32" />
								<span className="mx-8 font-bold">OR</span>
								<Divider className="w-32" />
							</div>

							<div className="flex flex-col items-center justify-center pb-24">
								<span className="font-medium">Don't have an account?</span>
								<Link className="font-medium" to="/register">
									Create an account
								</Link>
							</div>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default Login;
