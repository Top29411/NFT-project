import React from "react"
import { useDispatch } from "react-redux"
import { connect } from "../../store/reducers/blockchain"
import ButtonPrimary from "../ui/buttons/ButtonPrimary"
import { useMinter } from "./Minter"
import Modal from "../ui/modal"
import styles from "./style.module.sass"

const truncate = (input, len) =>
	input.length > len
		? `${input.substring(0, len)}...${input.slice(-len)}`
		: input

const BlockchainButton = ({ className }) => {
	const { abi, config,blockchain } = useMinter()
	const dispatch = useDispatch()

	function handleConnect() {
		dispatch(connect({ config, abi }))
	}

	return (
		<div className={className}>
			{blockchain.account === "" || blockchain.smartContract === null ? (
				<ButtonPrimary onClick={handleConnect} className={styles.button}>
					{"Connect <3"}
				</ButtonPrimary>
			) : (
				<ButtonPrimary>
					{truncate(blockchain.account, 4)}
				</ButtonPrimary>
			)}
		</div>
	)
}

export default BlockchainButton
