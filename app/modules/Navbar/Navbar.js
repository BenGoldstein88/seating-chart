import React from 'react';

import Nav from './Nav';


import styles from './navbarStyle';

export default React.createClass({
  getInitialState: function() {
    return {
      opacity: 0,
      windowHeight: 0,
      windowWidth: 0,
      actions: 0,
      fontDark: false,
      mobileOpen: false
    };
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  componentWillMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  },
  componentDidMount: function() {
    window.addEventListener('scroll', this.calculateStyle);
    this.calculateStyle();
  },
  calculateStyle() {
    let height = Number(Math.round(this.state.windowHeight/4));
    let opacity = (Math.round((100*(window.scrollY - 200)/height))/100);
    let fontDark = opacity>.3?true:false;

    this.setState({
      opacity: Math.min(1,opacity),
      fontDark: fontDark,
    });
    setTimeout(()=>{this.setState({mobileOpen: false});},100);
  },
  resize(){
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      mobileOpen: false
    });
  },
  updateActions(){
    this.setState({
      actions:this.state.actions + 1}
    );
  },
  mobileToggle(){
    this.setState({
      mobileOpen:!this.state.mobileOpen});
  },


  render: function() {
    // const aboutActive = this.context.router.isActive('/about');
    // const quoteActive = this.context.router.isActive('/quote');
    // const kartWheelActive = this.context.router.isActive('/kartwheel');
    // const kartWheelCheckoutActive = this.context.router.isActive('/kartwheel/checkout');
    // const kartWheelSuccessActive  = this.context.router.isActive('/kartwheel/success');

    let opaqueActive = true;

    let version = this.state.windowWidth<900?'mobile':'desktop';
    let backgroundColor = opaqueActive?'rgba(255,255,255,1)':`rgba(255,255,255,${this.state.opacity})`;
    let fontDark = this.state.mobileOpen?false:opaqueActive?true:this.state.fontDark;
    let boxShadow = `1px 1px 1px 0px rgba(0,0,0,${Math.min(.6, this.state.opacity)}) `;

    // let eventNav =
    //     <EventNav 
    //       fontDark={fontDark}
    //       version={version}
    //     />;

    let nav = <Nav
                updateActions={this.updateActions}
                fontDark={fontDark}
                version={version}
                mobileOpen={this.state.mobileOpen}
                onClick={this.mobileToggle}/>


    return(
      <div className={styles.navbarContainer}>
        <div className={styles.navbar} style={{background:backgroundColor,boxShadow:boxShadow}}>
          {nav}
        </div>
      </div>
    );
  }
});
