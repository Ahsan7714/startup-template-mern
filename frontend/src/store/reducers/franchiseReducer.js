import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import baseurl from "../baseUrl";
const initialState={
    loading:false,
    isLogin:false,
    error:"",
    allOwnFranchiseSeries:[],
    allOwnFranchiseDrinks:[],
    isSeriesAdded:false,
    isSeriesDeleted:false,
    isDrinkAdded:false,
    isDrinkDeleted:false,
    ownMenu:{},
    user:null


}


export const login = createAsyncThunk(
    "/login/franchise",
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
        const { data } = await axios.post(`${baseurl}/user/login/`, info,
        {
            withCredentials:true
        }
        );
        return fulfillWithValue(data);
        } catch (error) {
        return rejectWithValue(error.response.data);
        }
    }
    );


    // get all franchise series means get own franchise series
    export const getAllOwnFranchiseSeries = createAsyncThunk(
        "/get/all/franchise/series",
        async (info, { rejectWithValue, fulfillWithValue }) => {
            try {
            const { data } = await axios.get(`${baseurl}/user//menu/series`,
            {
                withCredentials:true
            }
            );
            return fulfillWithValue(data);
            } catch (error) {
            return rejectWithValue(error.response.data);
            }
        }
        );

       // add series to the menu
       export const addSeriesToMenu = createAsyncThunk(
        "/add/series/to/menu",
        async (info, { rejectWithValue, fulfillWithValue }) => {
            try {
            const { data } = await axios.post(`${baseurl}/user/menu/series`,info,
            {
                withCredentials:true
            }
            );
            return fulfillWithValue(data);
            } catch (error) {
            return rejectWithValue(error.response.data);
            }
        }
        );

        // delete the series from the menu
        export const deleteSeriesFromMenu = createAsyncThunk(
            "/delete/series/from/menu",
            async (info, { rejectWithValue, fulfillWithValue }) => {
                try {
                const { data } = await axios.delete(`${baseurl}/user/menu/series/${info}`,
                {
                    withCredentials:true
                }
                );
                return fulfillWithValue(data);
                } catch (error) {
                return rejectWithValue(error.response.data);
                }
            }
            );

            // get all drinks of own menu 
            export const getAllOwnFranchiseDrinks = createAsyncThunk(
                "/get/all/franchise/drinks",
                async (info, { rejectWithValue, fulfillWithValue }) => {
                    try {
                    const { data } = await axios.get(`${baseurl}/user/menu/drinks`,
                    {
                        withCredentials:true
                    }
                    );
                    return fulfillWithValue(data);
                    } catch (error) {
                    return rejectWithValue(error.response.data);
                    }
                }
                );

                // add drinks to the menu
                export const addDrinksToMenu = createAsyncThunk(
                    "/add/drinks/to/menu",
                    async (info, { rejectWithValue, fulfillWithValue }) => {
                        try {
                        const { data } = await axios.post(`${baseurl}/user/menu/drink`,info,
                        {
                            withCredentials:true
                        }
                        );
                        return fulfillWithValue(data);
                        } catch (error) {
                        return rejectWithValue(error.response.data);
                        }
                    }
                    );

                    // delete the drinks from the menu
                    export const deleteDrinksFromMenu = createAsyncThunk(
                        "/delete/drinks/from/menu",
                        async (info, { rejectWithValue, fulfillWithValue }) => {
                            try {
                            const { data } = await axios.delete(`${baseurl}/user/menu/drink/${info}`,
                            {
                                withCredentials:true
                            }
                            );
                            return fulfillWithValue(data);
                            } catch (error) {
                            return rejectWithValue(error.response.data);
                            }
                        }
                        );

                        // get own meun
                        export const getOwnMenu = createAsyncThunk(
                            "/get/own/menu",
                            async (info, { rejectWithValue, fulfillWithValue }) => {
                                try {
                                const { data } = await axios.get(`${baseurl}/user/menu/own`,
                                {
                                    withCredentials:true
                                }
                                );
                                return fulfillWithValue(data);
                                } catch (error) {
                                return rejectWithValue(error.response.data);
                                }
                            }
                            );


                            // load user 
                            export const loadUser = createAsyncThunk(
                                "/load/user",
                                async (info, { rejectWithValue, fulfillWithValue }) => {
                                    try {
                                    const { data } = await axios.get(`${baseurl}/user/me`,
                                    {
                                        withCredentials:true
                                    }
                                    );
                                    return fulfillWithValue(data);
                                    } catch (error) {
                                    return rejectWithValue(error.response.data);
                                    }
                                }
                                );

                                // logout 
                                export const logout = createAsyncThunk(
                                    "/logout",
                                    async (info, { rejectWithValue, fulfillWithValue }) => {
                                        try {
                                        const { data } = await axios.get(`${baseurl}/user/logout`,
                                        {
                                            withCredentials:true
                                        }
                                        );
                                        return fulfillWithValue(data);
                                        } catch (error) {
                                        return rejectWithValue(error.response.data);
                                        }
                                    }
                                    );




                        export const franchiseReducer = createSlice({
    name: 'login franchise',
    initialState: initialState,
   reducers:{
    clearState:(state)=>{
        state.isLogin=false;
        state.error="";
        state.isSeriesAdded=false;
        state.isSeriesDeleted=false;
        state.isDrinkAdded=false;
        state.isDrinkDeleted=false;


    }
   },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state,action) => {
            state.loading = false;
            state.isLogin = true;
            state.user = action.payload.user;
        });
        builder.addCase(login.pending, (state) => {
            state.loading = true;

        });
        builder.addCase(login.rejected, (state,action) => {
            state.loading = false;
            state.isLogin = false;
            state.error=action.payload.message
            state.user = null;
        });

        // get all own franchise series
        builder.addCase(getAllOwnFranchiseSeries.fulfilled, (state,action) => {
            state.loading = false;
            state.allOwnFranchiseSeries = action.payload.series;
        });
        builder.addCase(getAllOwnFranchiseSeries.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllOwnFranchiseSeries.rejected, (state,action) => {
            state.loading = false;
            state.allOwnFranchiseSeries = [];
            state.error=action.payload.message
            
        });
        // add series to menu
        builder.addCase(addSeriesToMenu.fulfilled, (state,action) => {
            state.loading = false;
            state.isSeriesAdded = true;
        });
        builder.addCase(addSeriesToMenu.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addSeriesToMenu.rejected, (state,action) => {
            state.loading = false;
            state.isSeriesAdded = false;
            state.error=action.payload.message
            
        });
