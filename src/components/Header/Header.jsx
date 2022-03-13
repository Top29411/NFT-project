import React, { useContext } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./Header.module.sass"
import Logo from "./Logo"
import { Link ,Redirect  } from "react-router-dom"
import FoneButton from "../ui/buttons/FoneButton"
import { Background } from "../Layout/BackgrondContex"
import Telegramm from "../ui/buttons/Telegramm"
import Twitter from "../ui/buttons/Twitter"
import MobileMenu from "./MobileMenu/MobileMenu"
import classNames from "classnames"
import BlockchainButton from "../blockchain/BlockchainButton"
import { getHomeData, homeDataSelector } from "../../store/reducers/home"

const Header = () => {
	const { setWhiteFone, whiteFone } = useContext(Background)

	return (
		<>
			<header className={styles.header}>
				<div className={styles.logo__wrapper}>
					<Logo />
				</div>
				<FoneButton
					onChange={setWhiteFone}
					checked={whiteFone}
					className={styles.mobile}
				/>
				<Navigation className={styles.mobile} />
				<Social active={!whiteFone} className={styles.mobile} />
				<BlockchainButton className={styles.chain} />
				<MobileMenu>
					<FoneButton onChange={setWhiteFone} checked={whiteFone} />
					<Navigation />
				</MobileMenu>
			</header>

			{/* <header className={styles.header__mobile}>
				<div className={styles.logo__wrapper}>
					<Logo />
				</div>
				<BlockchainButton />
				<MobileMenu>
					<FoneButton onChange={setWhiteFone} checked={whiteFone} />
					<Navigation />
				</MobileMenu>
			</header> */}
		</>
	)
}

export default Header

const Navigation = ({ className }) => (
	<nav className={classNames(styles.nav, className)}>
		<FoneLink to="/swap">Swap</FoneLink>
		<FoneLink to="how-to-buy">How to buy</FoneLink>
		<FoneLink to="/forge-and-marketplace">Forge & Marketplace</FoneLink>
		<FoneLink to="/whitepaper">Whitepaper</FoneLink>
		{/* <FoneLink to="/designwhitepaper">DesignWhitepaper</FoneLink> */}
	</nav>
)	

export function Social({ active, className }) {
	const { layoutConfig } = useSelector(homeDataSelector)
	const dispatch = useDispatch()
	React.useEffect(() => {
		if (!layoutConfig) {
			dispatch(getHomeData())
		}
	}, [layoutConfig])
	if (!layoutConfig) return null
	return (
		<div className={classNames(styles.social, className)}>
			<Telegramm active={active} url={layoutConfig.telegramUrl} />
			<Twitter active={active} url={layoutConfig.twitterUrl} />
		</div>
	)
}

export function FoneLink(props) {
	const { whiteFone } = useContext(Background)
	return <Link style={{ color: whiteFone ? "#000" : "#fff" }} {...props} />
}
