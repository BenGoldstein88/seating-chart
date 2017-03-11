import React from 'react';

import styles from './addRowButtonStyle'

export default class AddRowButton extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	e.preventDefault();
  	let row = {
  		level: 0,
  		number: 0,
  		name: "X",
  		length: 0
  	}
  	this.props.addRow(row);
  }

  render() {
    return (
      <div className={styles.addRowButton} onClick={this.handleClick}>
      	<p>+</p>
      </div>
    );
  }
}
