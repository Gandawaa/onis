import * as types from '../actions/action_types';

const INITIAL_STATE = {
	error: '',
	message: '',
	content: '',
	rows: [],
	edit: {},
	branch: [],
	districts: [],
	vat: ''
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case types.ONIS_USER:
			return { ...state, error: '', message: '', rows: action.payload };
		
		case types.DISTRICT_ALL1:
			return { ...state, error: '', message: '', districts: action.payload };
		default:
			return state;
	}
}
