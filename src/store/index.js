import { configureStore } from "@reduxjs/toolkit";

import auditsReducer from "./audits-slice";
import calendarReducer from "./calendar-slice";
import categoriesReducer from "./categories-slice";
import collectionCentersReducer from "./collection-centers-slice";

const store = configureStore({
  reducer: {
    centers: collectionCentersReducer,
    audits: auditsReducer,
    categories: categoriesReducer,
    calendar: calendarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
