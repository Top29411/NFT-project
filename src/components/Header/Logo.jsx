import React from "react"
import { Link } from "react-router-dom"
import logo from "./Logo.png"
import styles from "./Header.module.sass"
import Typography from "../ui/typography"

const Logo = ({ text = true }) => {
	return (
		<Link className={styles.logo} to="/">
			<img src={logo} alt="logo" />
			{text && (
				<Typography>
					Yandere <br />
					Shiba
				</Typography>
			)}
		</Link>
	)
}

export default Logo
