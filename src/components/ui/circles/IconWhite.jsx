import React from "react"

const IconWhite = React.forwardRef((props, ref) => {
	return (
		<svg
			width="155"
			height="154"
			viewBox="0 0 155 154"
			fill="none"
			{...props}
			ref={ref}
		>
			<circle cx="77.5" cy="77" r="76.5" stroke="url(#paint0_radial_95_4947)" />
			<defs>
				<radialGradient
					id="paint0_radial_95_4947"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(17.2757 -11.4765) rotate(58.1582) scale(225.985 336.396)"
				>
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>
	)
})

export default IconWhite
