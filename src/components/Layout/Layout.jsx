import React, { useState } from "react"
import classNames from "classnames"
import styles from "./Layout.module.sass"
import { Background } from "./BackgrondContex"

const Layout = ({ children }) => {
	const [whiteFone, setWhiteFone] = useState(true)

	function handleChange() {
		setWhiteFone(!whiteFone)
	}

	return (
		<div
			className={classNames(styles.layout, {
				[styles.layout_white]: whiteFone,
			})}
		>
			<Background.Provider value={{ setWhiteFone: handleChange, whiteFone }}>
				{children}
			</Background.Provider>
		</div>
	)
}

export default Layout
