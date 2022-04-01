import React from 'react'
import './button.styles.scss'

export const BUTTON_TYPE_CLASSES = {
    normal:'normal',
    inverted:"inverted",
    google:'google-sign-in',
    shop:'shop'
}

const Button = ({children,buttonType,...otherProps}) => {
  return (
    <button className={`btn ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps} >{children}</button>
  )
}

export default Button