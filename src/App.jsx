import { Route, Routes, BrowserRouter } from "react-router-dom"
import React from "react"
import "./App.sass"
import Header from "./components/Header"
import Home from "./components/Home"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import FoneIconHeader from "./components/icons/FoneIconHeader"
import HowToBuy from "./components/HowToBuy"
import Swap from "./components/Swap"
import { useDispatch, useSelector } from "react-redux"
import { blockchainSelector } from "./store/reducers/blockchain"
import { getData as getDataAcion } from "./store/reducers/data"
import Marketplace from "./components/Marketplace"
import Whitepaper from "./components/Whitepaper"
import DesignWhitepaper from "./components/DesignWhitepaper"

function App() {
	const dispatch = useDispatch()
	const blockchain = useSelector(blockchainSelector)

	const getData = () => {
		if (blockchain.account !== "" && blockchain.smartContract !== null) {
			dispatch(getDataAcion(blockchain.account))
		}
	}

	React.useEffect(() => {
		getData()
	}, [blockchain.account])

	return (
		<div className="App">
			<FoneIconHeader className={"foneIconHeader"} />
			<BrowserRouter>
				<Layout>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/how-to-buy" element={<HowToBuy />} />
						<Route path="/forge-and-marketplace" element={<Marketplace />} />
						<Route path="/swap" element={<Swap />} />
						<Route path="/whitepaper" element={<Whitepaper />} />
						<Route path="/designwhitepaper" element={<DesignWhitepaper />} />
					</Routes>
					<Footer />
				</Layout>
			</BrowserRouter>
		</div>
	)
}

export default App
