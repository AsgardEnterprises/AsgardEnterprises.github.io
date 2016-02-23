import React, { Component } from 'react';
import withStyles from '../withStyles.js';
import style from './Hero.scss';

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <div className="Hero__title">
          ASGARD
        </div>
      </div>
    );
  }
}

export default withStyles(Hero, style);
