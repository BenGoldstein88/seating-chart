import React from 'react';

import styles from './footerStyle';

export default React.createClass({
  render() {
    return (
      <div>
        <div className={styles.footerBuffer}/>
        <div className={styles.footer}>
          <div className={styles.handstand}>
            <div className={styles.logo}/>
            <div className={styles.text}>
              Together we create challenging and playful experiences to inspire
              people to push their limits and deepen their connections with one another.
            </div>
          </div>

          <div className={styles.contactContainer}>
            <div className={styles.social}>
              <a href='https://www.facebook.com/teamhandstand/' target='_blank'><div className={styles.facebook}/></a>
              <a href='https://www.instagram.com/teamhandstand/' target='_blank'><div className={styles.instagram}/></a>
              <a href='https://twitter.com/teamhandstand' target='_blank'><div className={styles.twitter}/></a>
            </div>
            <div className={styles.contact}>
                <a href='mailto:support@handstandwith.us'>
                  <strong>
                    Email
                  </strong>
                  /
                </a>
                <a href='facetime:support@handstandwith.us'>
                  <strong>
                    FaceTime
                  </strong>
                  : &nbsp;
                </a>
                <a href='mailto:support@handstandwith.us'>
                  support@handstandwith.us
                </a>
            </div>
          </div>

        </div>
      </div>


    );
  }
});
