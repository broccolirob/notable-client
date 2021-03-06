import api from 'app/services/api';

export const GET_LABELS = '[NOTES APP] GET LABELS';
export const LABELS_DIALOG_OPEN = '[NOTES APP] LABELS DIALOG OPEN';
export const LABELS_DIALOG_CLOSE = '[NOTES APP] LABELS DIALOG CLOSE';
export const UPDATE_LABELS = '[NOTES APP] LABELS UPDATE LABELS';

export function getLabels() {
	const request = api.get('/api/notes/labels');

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_LABELS,
				payload: response.data
			})
		);
}

export function updateLabels(labels) {
	const request = api.post('/api/notes/update-labels', { labels: Object.values(labels) });

	return dispatch =>
		request.then(response =>
			dispatch({
				type: UPDATE_LABELS,
				payload: response.data
			})
		);
}

export function openLabelsDialog() {
	return {
		type: LABELS_DIALOG_OPEN
	};
}

export function closeLabelsDialog() {
	return {
		type: LABELS_DIALOG_CLOSE
	};
}
