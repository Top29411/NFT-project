import React from "react"
import ButtonPrimary from "../ui/buttons/ButtonPrimary"
import styles from "./Card.module.sass"
import classNames from "classnames"

const BuyCard = ({ src, buy = true, small = false, link }) => {
	return (
		<div className={styles.buy__card}>
			<div className={styles.buy__card_item}>
				<img
					className={classNames(styles.img, {
						[styles.img_small]: small,
					})}
					src={src}
					alt={"img"}
				/>
				{buy && (
					<ButtonPrimary href={link} className={styles.buy}>
						buy
					</ButtonPrimary>
				)}
			</div>
			<div className={styles.buy__card_item}>
				<img
					className={classNames(styles.img, {
						[styles.img_small]: small,
					})}
					src={src}
					alt={"img"}
				/>
				{buy && (
					<ButtonPrimary href={link} className={styles.buy}>
						chart
					</ButtonPrimary>
				)}
			</div>
			<div className={styles.buy__card_item}>
				<img
					className={classNames(styles.img, {
						[styles.img_small]: small,
					})}
					src={src}
					alt={"img"}
				/>
				{buy && (
					<ButtonPrimary href={link} className={styles.buy}>
						how to buy
					</ButtonPrimary>
				)}
			</div>
		</div>
	)
}

export default BuyCard
