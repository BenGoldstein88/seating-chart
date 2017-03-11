import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SeatingChartActions from '../../actions';


import SeatingChart from '../SeatingChart/SeatingChart';


const mapStateToProps = state => ({
	currentUser: state.currentUser,
	seats: state.seats,
	rows: state.rows
	// ticketTiers: state.ticketTiers,
	// eventInfo: state.eventInfo
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(SeatingChartActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeatingChart)