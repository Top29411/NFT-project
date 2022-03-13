import { createAction, handleActions } from "redux-actions"
import { call, all, take, put } from "redux-saga/effects"
import axios from "axios"
import { getHomepageFeatured, getHomepageHeading, getHomepageNtf, getHomepageTeam, getHomepageTokenomics } from "../../api/Api"

const namespace = "home"
const api = process.env.REACT_APP_API_URL //https://api.yandereshiba.io/api

const GET_HOME_DATA = "GET_HOME_DATA"
const SET_HOME_DATA = "SET_HOME_DATA"

const SET_HEADING = "SET_HEADING"
const SET_FEATURED = "SET_FEATURED"
const SET_NTF = "SET_NTF"
const SET_TOKENOMIKS = "SET_TOKENOMIKS"
const SET_TEAM = "SET_TEAM"

const initialState = {
	heading: null,
	featured: null,
	ntf: null,
	tokenomiks: null,
	team: null,
}

export const getHomeData = createAction(GET_HOME_DATA)
export const setHomeData = createAction(SET_HOME_DATA)

export const setHeading = createAction(SET_HEADING)
export const setFeatured = createAction(SET_FEATURED)
export const setNtf = createAction(SET_NTF)
export const setTokenomiks = createAction(SET_TOKENOMIKS)
export const setTeam = createAction(SET_TEAM)

export default handleActions(
	{
		[SET_HOME_DATA]: (state, { payload }) => ({ ...state, ...payload }),
		[SET_HEADING]: (state, { payload }) => ({ ...state, heading: payload }),
		[SET_FEATURED]: (state, { payload }) => ({ ...state, featured: payload }),
		[SET_NTF]: (state, { payload }) => ({ ...state, ntf: payload }),
		[SET_TOKENOMIKS]: (state, { payload }) => ({ ...state, tokenomiks: payload }),
		[SET_TEAM]: (state, { payload }) => ({ ...state, team: payload }),
	},
	initialState
)

export const homeDataSelector = (state) => state[namespace]

function* getHeadingReequest() {
	try {
		const { data } = yield call(getHomepageHeading)
		console.log(data);
		yield put(setHeading(data.items))
	} catch (err) {
		console.log(err)
	}
}
function* getFeaturedReequest() {
	try {
		const { data } = yield call(getHomepageFeatured)
		console.log(data)
		yield put(setFeatured(data.items))
	} catch (err) {
		console.log(err)
	}
}
function* getNtfReequest() {
	try {
		const { data } = yield call(getHomepageNtf)
		console.log(data)
		yield put(setNtf(data.items))
	} catch (err) {
		console.log(err)
	}
}
function* getTokenomiksReequest() {
	try {
		const { data } = yield call(getHomepageTokenomics)
		yield put(setTokenomiks({items:data.items, nextItems:data.nextItems}))
	} catch (err) {
		console.log(err)
	}
}
function* getTeamReequest() {
	try {
		const { data } = yield call(getHomepageTeam)
		yield put(setTeam(data.items))
	} catch (err) {
		console.log(err)
	}
}

function* getHomeDataWorker() {
	while (true) {
		yield take(GET_HOME_DATA)
		try {
			const { data } = yield call(axios.get, `${api}/homepage`)
			yield put(setHomeData(data))
			yield all([getHeadingReequest(), getFeaturedReequest(),getNtfReequest(),getTokenomiksReequest(),getTeamReequest()])
			console.log(data)
		} catch (err) {
			console.log(err)
		}
	}
}

export function* homeModule() {
	yield all([getHomeDataWorker()])
}
