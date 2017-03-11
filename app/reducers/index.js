import { combineReducers } from 'redux';
import currentUser from './currentUser';
import seats from './seats';
import rows from './rows';



const seatingChartApp = combineReducers({
	currentUser,
	seats,
	rows
})

export default seatingChartApp

