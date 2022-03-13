import classNames from "classnames"
import React, { useContext } from "react"
import { Background } from "../../Layout/BackgrondContex"
import styles from "./Switchdiv.module.sass"

const Switchdiv = ({ component: Component = "div", children, className, style }) => {
	const { whiteFone } = useContext(Background)
	return (
		<Component
			className={classNames(
				styles.default,
				{ [styles.active]: whiteFone },
				className
			)}
			style={style}
		>
			{children}
		</Component>
	)
}

export default Switchdiv
