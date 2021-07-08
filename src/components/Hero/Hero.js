import React from 'react';
import IconButton from '../IconButton/IconButton';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <div className={classes.HeroWrapper}>
      <h1>Francesco Iacono</h1>
      <div className={classes.IBContainer}>
        <IconButton title='About Me' />
      </div>
    </div>
  );
};

export default Hero;
