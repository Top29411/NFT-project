import { createAction, handleActions } from "redux-actions"
import { blockchainSelector } from "./blockchain"
import { select, take, put, call,all } from "redux-saga/effects"

const namespace = "data"

const initialState = {
	loading: false,
	totalSupply: 0,
	cost: 0,
	error: false,
	errorMsg: "",
}

const GET_DATA = `${namespace}/GET_DATA`
const SET_DATA = `${namespace}/SET_DATA`
const SET_DATA_FAILED = `${namespace}/SET_DATA_FAILED`

export const getData = createAction(GET_DATA)
export const setData = createAction(SET_DATA)
export const setDataFailed = createAction(SET_DATA_FAILED)

export default handleActions(
	{
		[GET_DATA]: (state, { paload }) => ({
			...state,
			loading: true,
			error: false,
			errorMsg: "",
		}),
		[SET_DATA]: (state, { payload }) => ({
			...state,
			loading: false,
			totalSupply: payload.totalSupply,
			error: false,
			errorMsg: "",
		}),
		[SET_DATA_FAILED]: (state, { payload }) => ({
			...initialState,
			loading: false,
			error: true,
			errorMsg: payload,
		}),
	},
	initialState
)

export const dataSelector = state => state[namespace]

function* getDataWorker() {
	while (true) {
		yield take(GET_DATA)
		const { smartContract } = yield select(blockchainSelector)
		try {
			const getTotalSupply = yield call(smartContract.methods.totalSupply)
			const totalSupply = yield call(getTotalSupply.call)
			yield put(setData({ totalSupply }))
		} catch (err) {
			console.log(err)
			yield put(setDataFailed("Could not load data from contract."))
		}
	}
}

export function* dataModule(){
    yield all([
        getDataWorker()
    ])
}
