import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    ////////////////////////////////////////////////
    {
      id: "ZZ7K6TGcvV",
      text: "Accommodation and Environmental Conditions",
      centerId: "6Y6MqXMCWX",
    },
    { id: "fjZJ3Rs9rU", text: "Health & Safety", centerId: "6Y6MqXMCWX" },
    { id: "JVDoLZrxoK", text: "Beauty Center", centerId: "6Y6MqXMCWX" },
    ////////////////////////////////////////////////
    {
      id: "r53IxciA5o",
      text: "Accommodation and Environmental Conditions",
      centerId: "l8lKe9fomR",
    },
    { id: "_i5PgsC2gX", text: "Health & Safety", centerId: "l8lKe9fomR" },
    { id: "sL0o7O0CwN", text: "Beauty Center", centerId: "l8lKe9fomR" },
    // ////////////////////////////////////////////////
    {
      id: "L5ImHrHIvn",
      text: "Accommodation and Environmental Conditions",
      centerId: "EBqEUdf_zS",
    },
    { id: "pKnjs2TABP", text: "Health & Safety", centerId: "EBqEUdf_zS" },
    { id: "x8ZcGqjA4h", text: "Beauty Center", centerId: "EBqEUdf_zS" },
    ////////////////////////////////////////////////
    {
      id: "ZqL6ptJwgT",
      text: "Accommodation and Environmental Conditions",
      centerId: "W_3QSYFxuL",
    },
    { id: "_nEsf0OjTc", text: "Health & Safety", centerId: "W_3QSYFxuL" },
    { id: "E6QA4gpmq0", text: "Beauty Center", centerId: "W_3QSYFxuL" },
    ////////////////////////////////////////////////
    {
      id: "i2TBpYVRhJ",
      text: "Accommodation and Environmental Conditions",
      centerId: "LC8uBlVmvr",
    },
    { id: "XlBkPnd2mC", text: "Health & Safety", centerId: "LC8uBlVmvr" },
    { id: "zS5hiOMu0H", text: "Beauty Center", centerId: "LC8uBlVmvr" },
    ////////////////////////////////////////////////
    {
      id: "wb3QcelRAN",
      text: "Accommodation and Environmental Conditions",
      centerId: "cWfridkvNY",
    },
    { id: "dSAJ_Dh7E3", text: "Health & Safety", centerId: "cWfridkvNY" },
    { id: "m2yEjwhKkq", text: "Beauty Center", centerId: "cWfridkvNY" },
    ////////////////////////////////////////////////
    {
      id: "2qvbgz3gTQ",
      text: "Accommodation and Environmental Conditions",
      centerId: "D-niKOd3AF",
    },
    { id: "ys1DSp1W1S", text: "Health & Safety", centerId: "D-niKOd3AF" },
    { id: "kJbNSSDC5A", text: "Beauty Center", centerId: "D-niKOd3AF" },
    ////////////////////////////////////////////////
    {
      id: "5DMsceFBS0",
      text: "Accommodation and Environmental Conditions",
      centerId: "vBaNbqQws6",
    },
    { id: "uHOSYf6wG9", text: "Health & Safety", centerId: "vBaNbqQws6" },
    { id: "S44aCC38Wz", text: "Beauty Center", centerId: "vBaNbqQws6" },

    ////////////////////////////////////////////////
    {
      id: "43XQSesKM9",
      text: "Accommodation and Environmental Conditions",
      centerId: "siuCAuNF2U",
    },
    { id: "oSF0aU64z0", text: "Health & Safety", centerId: "siuCAuNF2U" },
    { id: "tVPqFfLeE0", text: "Beauty Center", centerId: "siuCAuNF2U" },
  ],
  centerCategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    getCenterCategories(state, action) {
      state.centerCategories = state.categories.filter(
        (category) => category.centerId === action.payload.centerId
      );
    },
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
