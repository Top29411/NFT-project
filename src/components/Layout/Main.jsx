import classNames from "classnames"
import React, { useContext } from "react"
import { Background } from "./BackgrondContex"
import styles from "./Layout.module.sass"

const Main = ({ children, component: Component = "div" }) => {
	const { whiteFone } = useContext(Background)
	return (
		<main
			className={classNames(styles.main, { [styles.main_active]: whiteFone })}
		>
			<Component>
				<div className={styles.overflow}>{children}</div>
			</Component>
		</main>
	)
}

export default Main
