import React from 'react'

import Buttons from './Buttons/Buttons'
import classes from './Navigation.module.css'

const Navigation = ({windowTitle}) => {
    return (
        <div className={classes.NavigationWrapper}>
            <Buttons/>
            <div className={classes.NavigationTitle}>
            <h1>{windowTitle}</h1>
            </div>
        </div>
    )
}

export default Navigation;