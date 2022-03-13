import React from "react"
import { Scrollbars } from 'react-custom-scrollbars';
import styles from "./Marketplace.module.sass"
import Typography from "../ui/typography/Typography"
import Switchdiv from "../ui/switchdiv/Switchdiv"
import { useDispatch } from "react-redux"
import { useMinter } from "../blockchain/Minter"
import Bg from "./Bg"
import chery1 from "./chery1.png"
import chery2 from "./chery2.png"
import faqmint from "./1.svg"
import { Link ,useNavigate   } from "react-router-dom"
import typography from "../ui/typography";

const Marketplace = () => {
	return (
		<>
			<Bg className={styles.wrapper}>
				<img className={styles.c1} src={chery1} alt="chery1" />
				<img className={styles.c2} src={chery2} alt="chery2" />
			</Bg>
			<Minter />
		</>
	)
}

export default Marketplace

export function Minter() {
	const navigate = useNavigate();
	const {
		blockchain,
		mintAmount,
		// feedback,
		decrementMintAmount,
		incrementMintAmount,
		claimingNft,
		claimNFTs,
		getData,
	} = useMinter()

	const dispatch = useDispatch()

	function handleBuy() {
		claimNFTs()
		if (blockchain.account !== "" && blockchain.smartContract !== null) {
			dispatch(getData(blockchain.account))
		}
	}
	function routeChange(){
		navigate("../designwhitepaper")
	}
	const qas = [
		{
			q:'How much for a Shiba?',
			a: 'We have a dynamic minting system, current mint price  and supply are displayed by our Yandere Shiba minter dApp.'
		},
		{
			q:'How do I mint a Shiba?',
			a: 'Connect your wallet, make sure you’re on Ethereum Mainnet, choose how many Shibas you want to mint and press buy.  Afterwards confirm your purchase and enjoy!'
		},
		{
			q:'What does the “$YANSH holder discount” mean?',
			a: 'Holders of our Yandere Shiba token can apply a 50% discount to the minting fee! If you want to purchase our token and get a discount, click this link.'
		},
		{
			q:'Where can I trade my Shiba NFTs after minting?',
			a: 'Here’s the OpenSea page of our collection LINK In the future we will build out own marketplace with unique mechanics!'
		},
		{
			q:'What kind of benefits am I eglible for after minting?',
			a: 'You get an access to out Visual Novel and can interact with your Shiba there.'
		},
		{
			q:'I have an error or want to ask a question.',
			a: 'Join out telegram group at LINK, we are ready to help!'
		}
	]
	const str_1 =<p><label className={styles.price_confirm}>0.01 ETH</label>0.01 ETH Per Shiba<br/><label className={styles.confirm_holder}>holder discount is applied</label></p>
	const str_2 =<p><label className={styles.price_confirm}>0.01 ETH</label> Per Shiba</p>
	return (
		<div className={styles.faq}>
			<div className={styles.minterfaq}>
				<div className={styles.sumfaq}>
					<div>
						<div >
						<Typography component="h1">🌺NFT MINTER FAQ🌺</Typography>
						</div>
						<div className={styles.scrollbartxt}>
							<Scrollbars
								style={{ height: 330 }}>
								{qas.map(d => <>
								 <Typography><p style={{fontWeight: 'bold'}}> Q: {d.q}</p></Typography>
								 <Typography><p>A: {d.a}</p></Typography>
								</>)}

							</Scrollbars>
						</div>
					</div>
				</div>
				<div className={styles.displayBtn}>
					<button className={styles.whitebtn}
						type="button"
						name="submit"
						onClick={routeChange}
					>
						<Typography className={styles.textStyle} activeColor={styles.textColor}>Lead Whitepaper</Typography>
					</button>
					<button className={styles.whitebtn}
						type="button"
						name="submit"
						onClick={routeChange}
					>
						<Typography className={styles.textStyle} activeColor={styles.textColor} >Design Whitepaper</Typography>
					</button>
				</div>
			</div>
			<div className={styles.minter}>
				<div className={styles.container}>
					<img className={styles.minter__image} src={faqmint} alt="img" />
					<Switchdiv className={styles.minter__pubrec}>
						<Typography style={{fontSize :'30px'}}>Out of Service</Typography>
					</Switchdiv>
					<Typography><p>100 mints left untill<label> 0.02 ETH </label>price <br/>TOTAL SUPPLY 0/2000</p></Typography>
					<div className={styles.minter__pubrec_down}>
						<Switchdiv className={styles.minter__pubrec_budget}>
							<Typography style={{ lineHeight: "1.2",fontSize :'15px', transform: 'rotate(5deg)', textAlign: 'left' , fontWeight: 'bold'}}>Our budget is inaccessible.<br/><br/>We need half an ether to launch contract.
								we will raise it with out community or sell our token allocation.
								when it moons.
							</Typography>
						</Switchdiv>
						<div className={styles.calc}>
							<CalcButton
								disabled={claimingNft ? 1 : 0}
								onClick={decrementMintAmount}
							>
								<Typography component="b"> - </Typography>
							</CalcButton>
							<Typography component="span">{mintAmount}</Typography>
							<CalcButton
								disabled={claimingNft ? 1 : 0}
								onClick={incrementMintAmount}
							>
								<Typography component="b">+</Typography>
							</CalcButton>
						</div>
						<button className={styles.mintbtn}
							type="button"
							name="submit"
							disabled={claimingNft ? 1 : 0}
							onClick={handleBuy}
						>
							<Typography component="b">{claimingNft ? "Loading" : "MINT!"}</Typography>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

function CalcButton({ children, ...props }) {
	return (
		<button {...props} type="button" name="calc" className={styles.calc_button}>
			<svg width="100%" height="100%" viewBox="0 0 47 47" fill="none">
				<path
					d="M0.999998 23.6423C0.999999 11.2159 11.0736 1.14233 23.5 1.14234C35.9264 1.14234 46 11.2159 46 23.6423C46 36.0687 35.9264 46.1423 23.5 46.1423C11.0736 46.1423 0.999997 36.0687 0.999998 23.6423Z"
					stroke="url(#paint0_linear_3_21)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_3_21"
						x1="14.4643"
						y1="33.4995"
						x2="9.53572"
						y2="8.85662"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#FF9DD0" />
						<stop offset="1" stopColor="#EA3529" />
					</linearGradient>
				</defs>
			</svg>
			{children}
		</button>
	)
}
