import classNames from "classnames"
import React from "react"
import MoonIcon from "../../icons/MoonIcon"
import SunIcon from "../../icons/SunIcon"
import Switcher from "../switcher/Switcher"
import styles from "./buttons.module.sass"

const FoneButton = ({ onChange, checked, className }) => {
	return (
		<div className={classNames(styles.foneButton, className)}>
			<Switcher onChange={onChange} checked={checked}>
				<SunIcon
					className={classNames(styles.sun, { [styles.sun_active]: !checked })}
				/>
				<MoonIcon
					className={classNames(styles.moon, {
						[styles.moon_active]: checked,
					})}
				/>
			</Switcher>
		</div>
	)
}

export default FoneButton
