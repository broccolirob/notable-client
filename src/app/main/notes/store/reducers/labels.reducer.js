import _ from '@lodash';
import * as Actions from '../actions';

const initialState = {
	entities: {},
	labelsDialogOpen: false
};

const labelsReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.GET_LABELS: {
			return {
				...state,
				entities: _.keyBy(action.payload, '_id')
			};
		}
		case Actions.UPDATE_LABELS: {
			return {
				...state,
				entities: _.keyBy(action.payload, 'id')
			};
		}
		case Actions.LABELS_DIALOG_OPEN: {
			return {
				...state,
				labelsDialogOpen: true
			};
		}
		case Actions.LABELS_DIALOG_CLOSE: {
			return {
				...state,
				labelsDialogOpen: false
			};
		}
		default: {
			return state;
		}
	}
};

export default labelsReducer;
