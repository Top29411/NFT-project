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
		<Main component={HomeBg}>
			<div className={styles.banner}>
				<img
					className={styles.mainImg}
					src={homepageConfig?.mainImage}
					alt="banner"
				/>
			</div>
			<Container className={styles.comming}>
				<div className={styles.comming__left}>
					<Typography component="h2">{homepageConfig.title}</Typography>
					{text &&
						text.map((e, i) => {
							if (i >= 1) {
								return (
									<Typography className={styles.comming__list} key={e}>
										{e}
									</Typography>
								)
							}
							return <Typography key={e}>{e}</Typography>
						})}

					{/* <Typography>
						Get Yandere Shiba before she gets you - a lewd token on the
						undisputable L1 leader chain Ethereum. Once you touch her there is
						no coming back, she will launch you towards the stars whatever it
						costs.
					</Typography> */}
				</div>
				<div className={styles.comming__right}>
					<img src={homepageConfig?.secondImage} alt="banner" />
				</div>
			</Container>
			<Container className={styles.heading}>
				<Typography component="h1" className={styles.title3}>
					{homepageConfig.header1}
				</Typography>
				<CardList className={styles.heading__list}>
					{/* {heading?.map((e) => ( */}
					{heading?.length > 0 && <BuyCard src={heading[0].image} />}
					{/* ))} */}
				</CardList>
			</Container>
			<Container className={styles.featured}>
				<Typography component="h1" className={styles.title3}>
					{homepageConfig.header2}
				</Typography>
				<CardList className={styles.featured__list}>
					{ntf?.map((e) => (
						<Card src={e.image} buy={false} small key={e.id} />
					))}
				</CardList>
			</Container>
			{/* <Container
				className={classNames(styles.visual_novel, {
					[styles.visual_novel_active]: whiteFone,
				})}
			>
				<h1 className={styles.title}>{homepageConfig.header3}</h1>
				{homepageConfig?.visualNovelImage && (
					<img src={homepageConfig.visualNovelImage} alt="novel" />
				)}
			</Container> */}
			<Container className={classNames(styles.tokenomics)}>
				<img className={styles.tokenomics__fone} src={tokenomiks} />
				<Typography className={styles.title3}>
					{homepageConfig.header4}
				</Typography>
				<div className={styles.icons}>
					{tokenomiks?.items?.map(
						(e, i) =>
							i <= 2 && (
								<div className={styles.icons__item} key={e.id}>
									<Circle
										circleIcon={IconWhite}
										circleIconClassName={styles.icons__white}
										src={e.image}
										className={styles.icon}
										icon={false}
									/>
									<Typography>{e.text}</Typography>
								</div>
							)
					)}
				</div>
				<div className={styles.tokenomics__footer}>
					{tokenomiks?.nextItems?.map((e) => (
						<div className={styles.tokenomics__footer_item}>
							<Typography
								component="span"
								className={styles.footer_item__title}
							>
								{e.label}
							</Typography>
							<Typography
								component="span"
								className={styles.footer_item__value}
							>
								{e.text}
							</Typography>
						</div>
					))}
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
	)
}

export default Home
