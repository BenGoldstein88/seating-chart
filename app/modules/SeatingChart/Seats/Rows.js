import React from 'react';
import Row from './Row'

import styles from './rowsStyle';

export default class rows extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
  	let rows = [];
	for(var row in this.props.rows) {
		rows.push(<Row
			key={row}
			draggable={true} 
			number={this.props.rows[row].number}
			name={this.props.rows[row].name}
			length={this.props.rows[row].length}
			seats={{
				"1": {name: "1"},
				"2": {name: "2"},
				"3": {name: "3"},
				"4": {name: "4"}
			}} />)
	}  		
	
    return (
      <div className={styles.rows}>
      	{rows}
      </div>
    );
  }
}
