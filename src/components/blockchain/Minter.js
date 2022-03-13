import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { blockchainSelector } from "../../store/reducers/blockchain"
import abi from "../../blockchain.utils/abi.json"
import {
	dataSelector,
	getData as getDataAction,
} from "../../store/reducers/data"

const CONFIG = {
	CONTRACT_ADDRESS: "0xe5fFeE8750C5f1463A865a0792Dd74E14397e91d",
	SCAN_LINK: process.env.REACT_APP_SCAN_LINK,
	NETWORK: {
		NAME: process.env.REACT_APP_NETWORK_NAME,
		SYMBOL: process.env.REACT_APP_NETWORK_SYMBOL,
		ID: process.env.REACT_APP_NETWORK_ID,
	},
	NFT_NAME: process.env.REACT_APP_NFT_NAME,
	SYMBOL: process.env.REACT_APP_SYMBOL,
	MAX_SUPPLY: process.env.REACT_APP_MAX_SUPPLY,
	WEI_COST: process.env.REACT_APP_WEI_COST,
	DISPLAY_COST: process.env.REACT_APP_DISPLAY_COST,
	GAS_LIMIT: process.env.REACT_APP_GAS_LIMIT,
	MARKETPLACE: process.env.REACT_APP_MARKETPLACE,
	MARKETPLACE_LINK: process.env.REACT_APP_MARKETPLACE_LINK,
	SHOW_BACKGROUND: process.env.REACT_APP_SHOW_BACKGROUND,
}

export const useMinter = () => {
	const dispatch = useDispatch()
	const blockchain = useSelector(blockchainSelector)
	const data = useSelector(dataSelector)
	const [claimingNft, setClaimingNft] = useState(false)
	const [feedback, setFeedback] = useState(`100 mints left untill 0.02 ETH price TOTAL SUPPLY 0/2000`);
	const [mintAmount, setMintAmount] = useState(1)

	const claimNFTs = () => {
		let cost = CONFIG.WEI_COST
		let gasLimit = CONFIG.GAS_LIMIT
		let totalCostWei = String(cost * mintAmount)
		let totalGasLimit = String(gasLimit * mintAmount)
		let have_erc20 = 1
		console.log("Cost: ", totalCostWei)
		console.log("Gas limit: ", totalGasLimit)
		console.log(CONFIG.CONTRACT_ADDRESS);
		setFeedback(`Minting your ${CONFIG.NFT_NAME}...`)
		setClaimingNft(true)
		blockchain.smartContract.methods
			.mint(mintAmount, have_erc20)
			.send({
				gasLimit: String(totalGasLimit),
				to: CONFIG.CONTRACT_ADDRESS,
				from: blockchain.account,
				value: totalCostWei,
			})
			.once("error", (err) => {
				console.log(err)
				setFeedback("Sorry, something went wrong please try again later.")
				setClaimingNft(false)
			})
			.then((receipt) => {
				console.log(receipt)
				setFeedback(
					`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
				)
				setClaimingNft(false)
				dispatch(getDataAction(blockchain.account))
			})
	}

	const decrementMintAmount = () => {
		let newMintAmount = mintAmount - 1
		if (newMintAmount < 1) {
			newMintAmount = 1
		}
		setMintAmount(newMintAmount)
	}

	const incrementMintAmount = () => {
		let newMintAmount = mintAmount + 1
		if (newMintAmount > 10) {
			newMintAmount = 10
		}
		setMintAmount(newMintAmount)
	}

	return {
		config: CONFIG,
		data,
		abi,
		blockchain,
		mintAmount,
		feedback,
		decrementMintAmount,
		incrementMintAmount,
		claimingNft,
		claimNFTs,
		getData: getDataAction,
	}
}
