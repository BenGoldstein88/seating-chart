let currentSeatId = 0;
let currentRowId = 0;

export const setCurrentUser = (currentUser) => {
	return {
		type: "SET_CURRENT_USER",
		currentUser
	}
}

export const addSeat = (seat) => {
	currentSeatId++;
	return {
		type: "ADD_SEAT",
		seatId: currentSeatId,
		seat
	}
}

export const addRow = (row) => {
	currentRowId++;
	return {
		type: "ADD_ROW",
		rowId: currentRowId,
		row
	}
}