import React, { useContext } from "react"
import { Background } from "../Layout/BackgrondContex"
import styles from "./Card.module.sass"
import ButtonPrimary from "../ui/buttons/ButtonPrimary"
import classNames from "classnames"

const Card = ({ src, buy = true, small = false, link }) => {
	const { whiteFone } = useContext(Background)
	return (
		<div
			className={classNames(
				styles.wrapper,
				{ [styles.active]: whiteFone },
				{ [styles.wrapper__small]: small }
			)}
		>
			<img
				className={classNames(styles.img, { [styles.img_small]: small })}
				src={src}
				alt={"img"}
			/>
			{buy && (
				<ButtonPrimary href={link} className={styles.buy}>
					buy
				</ButtonPrimary>
			)}
		</div>
	)
}

export default Card
