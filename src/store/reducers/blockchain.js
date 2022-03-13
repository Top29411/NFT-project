import { createAction, handleActions } from "redux-actions"
import { all, take, put, call } from "redux-saga/effects"
import Web3EthContract from "web3-eth-contract"
import Web3 from "web3"
import { getData } from "./data"

const namespace = "blockchain"

const CONNECTION_REQUEST = `${namespace}/CONNECTION_REQUEST`
const CONNECTION_SUCCESS = `${namespace}/CONNECTION_SUCCESS`
const CONNECTION_FAILED = `${namespace}/CONNECTION_FAILED`
const UPDATE_ACCOUNT = `${namespace}/UPDATE_ACCOUNT`
const UPDATE_ACCOUNT_REQUEST = `${namespace}/UPDATE_ACCOUNT_REQUEST`

const CONNECT = `${namespace}/CONNECT`

export const connectRequest = createAction(CONNECTION_REQUEST)
export const connectSuccess = createAction(CONNECTION_SUCCESS)
export const connectFailed = createAction(CONNECTION_FAILED)
export const updateAccount = createAction(UPDATE_ACCOUNT)
export const updateAccountRequest = createAction(UPDATE_ACCOUNT_REQUEST)

export const connect = createAction(CONNECT)

const initialState = {
	loading: false,
	account: null,
	smartContract: null,
	web3: null,
	errorMsg: "",
}

export default handleActions(
	{
		[CONNECTION_REQUEST]: (state) => ({ ...state, loading: true }),
		[CONNECTION_SUCCESS]: (
			state,
			{ payload: { account, smartContract, web3 } }
		) => ({
			...state,
			loading: false,
			account,
			smartContract,
			web3,
		}),
		[CONNECTION_FAILED]: (state, { payload }) => ({
			...initialState,
			loading: false,
			errorMsg: payload,
		}),
		[UPDATE_ACCOUNT]: (state, { payload: { account } }) => ({
			...state,
			account,
		}),
	},
	initialState
)

export const blockchainSelector = (state) => state[namespace]

function* connectWorker() {
	while (true) {
		const {
			payload: { config, abi },
		} = yield take(CONNECT)
		console.log(config,'dddd')
		yield put(connectRequest())
		const { ethereum } = window
		const metamaskIsInstalled = ethereum && ethereum.isMetaMask
		if (metamaskIsInstalled) {
			Web3EthContract.setProvider(ethereum)
			let web3 = new Web3(ethereum)
			try {
				const accounts = yield call(ethereum.request, {
					method: "eth_requestAccounts",
				})

				const networkId = yield call(ethereum.request, {
					method: "net_version",
				})
				if (networkId === config.NETWORK.ID) {
					const smartContract = new Web3EthContract(
						abi,
						config.CONTRACT_ADDRESS
					)
					yield put(
						connectSuccess({
							account: accounts[0],
							smartContract,
							web3,
						})
					)
					// Add listeners start
					ethereum.on("accountsChanged", function* (accounts) {
						yield put(updateAccount({ account: accounts[0] }))
					})
					ethereum.on("chainChanged", () => {
						window.location.reload()
					})
					// Add listeners end
				} else {
					yield put(connectFailed(`Change network to ${config.NETWORK.NAME}.`))
				}
			} catch (err) {
				console.log(err)
			}
		} else {
			yield put(connectFailed("Install Metamask."))
		}
	}
}

function* updateAccountWorker() {
	while (true) {
		const { payload } = yield take(UPDATE_ACCOUNT)
		yield put(getData(payload))
	}
}

export function* blockchainModule() {
	yield all([connectWorker(), updateAccountWorker()])
}
