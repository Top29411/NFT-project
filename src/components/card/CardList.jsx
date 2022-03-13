import classNames from "classnames"
import React from "react"
import styles from "./Card.module.sass"

const CardList = ({ children, className }) => {
	return <div className={classNames(styles.list, className)}>{children}</div>
}

export default CardList
