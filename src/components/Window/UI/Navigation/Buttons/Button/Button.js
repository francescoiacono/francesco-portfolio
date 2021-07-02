import React from 'react'
import classes from './Button.module.css'

const Button = ({color, type}) => {
    return (
        <div className={classes.Button} style={{
            background: `${color}`
        }}>
            {type === 'closeWindow' && <p>X</p>} 
            {type === 'minimizeWindow' && <p>—</p>} 
            {type === 'enlargeWindow' && <p>O</p>} 
        </div>
    )
}

export default Button;