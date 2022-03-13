import React from "react"

const IconRed = React.forwardRef((props, ref) => {
	return (
		<svg {...props} width="242" height="242" viewBox="0 0 242 242" ref={ref}>
			<circle
				cx="121"
				cy="121"
				r="120.5"
				stroke="url(#paint0_radial_95_329)"
				strokeOpacity="0.4"
				fill="none"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_95_329"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(26.3619 -18.0345) rotate(58.1582) scale(355.12 528.622)"
				>
					<stop stopColor="#940986" />
					<stop offset="1" stopColor="#F44A65" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>
	)
})

export default IconRed
