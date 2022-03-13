import classNames from "classnames"
import React from "react"
import styles from "./switcher.module.sass"

function Switcher({ children, className, checked, id, onChange }) {
	const htmlFor = id ? id : `checkbox-${Math.random()}`
	return (
		<>
			<input
				className={styles.switcher}
				type="checkbox"
				id={htmlFor}
				checked={checked}
				onChange={onChange}
			/>
			<label
				className={classNames(styles.switcher__label, className)}
				htmlFor={htmlFor}
			>
				{children}
			</label>
		</>
	)
}

export default Switcher
