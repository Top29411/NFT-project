import classNames from "classnames"
import React, { useEffect, useRef, useState } from "react"
import styles from "./Circle.module.sass"

const Circle = ({
	src,
	circleIcon: Component,
	circleIconClassName,
	className,
	marginImg,
	icon,
}) => {
	const [style, setStyle] = useState(null)
	const ref = useRef(null)
	useEffect(() => {
		if (ref.current && icon) {
			const width = +ref.current.clientWidth - parseInt(marginImg)
			const height = +ref.current.clientHeight - parseInt(marginImg)
			setStyle({ width, height })
		}
	}, [ref])
	return (
		<div className={classNames(styles.wrapper, className)}>
			{Component && (
				<Component ref={ref} className={circleIconClassName || ""} />
			)}
			<img className={styles.img} alt="icon" src={src || ""} style={style} />
		</div>
	)
}

export default Circle

Circle.defaultProps = {
	marginImg: 3,
	icon: true,
}
