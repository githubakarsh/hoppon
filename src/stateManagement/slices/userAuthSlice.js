import { createSlice  } from "@reduxjs/toolkit";

export const userAuthSlice = createSlice({
    name : 'userAuth',
    initialState: {
        userAuthDetails : {},
    },
    reducers: {
        setUserAuthDetails: (state, action) => {
            return {...state, userAuthDetails: action.payload};
        },
    }
});

export const { setUserAuthDetails } = userAuthSlice.actions;

export default userAuthSlice.reducer;