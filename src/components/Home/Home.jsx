import React, { useContext, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./Home.module.sass"
import Main from "../Layout/Main"
import Container from "../Layout/Container"
import Typography from "../ui/typography"
import Card, { CardList } from "../card"
import { Background } from "../Layout/BackgrondContex"
import classNames from "classnames"
import Circle from "../ui/circles"
import IconWhite from "../ui/circles/IconWhite"
import IconRed from "../ui/circles/IconRed"
import HomeBg from "./Home.bg"
import art1 from "./new_art/art1.svg"
import art2 from "./new_art/art2.svg"
import art3 from "./new_art/art3.svg"
import art4 from "./new_art/art4.svg"
import ansa3 from "./new_art/ansa3.svg"
import yacaec1 from "./new_art/yacaec1.svg"
import Visual_peak from "./new_art/Visual novel sneak peak.svg"
import f_background from "./new_art/f_background.svg"
import f_backletter from "./new_art/f_backletter.svg"
import z_sign from "./new_art/z-sign.svg"
import framePicture from "./new_art/frame.svg"
import token_icon_1 from "./new_art/token_icon_1.svg"
import token_icon_2 from "./new_art/token_icon_2.svg"
import token_icon_3 from "./new_art/token_icon_3.svg"
import sakura_2 from "./new_art/sakura_2.svg"
import sakura_3 from "./new_art/sakura_3.svg"
import featured_1 from "./new_art/featured_1.svg"
import featured_2 from "./new_art/featured_2.svg"
import featured_3 from "./new_art/featured_3.svg"
import featured_4 from "./new_art/featured_4.svg"

import { getHomeData, homeDataSelector } from "../../store/reducers/home"
import BuyCard from "../card/BuyCard"

const Home = () => {
	const { whiteFone } = useContext(Background)
	const dispatch = useDispatch()
	const {
		homepageConfig,
		layoutConfig,
		heading,
		featured,
		ntf,
		tokenomiks,
		team,
	} = useSelector(homeDataSelector)

	React.useEffect(() => {
		dispatch(getHomeData())
	}, [])

	const text = useMemo(() => {
		if (homepageConfig?.text) {
			return homepageConfig?.text.split(`\n`)
		}
		return []
	}, [homepageConfig?.text])

	if (!homepageConfig || !layoutConfig) return null

	return (
		<div>
			<Main component={HomeBg}>
				<div className={styles.banner}>
					<img
						className={styles.mainImg}
						src={homepageConfig?.mainImage}
						alt="banner"
					/>
				</div>
				
				<div>
					<img src={sakura_2} className={styles.sakura_2} alt="sakura_left" />						
				</div>
				<div>
					<img src={sakura_3} className={styles.sakura_3} alt="sakura_right" />						
				</div>
				<div className={styles.backgroundblue_1}></div>
				<div className={styles.backgroundblue_2}></div>
				<div className={styles.visual_novel_div}>
					<Typography className={styles.visual_novel_div__content}>Visual novel <br/> sneak peak</Typography>
				</div>
				<Container className={styles.comming}>
					<div className={styles.comming__left}>
						<Typography component="h2">I am coming  <br/></Typography><Typography component="h2" activeColor={styles.textColor}>for you :3</Typography>
						<Typography style={{fontSize :'21px'}}>
							Get Yandere Shiba before she gets you - a lewd token on the
							undisputable L1 leader chain Ethereum. Once you touch her there is
							no coming back, she will launch you towards the stars whatever it
							costs.
						</Typography>
						<Typography style={{fontSize :'21px' , marginBottom :'50px'}}>
							Get Yandere Shiba before she gets you - a lewd token on the
							undisputable L1 leader chain Ethereum. Once you touch her there is
							no coming back, she will launch you towards the stars whatever it
							costs.
						</Typography>
					</div>
					<div className={styles.comming__right}>
						<img src={homepageConfig?.secondImage} alt="banner" />
					</div>
				</Container>
				<Container className={styles.heading}>
					<Typography component="h2" className={styles.title3__rotate}>
						Heading Heading Heading
					</Typography>
					
					<div className={styles.heading__list}>
						<img src={art1} className={styles.heading__imgset} />
						<img src={art2} className={styles.heading__imgset} />
						<img src={art3} className={styles.heading__imgset} />
					</div>
					<div className={styles.heading__publish}>
						<div className={styles.heading__backset} ></div>
						<Typography className={styles.heading__back_letterset}>Dear holders,<br /><br />
							Our team is stuck in Ukraine, a massive warzone. Only May (me) is operational. Half of our team is no-communication. funding was cut and we lost access to our official Twitter. Marketing, on which we spent 5 figures USD, is postponed indefinitely.<br /><br />
							We were about to launch our NFT collection and start working on the Visual Novel (think a quest browser game)<br /><br />
							War between our countries ruined all dreams, plans and hopes of nations involved. <br /><br /></Typography>
					</div>
					{/* <div>
						<img src={art4} className={styles.heading__underimg} />
					</div> */}
					<div className={styles.featuredimg__list__wrapper}>
						<Typography component="h2" className={styles.title3__featuredrotate}>
							Featured Yandere NFTs
						</Typography>
						
						<div className={styles.featuredimg__list}>
							<img src={featured_1} className={styles.featuredimg__imgset} />
							<img src={featured_2} className={styles.featuredimg__imgset} />
							<img src={featured_3} className={styles.featuredimg__imgset} />
							<img src={featured_4} className={styles.featuredimg__imgset} />
						</div>
					</div>
					<div className={styles.visual_novel_div_mob}>
						<Typography className={styles.visual_novel_div_mob__content}>Visual novel <br/> sneak peak</Typography>
					</div>
				</Container>
				<Container className={styles.featured}>
					<Typography component="h2" className={styles.title3}>
						but we aren’t giving up
					</Typography>
					<div className={styles.featured__set}>
						<div className={styles.featured__left}>
							<img src={ansa3} className={styles.featured__img} alt="" />
						</div>
						<div className={styles.featured__right}>
							<Typography className={styles.heading__back_letterset}>
									I still have access to our website and telegram group. And I want to cheer up our team when they come back. I want them to see their token allocation moon.<br /><br />
									We want to line in a democracy. Meet in a safe place, where we can finally puruse our dreams.<br /><br />
									Peace is a privilege, and I will earn it together with you. <br /><br />
							</Typography>
						</div>
					</div>
				</Container>
				<Container className={styles.goals_contain} style={{padding: '0', marginBottom: '34px'}}>
					<Typography component="h1" className={styles.title3}>
						we will keep going
					</Typography>
					<div className={styles.goals}>
						<div style={{flex: '1'}}>
							<div className={styles.goals__left}>
								<Typography component="h2" style={{fontSize: '52px'}}>Goals</Typography>
								<Typography style={{padding: '0', fontSize: '18px'}}> 
									<span style={{fontSize: '20px'}}>SAFETY</span><br/><br/>
									We want our team to be safe. Getting through this unprecedent event back together requies a lot of funds. Transportation, evacuation and accomodation are costly.
									<br/><br/>
									<span style={{fontSize: '20px'}}>CHARITY</span><br/><br/>
									Whatever funds will be avaliable after all safety and development campaign shall be spent on political and humanitarian efforts.
									<br/><br/>
									<span style={{fontSize: '20px'}}>COMMUNITY</span><br/><br/>
									This is still a for-profit project. Despite charirty elements and team residence, if you want to assist Ukranian people directly, please donate to Ukraine on twitter. But if you want to speculate on shitcoins, we should build something worthy.
								</Typography>
							</div>
						</div>
						<div className={styles.goals__right} style={{flex: '1'}}>
							<img src={yacaec1} alt="banner" />
						</div>
					</div>
					<div style={{padding: '0', maxWidth: '762px', textAlign: 'left'}}>
						<Typography component="p" style={{fontSize: '36px', fontWeight: 'bold'}}>Our team members do not belong to crazy dictatorships.</Typography>
						<br/><Typography component="p" style={{fontSize: '36px', fontWeight: 'bold'}}>Our team members do not deserve to be displaced my war.</Typography>
						<br/><Typography component="p" style={{fontSize: '36px', fontWeight: 'bold'}}>Our team members should not struggle under Putin’s regime.</Typography>
						<br/><Typography component="p" style={{fontSize: '36px', fontWeight: 'bold'}}>ПУТИН - ХУЙЛО!</Typography>
					</div>
				</Container>

				<Container className={classNames(styles.tokenomics)}>
					<img className={styles.tokenomics__fone} src={tokenomiks} />
					<div className={styles.tokenomics__frame}></div>
					<Typography className={styles.title3}>
						{homepageConfig.header4}
					</Typography>
					<div>
						<img src={z_sign} className={styles.tokenomics__zsign} />
						<div className={styles.icons}>
							<div className={styles.icons__item} >
								<Circle
									circleIcon={IconWhite}
									circleIconClassName={styles.icons__white}
									src={token_icon_2}
									className={styles.icon}
									icon={false}
								/>
								<Typography>1% of it is redistributed across all wallets</Typography>
							</div>
							<div className={styles.icons__item} >
								<Circle
									circleIcon={IconWhite}
									circleIconClassName={styles.icons__white}
									src={token_icon_3}
									className={styles.icon}
									icon={false}
								/>
								<Typography>5% goes to liquidity to make the coin less volatile</Typography>
							</div>
							<div className={styles.icons__item} >
								<Circle
									circleIcon={IconWhite}
									circleIconClassName={styles.icons__white}
									src={token_icon_1}
									className={styles.icon}
									icon={false}
								/>
								<Typography>2% goes to promoting YANSH and supporting the brand image</Typography>
							</div>
						</div>
						<div className={styles.tokenomics__footer}>
								<div className={styles.tokenomics__footer_item}>
									<Typography
										component="span"
										className={styles.footer_item__title}
									>
										Value<br/>Lorem ipsum dolor sit amet
									</Typography>
								</div>
								<div className={styles.tokenomics__footer_item}>
									<Typography
										component="span"
										className={styles.footer_item__value}
									>
										Holders<br/>Lorem ipsum dolor sit amet
									</Typography>
								</div>
								<div className={styles.tokenomics__footer_item}>
									<Typography
										component="span"
										className={styles.footer_item__value}
									>
										Burned<br/>Lorem ipsum dolor sit amet
									</Typography>
								</div>
						</div>
					</div>
				</Container>
				<Container className={styles.team}>
					<Typography component="h1" className={styles.title3}>
						{homepageConfig.header5}
					</Typography>
					<div className={styles.icons}>
						{team?.map((e) => (
							<div
								className={classNames(
									styles.icons__item,
									styles.icons__item_team
								)}
								key={e.id}
							>
								<Circle
									circleIcon={IconRed}
									circleIconClassName={styles.icons__white}
									src={e.image}
									className={styles.icon__red}
									marginImg={3}
								/>
								<div>
									<Typography component="span">{e.name}</Typography>
									<Typography>{e.text}</Typography>
								</div>
							</div>
						))}
					</div>
				</Container>
				<Container className={styles.coinGecko}>
					<Typography component="h1" className={styles.title3}>
						{homepageConfig.header6}
					</Typography>
					<div className={styles.coinGecko__container}>
						{featured?.map((e) => (
							<img src={e.image} alt="coin" key={e.id} />
						))}
					</div>
				</Container>
			</Main>
		</div>
	)
}

export default Home
