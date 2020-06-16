import { API_URL_NEW } from "../../package.json";
import * as types from "./action_types";
import OnisUserListApi from "../api/OnisUserList_api"; 

export function OnisUser(credentials) {
	return function (dispatch) {
		OnisUserListApi
			.onisUser(credentials)
			.then((response) => {
				dispatch({ type: types.ONIS_USER, payload: response.value });
			})
			.catch((error) => {
				dispatch({ type: types.ONIS_USER_ERROR, payload: error });
			});
	};
}

export function getDistricts() {
	return function (dispatch) {
	  OnisUserListApi
		.districtInfo()
		.then(response => {
		  dispatch({ type: types.DISTRICT_ALL1, payload: response.value });
		})
		.catch(error => {
		  dispatch({ type: types.DISTRICT_ALL1_ERROR, payload: error });
		});
	};
  }