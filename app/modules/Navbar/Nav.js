import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router';

import styles from './navStyle';


let NavLink = React.createClass({
  render() {
    let navClasses = `${this.props.fontDark && styles.dark}`;
    return (
      <Link to={this.props.to} className={navClasses} activeClassName={styles.navActive}>
        {this.props.name}
      </Link>
    );
  }
});

let QuoteLink = function(props){
  return (
    <Link
      className={props.hover && !props.active && styles.hovered || !props.hover && !props.active && props.fontDark && styles.dark}
      activeClassName={styles.navActive}
      onMouseEnter={props.toggleHoverOn}
      onMouseLeave={props.toggleHoverOff}
      to={props.to}>{props.children}</Link>
  );
};

let Mobile = function(props){
  let toggleClasses = `${styles.mobileToggle} ${props.open && styles.open} ${props.fontDark && styles.dark}`;
  let navClasses = `${styles.navItem} ${styles.mobileNavItem}`;

  return (
    <div className={styles.mobileContainer}>
      <div className={styles.toggleBox} onClick={props.onClick}>
        <div className={toggleClasses}/>
      </div>
      <ReactCSSTransitionGroup
        transitionName={styles}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}>
        {props.open &&
          <div className={styles.mobileDrawer}>
            <div className={styles.block}/>
            <div className={navClasses}><NavLink to="/about" fontDark={false} name="ABOUT US"/></div>
            <div className={navClasses}><NavLink to="/events" fontDark={false} name="EVENTS"/></div>
            <div className={navClasses}><NavLink to="/services" fontDark={false} name="SERVICES"/></div>
            <div className={navClasses}><NavLink to="/kartwheel" fontDark={false} name="KARTWHEEL"/></div>
          </div>}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default React.createClass({
  getInitialState() {
    return {
      quoteHover: false,
    };
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  toggleHoverOn() {
    this.setState({quoteHover:true});
  },
  toggleHoverOff() {
    this.setState({quoteHover:false});
  },

  render() {
    // let quoteActive = this.context.router.isActive('/quote');
    let fontDark = this.props.fontDark;
    let mobile = this.props.version==='mobile'?true:false;

    return (
      <div className={styles.nav}>


      </div>
    );
  }
});
