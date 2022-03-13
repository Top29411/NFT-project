import React, { useContext } from "react"
import { Background } from "../Layout/BackgrondContex"
import Main from "../Layout/Main"
import Typography from "../ui/typography"
import img4 from "./img4.jpg"
import img1 from "./img1.png"
import img2 from "./ethereum.png"
import img3 from "./swap.png"

import styles from "./HowToBy.module.sass"
import classNames from "classnames"

const HowToBuy = () => {
	const { whiteFone } = useContext(Background)
	return (
		<Main>
			<section className={styles.wrapper}>
				<Typography className={styles.title} component="h1">
					How to buy $YANSH
				</Typography>
				<div className={styles.bgc}>
					<div className={styles.step__wrapper}>
						<div className={classNames(styles.step__info)}>
							<Typography component="h6">Step 1</Typography>
							<Typography component="h2">Create a wallet</Typography>
							<ul>
								<Typography component="li">
									Install MetaMask in your browser of choice following the
									directions here (
									<a href="https://metamask.io/download.html">
										https://metamask.io/download.html
									</a>
									. Remember to keep your seed phrase safe!
								</Typography>
							</ul>
						</div>
						<div
							className={classNames(styles.step__image, styles.image__first)}
						>
							<img className={styles.img1} src={img1} />
						</div>
					</div>
					<div className={styles.step__wrapper}>
						<div className={classNames(styles.step__info)}>
							<Typography component="h6">Step 2</Typography>
							<Typography component="h2">Transfer ETH</Typography>
							<ul>
								<Typography component="li">
									Purchase ETH on your exchange of choice and send the ETH to
									your MetaMask wallet.
								</Typography>
							</ul>
						</div>
						<div
							className={classNames(styles.step__image, styles.image__first)}
						>
							<img className={styles.img2} src={img2} />
						</div>
					</div>
					<div className={styles.step__wrapper}>
						<div className={classNames(styles.step__info)}>
							<Typography component="h6">Step 3</Typography>
							<Typography component="h2">Swap ETH for YANSH</Typography>
							<ul>
								<Typography component="li">
									Click on the Swap button at the top of our website and input
									the amount of ETH you want to swap. Make sure to have a
									sufficient amount of ETH to cover the gas fees.
								</Typography>
							</ul>
						</div>
						<div
							className={classNames(styles.step__image, styles.image__first)}
						>
							<img src={img3} />
						</div>
					</div>
					<div className={classNames(styles.step__wrapper)}>
						<div className={classNames(styles.step__info, styles.img4)}>
							<Typography component="h6">Step 4</Typography>
							<Typography component="h2">Hold!</Typography>
							<ul>
								<Typography component="li">
									Enjoy 1% reflections from the trades made and check out our
									new releases!{" "}
								</Typography>
							</ul>
						</div>
						<div
							className={classNames(styles.step__image, styles.image__first)}
						>
							<img className={styles.img5} src={img4} />
						</div>
					</div>
				</div>
			</section>
		</Main>
	)
}

export default HowToBuy
