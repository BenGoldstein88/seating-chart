import React from 'react';

import styles from './addSeatButtonStyle'

export default class AddSeatButton extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	let seat = {
  		level: 0,
  		row: 0,
  		number: 0,
  		name: "1A",

  	}
  	this.props.addSeat(seat);
  }

  render() {
    return (
      <div className={styles.addSeatButton} onClick={this.handleClick}>
      	<p>+</p>
      </div>
    );
  }
}
