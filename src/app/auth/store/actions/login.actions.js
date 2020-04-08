import jwtService from 'app/services/jwtService';
import * as Actions from 'app/store/actions';
import * as UserActions from './user.actions';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function submitLogin({ email, password }) {
	return dispatch =>
		jwtService
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				dispatch(UserActions.setUserData(user));

				return dispatch({
					type: LOGIN_SUCCESS
				});
			})
			.catch(error => {
				dispatch(Actions.showMessage({ message: error.message, variant: 'error' }));

				return dispatch({
					type: LOGIN_ERROR,
					payload: error.fields
				});
			});
}
