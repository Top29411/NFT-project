import React from "react"
import styles from "./Home.module.sass"

import s1 from "./sakura.png"
import s2 from "./sacura_2.svg"

const HomeBg = ({ children }) => {
	return (
		<div className={styles.overlay}>
			<div className={styles.sacura_1}>
				<img src={s1} alt="" />
				<svg
					width="569"
					height="757"
					viewBox="0 0 569 757"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_f_46_4722)">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M63.9262 254.905C146.358 192.959 220.081 86.9451 306.945 89.9889C394.793 93.0671 391.136 197.388 417.224 267.285C444.565 340.537 515.881 408.334 457.827 494.235C399.596 580.397 278.573 589.53 179.482 619.065C87.4135 646.506 -11.9091 688.788 -78.4278 654.068C-151.543 615.904 -193.543 533.374 -160.765 441.466C-130.739 357.271 -18.0578 316.515 63.9262 254.905Z"
							fill="url(#paint0_linear_46_4722)"
							fillOpacity="0.64"
						/>
					</g>
					<defs>
						<filter
							id="filter0_f_46_4722"
							x="-261.051"
							y="0.924805"
							width="830.027"
							height="755.234"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation="44.5"
								result="effect1_foregroundBlur_46_4722"
							/>
						</filter>
						<linearGradient
							id="paint0_linear_46_4722"
							x1="1110.7"
							y1="2.46481"
							x2="-260.052"
							y2="361.272"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#F44A65" />
							<stop offset="1" stopColor="#FFF16D" stopOpacity="0.24" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<img className={styles.sacura_2} src={s2} alt="" />
			{children}
		</div>
	)
}

export default HomeBg
