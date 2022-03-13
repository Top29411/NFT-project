import { all, call, spawn } from "redux-saga/effects"
import { blockchainModule } from "../reducers/blockchain"
import { dataModule } from "../reducers/data"
import { homeModule } from "../reducers/home"

export default function* sagas() {
	const sagas = [blockchainModule, dataModule, homeModule]

	const retry = sagas.map((saga) => {
		return spawn(function* () {
			while (true) {
				try {
					yield call(saga)
					break
				} catch (error) {
					console.log(error)
				}
			}
		})
	})

	yield all(retry)
}
