import { createSlice } from '@reduxjs/toolkit';

const LossesSlice = createSlice({
	name: 'losses',
	initialState: {
		value: [],
	},
	reducers: {
		setLosses: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setLosses } = LossesSlice.actions;
export default LossesSlice.reducer;
