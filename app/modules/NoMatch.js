import React from 'react';

export default React.createClass({
  title: 'Whoops don\'t seem to see that here,',
  subtitle: 'try again?',

  render: function() {
    return (
      <div className='new-page'>
        <div className='page-title'>{this.title}<br />{this.subtitle}</div>
      </div>
    );
  }
});
