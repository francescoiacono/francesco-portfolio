import React from 'react'

import Navigation from './UI/Navigation/Navigation'
import WindowContent from './WindowContent/WindowContent'
import classes from './Window.module.css'
import WindowProvider, { WindowContext } from '../../Providers/Window'


const Window = ({title}) => {
    return (
        <WindowProvider>
            <div className={classes.WindowWrapper}>
                <Navigation windowTitle={title}/>
                <WindowContext.Consumer>{({open})=>open?<WindowContent/> : null}</WindowContext.Consumer>
            </div>
        </WindowProvider>
    )
}

export default Window;