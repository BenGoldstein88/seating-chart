import React from 'react';

import AddSeatButton from './buttons/AddSeatButton';
import AddRowButton from './buttons/AddRowButton';
import Seats from './Seats/Seats';
import Rows from './Seats/Rows';
import styles from './seatingChartStyle';

export default class SeatingChart extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.seatingChart}>
      	<p>SEATINGCHART</p>
      	<AddSeatButton addSeat={this.props.actions.addSeat} />
        <AddRowButton addRow={this.props.actions.addRow} />
        <Seats seats={this.props.seats} />
        <Rows rows={this.props.rows} />
      </div>
    );
  }
}
