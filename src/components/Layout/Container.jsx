import classNames from "classnames"
import React from "react"
import styles from "./Layout.module.sass"

const Container = ({ children, component: Component = "div", className, style }) => {
	return (
		<Component className={classNames(styles.container, className)} style={style}>
			{children}
		</Component>
	)
}

export default Container
