import React from "react"

const Bg = ({ children }) => {
	return (
		<div className="bg">
			<svg
				className="s1"
				width="559"
				height="752"
				viewBox="0 0 559 752"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_f_5_8402)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M-280.418 217.986C-201.209 154.295 -110.454 116.866 -4.83217 116.618C128.67 116.304 283.079 108.718 370.55 216.456C463.134 330.492 456.969 493.252 403.427 619.469C355.971 731.339 235.647 777.683 117.91 812.014C7.80245 844.12 -108.531 854.182 -216.869 800.341C-341.939 738.184 -477.681 643.879 -492.433 508.689C-506.737 377.61 -378.74 297.044 -280.418 217.986Z"
						fill="url(#paint0_linear_5_8402)"
						fillOpacity="0.34"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_5_8402"
						x="-609.535"
						y="0.394531"
						width="1167.78"
						height="954.016"
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
							stdDeviation="58"
							result="effect1_foregroundBlur_5_8402"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_5_8402"
						x1="445.5"
						y1="163.5"
						x2="-408.453"
						y2="726.813"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#E789DE" />
						<stop offset="1" stopColor="#E789DE" stop-opacity="0" />
					</linearGradient>
				</defs>
			</svg>
			{children}
			<svg
				className="s2"
				width="761"
				height="862"
				viewBox="0 0 761 862"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g filter="url(#filter0_f_5_8401)">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M1025.98 278.092C868.931 430.283 922.063 750.345 717.919 745.59C511.462 740.781 460.975 488.532 360.64 320.374C255.491 144.144 50.9502 -17.5835 137.645 -226.942C224.603 -436.936 501.463 -462.636 715.672 -536.988C914.7 -606.07 1122.24 -711.24 1296.89 -629.313C1488.86 -539.262 1633.42 -341.047 1609.03 -117.926C1586.68 86.4688 1182.18 126.728 1025.98 278.092Z"
						fill="url(#paint0_linear_5_8401)"
						fillOpacity="0.02"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_5_8401"
						x="0.757812"
						y="-775.196"
						width="1726.96"
						height="1636.84"
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
							stdDeviation="58"
							result="effect1_foregroundBlur_5_8401"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_5_8401"
						x1="-736.534"
						y1="964.485"
						x2="2070.3"
						y2="-450.293"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.423956" stopColor="#F44A65" />
						<stop offset="1" stopColor="#FFF16D" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

export default Bg
