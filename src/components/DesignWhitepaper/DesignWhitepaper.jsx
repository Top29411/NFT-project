import React from "react"
import classNames from "classnames"
import Bg from "../Marketplace/Bg"
import Typography from "../ui/typography"
import styles from "./Whitepaper.module.sass"
import chery1 from "../Marketplace/chery1.png"
import chery2 from "../Marketplace/chery2.png"
import Slider from "../ui/slider"
import mintleft from "./1.svg"
import mintright from "./2.svg"

import chart from "./chart.png"
import social from "./social.jpg"


const Whitepaper = () => {
	return (
		<>
			<Bg className={styles.wrapper}>
				<img className="c1" src={chery1} alt="chery1" />
				<img className={styles.c2} src={chery2} alt="chery2" />
			</Bg>
			<div className={styles.mainminter}>
				<div className={styles.leftminter}>
					<div className={classNames(styles.container)}>
					<img className={styles.mainminter__image} src={mintleft} alt="img" />
					</div>
				</div>
				<div className={styles.minter}>
					<div className={classNames(styles.container)}>
						<Typography component="h2">🌺DESIGN WHITEPAPER🌺</Typography>
						<Typography >
							Yandere Shiba NFT collection contains 2000 unique furry artworks. It is deployed on Ethereum Mainnet and utilises ERC-20 integration, allowing a minting discount for $YANSH holders.
						</Typography>
						<br/>
						<Typography >
						Each Shiba is generated using a highly broad range of assets (up to 64 variations)
						</Typography>
						<br/>
						<Typography >
						We have a dynamic minting system, current mint price  and supply are displayed by our Yandere Shiba minter dApp.
						</Typography>
						<br/>
						<Typography >
						There is a Visual Novel in development, which is going to allow you to interact with your Shiba. <a href="/">Click here to see a demo!</a>
						</Typography>
						<br/>
						<Typography >
						Yandere Shiba collection is currently traded on <a href="https://crypto.com/nft/marketplace">opensea.io.</a> We are planning to make our own marketplace with unique features though!
						</Typography>
					</div>
				</div>
				<div className={styles.rightminter}>
					<div className={classNames(styles.container)}>
					<img className={styles.mainminter__image} src={mintright} alt="img" />
					</div>
				</div>
			</div>
		</>
	)
}

export default Whitepaper
