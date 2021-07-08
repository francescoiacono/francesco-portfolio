import React from 'react'
import { useWindow } from '../../../../../../Providers/Window'
import classes from './Button.module.css'

const Button = ({color, type}) => {
    const {toggleOpen} = useWindow();

    return (
        <div onClick={toggleOpen} className={classes.Button} style={{
            background: `${color}`
        }}>
            {type === 'closeWindow' && <p></p>} 
            {type === 'minimizeWindow' && <p></p>} 
            {type === 'enlargeWindow' && <p></p>} 
        </div>
    )
}

export default Button;