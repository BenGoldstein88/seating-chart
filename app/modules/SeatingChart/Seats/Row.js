import React from 'react';

import Draggable from 'react-draggable';
import Seat from './Seat';
import styles from './rowStyle';
export default class Row extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
  	let seats = [];
	for(var seat in this.props.seats) {
		seats.push(<Seat
			key={seat}
			draggable={false} 
			// level={this.props.seats[seat].level}
			// row={this.props.seats[seat].row}
			// number={this.props.seats[seat].number}
			name={this.props.seats[seat].name} />);
	}    	
    return (
      <Draggable 
        // axis="x"
        // handle=".handle"
        // defaultPosition={{x: 0, y: 0}}
        // position={null}
        // grid={[25, 25]}
        // zIndex={100}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className={styles.row}>
        	{seats}
        </div>
      </Draggable>
    );
  }
}