// delete the seroes
builder.addCase(deleteSeriesFromMenu.fulfilled, (state) => {
    state.loading = false;
    state.isSeriesDeleted = true;
}
);
builder.addCase(deleteSeriesFromMenu.pending, (state) => {
    state.loading = true;
}
);
builder.addCase(deleteSeriesFromMenu.rejected, (state,action) => {
    state.loading = false;
    state.isSeriesDeleted = false;
    state.error=action.payload.message
})
// get all drinks in a menu
builder.addCase(getAllOwnFranchiseDrinks.fulfilled, (state,action) => {
    state.loading = false;
    state.allOwnFranchiseDrinks = action.payload.drinks;
}
);
builder.addCase(getAllOwnFranchiseDrinks.pending, (state) => {
    state.loading = true
}
);
builder.addCase(getAllOwnFranchiseDrinks.rejected, (state,action) => {
    state.loading = false;
    state.allOwnFranchiseDrinks = [];
    state.error=action.payload.message
})

// add drink
builder.addCase(addDrinksToMenu.fulfilled, (state) => {
    state.loading = false;
    state.isDrinkAdded = true;
}
);
builder.addCase(addDrinksToMenu.pending, (state) => {
    state.loading = true;
}
);
builder.addCase(addDrinksToMenu.rejected, (state,action) => {
    state.loading = false;
    state.isDrinkAdded = false;
    state.error=action.payload.message
}
);

// delete the drink
builder.addCase(deleteDrinksFromMenu.fulfilled, (state) => {
    state.loading = false;
    state.isDrinkDeleted = true;
}
);
builder.addCase(deleteDrinksFromMenu.pending, (state) => {
    state.loading = true;
}
);
builder.addCase(deleteDrinksFromMenu.rejected, (state,action) => {
    state.loading = false;
    state.isDrinkDeleted = false;
    state.error=action.payload.message
}
);
// get own menu
builder.addCase(getOwnMenu.fulfilled, (state,action) => {
    state.loading = false;
    state.ownMenu = action.payload.menu;
}
);
builder.addCase(getOwnMenu.pending, (state) => {
    state.loading = true;
}
);
builder.addCase(getOwnMenu.rejected, (state,action) => {
    state.loading = false;
    state.ownMenu = {};
    state.error=action.payload.message
}
);

builder.addCase(loadUser.fulfilled, (state,action) => {
    state.loading = false;
    state.user = action.payload.user;
}
);
builder.addCase(loadUser.pending, (state) => {
    state.loading = true;
}
);
builder.addCase(loadUser.rejected, (state) => {
    state.loading = false;
    state.user = null;
}
);

// logout 
builder.addCase(logout.fulfilled, (state) => {
    state.loading = false;
    state.isLogin = false;
    state.user = null;
}
);
builder.addCase(logout.pending, (state) => {
    state.loading = true;
}
);
builder.addCase(logout.rejected, (state) => {
    state.loading = false;
    state.isLogin = false;
    state.user = {};
}
);




    },
});

export default franchiseReducer.reducer;
export const {clearState} = franchiseReducer.actions;