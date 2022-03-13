import React, { useContext } from "react"
import { FoneLink, Social } from "../Header/Header"
import Logo from "../Header/Logo"
import { Background } from "../Layout/BackgrondContex"
import FoneButton from "../ui/buttons/FoneButton"
import Typography from "../ui/typography/Typography"
import styles from "./Footer.module.sass"

const Footer = () => {
	const { setWhiteFone, whiteFone } = useContext(Background)
	return (
		<footer className={styles.footer}>
			<div className={styles.logo}>
				<Logo text={false} />
			</div>

			<nav className={styles.footer__nav}>
				<FoneLink to="/swap">Swap</FoneLink>
				<FoneLink to="how-to-buy">How to buy</FoneLink>
				<FoneLink to="/forge-and-marketplace">Forge & Marketplace</FoneLink>
				<FoneLink to="#">Whitepaper</FoneLink>
			</nav>
			<Social
				noButton={true}
				active={!whiteFone}
				className={styles.footer__social}
			/>

			<Typography component="p">
				Get Yandere Shiba before she gets you - a lewd token on the undisputable
				L1 leader chain Ethereum.{" "}
			</Typography>
			<FoneButton
				onChange={setWhiteFone}
				checked={whiteFone}
				className={styles.fone_button}
			/>
			<Typography component="small">&copy; Yandere Shiba, 2021</Typography>
		</footer>
	)
}

export default Footer
