import React from 'react'

import Navigation from './UI/Navigation/Navigation'
import classes from './Window.module.css'

const Window = ({title}) => {
    return (
        <div className={classes.WindowWrapper}>
            <Navigation windowTitle={title}/>
            <p> Window</p>
        </div>
    )
}

export default Window;