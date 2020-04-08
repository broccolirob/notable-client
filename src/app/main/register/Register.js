import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import { TextFieldFormsy } from '@fuse/core/formsy';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as authActions from 'app/auth/store/actions';
import Formsy from 'formsy-react';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`,
		color: theme.palette.primary.contrastText
	}
}));

function RegisterPage() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const register = useSelector(({ auth }) => auth.register);

	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	useEffect(() => {
		if (register.error && (register.error.username || register.error.password || register.error.email)) {
			formRef.current.updateInputsWithError({ ...register.error });
			disableButton();
		}
	}, [register.error]);

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	function handleSubmit(model) {
		dispatch(authActions.submitRegister(model));
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation="transition.expandIn">
					<Card className="w-full max-w-384">
						<CardContent className="flex flex-col items-center justify-center p-32">
							<img className="w-128 m-32" src="assets/images/logos/bearLogo.png" alt="logo" />

							<Typography variant="h6" className="mt-16 mb-32">
								CREATE AN ACCOUNT
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
									name="username"
									label="Username"
									validations={{
										minLength: 5,
										maxLength: 24
									}}
									validationErrors={{
										minLength: 'Min character length is 5',
										maxLength: 'Max character length is 24'
									}}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<Icon className="text-20" color="action">
													person
												</Icon>
											</InputAdornment>
										)
									}}
									variant="outlined"
									required
								/>

								<TextFieldFormsy
									className="mb-16"
									type="text"
									name="email"
									label="Email"
									validations="isEmail"
									validationErrors={{
										isEmail: 'Please enter a valid email'
									}}
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
									validations="equalsField:password-confirm"
									validationErrors={{
										equalsField: 'Passwords do not match'
									}}
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

								<TextFieldFormsy
									className="mb-16"
									type="password"
									name="password-confirm"
									label="Confirm Password"
									validations="equalsField:password"
									validationErrors={{
										equalsField: 'Passwords do not match'
									}}
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

								<Button
									type="submit"
									variant="contained"
									color="primary"
									className="w-full mx-auto mt-16 normal-case"
									aria-label="REGISTER"
									disabled={!isFormValid}
									value="legacy"
								>
									Register
								</Button>
							</Formsy>
							<div className="flex flex-col items-center justify-center pt-32 pb-24">
								<span className="font-medium">Already have an account?</span>
								<Link className="font-medium" to="/login">
									Login
								</Link>
							</div>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default RegisterPage;
