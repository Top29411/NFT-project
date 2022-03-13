import classNames from "classnames"
import React, { useContext } from "react"
import { Background } from "../../Layout/BackgrondContex"
import styles from "./Typography.module.sass"

const Typography = ({ component: Component = "p", children, className, activeColor='', style }) => {
	const { whiteFone } = useContext(Background)
	return (
		<Component
			className={classNames(
				styles.default,
				{ [styles.active]: whiteFone },
				{ [activeColor]: whiteFone },
				className
			)}
			style={style}
		>
			{children}
		</Component>
	)
}

export default Typography
