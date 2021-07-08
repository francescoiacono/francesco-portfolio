import React from 'react'

import classes from './IconButton.module.css'

const IconButton = ({title}) => {
    return (
        <div className={classes.IconButtonWrapper}>
            <button className={classes.IconButton}></button>
            <p>{title}</p>
        </div>
    )
}

export default IconButton