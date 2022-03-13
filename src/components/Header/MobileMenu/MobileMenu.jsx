import classNames from "classnames"
import React, { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Background } from "../../Layout/BackgrondContex"

import styles from "./index.module.sass"

const MobileMenu = ({ children }) => {
	const [openMenu, setOpenMenu] = useState(false)
	const { pathname } = useLocation()
	const { whiteFone } = useContext(Background)
	useEffect(() => {
		if (openMenu) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
	}, [openMenu])

	useEffect(() => {
		setOpenMenu(false)
	}, [pathname])

	return (
		<div className={styles.wrapper}>
			<MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
			<div
				className={classNames(styles.menu__content, {
					[styles.menu__content_active]: openMenu,
					[styles.white]: whiteFone,
				})}
			>
				{children}
			</div>
		</div>
	)
}

export default MobileMenu

function MenuButton({ openMenu, setOpenMenu }) {
	return (
		<button
			type="button"
			className={styles.btn}
			onClick={() => {
				setOpenMenu((s) => !s)
			}}
		>
			{openMenu ? <OpenMenuIcon /> : <MenuIcon />}
		</button>
	)
}

function MenuIcon() {
	return (
		<svg
			width="17"
			height="14"
			viewBox="0 0 17 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M1 1H16" stroke="#1E031B" strokeLinecap="round" />
			<path d="M1 7H16" stroke="#1E031B" strokeLinecap="round" />
			<path d="M1 13H16" stroke="#1E031B" strokeLinecap="round" />
		</svg>
	)
}

function OpenMenuIcon() {
	return (
		<svg
			width="13"
			height="13"
			viewBox="0 0 13 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 1.00014L11.6066 11.6067M1.00014 11.6066L11.6067 1"
				stroke="#1E031B"
				strokeLinecap="round"
			/>
		</svg>
	)
}
