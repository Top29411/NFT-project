import classNames from "classnames"
import React from "react"
import styles from "./buttons.module.sass"

const ButtonPrimary = ({
	children,
	className = "",
	href = false,
	...props
}) => {
	const Tag = href ? "a" : "button"

	const other = {}
	if (href) {
		other.target = "_blank"
		other.href = href
	}
	return (
		<Tag
			{...props}
			{...other}
			className={classNames(styles.button__primary, className)}
		>
			{children}
		</Tag>
	)
}

export default ButtonPrimary
