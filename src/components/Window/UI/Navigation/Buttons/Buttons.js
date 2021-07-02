import React from 'react'

import Button from './Button/Button'
import classes from './Buttons.module.css'

const Buttons = () => {
    return (
        <div className={classes.ButtonsWrapper}>
            <Button color="#ff5f5f" type="closeWindow"/>
            <Button color='#ffd807' type='minimizeWindow'/>
            <Button color="#1fdd1f" type='enlargeWindow'/>
        </div>
    )
}

export default Buttons;