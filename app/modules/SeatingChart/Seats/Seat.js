import React from 'react';

import Draggable from 'react-draggable';
import styles from './seatStyle';
export default class Seat extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.draggable) {
      return (
        <div className={styles.seat}>
          <p className={styles.name}>{this.props.name}</p>
        </div>)
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
        <div className={styles.seat}>
        	<p className={styles.name}>{this.props.name}</p>
        </div>
      </Draggable>
    );
  }
}
