import classes from './Header.module.css';
import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='meals-img' />
      </div>
    </Fragment>
  );
};

export default Header;
