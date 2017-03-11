import React from 'react';
import Seat from './Seat'

import styles from './seatsStyle';

export default class Seats extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
  	let seats = [];
  	// if(!!this.props.seats) { 		
	  	// seats = this.props.seats.map(function(seat) {
	for(var seat in this.props.seats) {
		seats.push(<Seat
			key={seat}
			draggable={true} 
			level={this.props.seats[seat].level}
			row={this.props.seats[seat].row}
			number={this.props.seats[seat].number}
			name={this.props.seats[seat].name} />);
	}  		
	
    return (
      <div className={styles.seats}>
      	{seats}
      </div>
    );
  }
}
