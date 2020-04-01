import axios from 'axios';

export const GET_LABELS = '[NOTES] GET LABELS';
export const LABELS_DIALOG_OPEN = '[NOTES] LABELS DIALOG OPEN';
export const LABELS_DIALOG_CLOSE = '[NOTES] LABELS DIALOG CLOSE';
export const UPDATE_LABELS = '[NOTES] LABELS UPDATE LABELS';

export function getLabels() {
	const request = axios.get('/api/labels');

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_LABELS,
				payload: response.data
			})
		);
}

export function updateLabels(labels) {
	const request = axios.post('/api/update-labels', { labels: Object.values(labels) });

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
