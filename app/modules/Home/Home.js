import React from 'react';
import {Link} from 'react-router';

// Custom modules

// Style
import styles from './homeStyle';

export default React.createClass({
  render: function() {
    return (
      <div className={styles.home}>
        <p>Hello there!</p>
      </div>
    );
  }
});
