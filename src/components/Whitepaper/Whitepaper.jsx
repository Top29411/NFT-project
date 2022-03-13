import React from "react"
import classNames from "classnames"
import Bg from "../Marketplace/Bg"
import Typography from "../ui/typography"
import styles from "./Whitepaper.module.sass"
import chery1 from "../Marketplace/chery1.png"
import chery2 from "../Marketplace/chery2.png"
import Slider from "../ui/slider"

import chart from "./chart.png"
import social from "./social.jpg"

const Whitepaper = () => {
	return (
		<>
			<Bg className={styles.wrapper}>
				<img className="c1" src={chery1} alt="chery1" />
				<img className="c2" src={chery2} alt="chery2" />
			</Bg>
			<div className={styles.minter}>
				<Slider
					options={{
						dots: false,
						infinite: true,
						speed: 500,
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
						autoplay: true,
						autoplaySpeed: 2000,
					}}
				>
					<div className={classNames(styles.container, styles.first)}>
						<Typography component="h1">Yandere Shiba Whitepape</Typography>
					</div>
					<div className={classNames(styles.container)}>
						<Typography component="h2">What is Yandere Shiba?</Typography>
						<Typography component="p">
							Yandere Shiba is a project focused on art and furries which was
							launched on October 10th, 2021. Our aim is to create a unique
							experience within the NFT niche.The idea is to present an
							interactive visual novel powered by our NFT collection.This will
							allow users to experience the novel in their desired fashion.
							Since selling furry characters is a huge niche outside of
							cryptocurrency, we aim to fill it and ultimately bring relevance
							not only to Yandere Shiba, but to the entire cryptosphere.
						</Typography>
					</div>
					<div className={classNames(styles.container)}>
						<Typography component="h1">The Token $YANSH</Typography>
						<ul>
							<Typography component="li">
								Our token was launched on the Ethereum network.
							</Typography>
							<Typography component="li">
								Total supply at launch: 1,000,000,000 $YANSH
							</Typography>
							<Typography component="li">
								Number of tokens burned: 83,877,961 $YANSH
							</Typography>
							<Typography component="li">
								Circulating supply: 916,122,039 $YANSH
							</Typography>
							<Typography component="li">Redistribution: 1%</Typography>
							<Typography component="li">Liquidity tax: 5%</Typography>
							<Typography component="li">Operations tax: 2%</Typography>
						</ul>
						<Typography component="h3">Utility</Typography>
						<Typography component="p">
							Payment option for dedicated NFT collections.
						</Typography>
						<Typography component="p">
							Owning $YANSH or one of the dedicated NFT’s makes the users
							eligiblefor participation within our raffle system.
						</Typography>
					</div>
					<div className={classNames(styles.container)}>
						<Typography component="h1">The Market</Typography>
						<Typography component="p">
							The data suggests that the Furry market is growing rapidly since
							it’s
						</Typography>
						<Typography component="p">
							birth in 1990, the following graph represents the Furry
							conventionsattendance which gives us an understanding of the trend
							that exists withinthe market today. We aim to become a first-mover
							and popularize the conceptof owning Furries as NFT’s.
						</Typography>
						<img className={styles.chart} src={chart} alt="" />
					</div>
					<div className={classNames(styles.container)}>
						<Typography component="h1">What have we done?</Typography>
						<Typography component="p">
							Since launch we have done the following things:
						</Typography>
						<ul>
							<Typography component="li">
								Update the website & brand design
							</Typography>
							<Typography component="li">
								Update the website functionality (Swap & Minter)
							</Typography>
							<Typography component="li">
								Maintain sufficient liquidity within our Uniswap v2 Pool.
							</Typography>
							<Typography component="li">
								Successfully listed on CoinGecko and other aggregators
							</Typography>
							<Typography component="li">
								Launched our NFT collection
							</Typography>
						</ul>
					</div>
					<div className={classNames(styles.container)}>
						<Typography component="h2">What are we planning to do?</Typography>

						<ul>
							<Typography component="li">
								Commence marketing and PR alongside our raffle
							</Typography>
							<Typography component="li">Increase the team size</Typography>
							<Typography component="li">CMC listing</Typography>
							<Typography component="li">
								Continue the development of our Visual Novel
							</Typography>
							<Typography component="li">
								Commence the development of our dedicated NFT marketplace
							</Typography>
						</ul>
					</div>
					<div className={classNames(styles.container)}>
						<img className={styles.social} src={social} alt="" />
						<Typography component="h2">
							Follow our socials for more information!
						</Typography>
					</div>
				</Slider>
			</div>
		</>
	)
}

export default Whitepaper
